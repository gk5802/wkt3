// backend/main.go
// Entry point for Go backend with custom auth, DB, email verification, and token system.
// No third-party packages used (except nodemailer in frontend for email sending).

package main

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"
)

type User struct {
	Email           string   `json:"email"`
	Name            string   `json:"name"`
	PasswordHash    string   `json:"password_hash"`
	Verified        bool     `json:"verified"`
	VerifyToken     string   `json:"verify_token"`
	TokensUsed      []string `json:"tokens_used"`
	Role            string   `json:"role"`
	CreatedAt       int64    `json:"created_at"`
}

var userStore = map[string]User{} // key: email

func hashPassword(password string) string {
	hash := sha256.Sum256([]byte(password))
	return hex.EncodeToString(hash[:])
}

func generateToken() string {
	b := make([]byte, 32)
	rand.Read(b)
	return hex.EncodeToString(b)
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var payload struct {
		Email    string `json:"email"`
		Name     string `json:"name"`
		Password string `json:"password"`
	}

	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil || payload.Email == "" || payload.Password == "" {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	email := strings.ToLower(strings.TrimSpace(payload.Email))
	if _, exists := userStore[email]; exists {
		http.Error(w, "User already exists", http.StatusConflict)
		return
	}

	verifyToken := generateToken()
	user := User{
		Email:        email,
		Name:         payload.Name,
		PasswordHash: hashPassword(payload.Password),
		Verified:     false,
		VerifyToken:  verifyToken,
		TokensUsed:   []string{},
		Role:         "user",
		CreatedAt:    time.Now().Unix(),
	}
	userStore[email] = user

	// Send token via frontend using nodemailer (not Go)
	log.Printf("[INFO] Verification token for %s: %s", email, verifyToken)

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"status": "registered", "verify_token": verifyToken})
}

func verifyEmailHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var payload struct {
		Email string `json:"email"`
		Token string `json:"token"`
	}

	_ = json.NewDecoder(r.Body).Decode(&payload)
	email := strings.ToLower(strings.TrimSpace(payload.Email))
	user, ok := userStore[email]
	if !ok || user.Verified || payload.Token != user.VerifyToken {
		http.Error(w, "Invalid token or already verified", http.StatusForbidden)
		return
	}

	user.Verified = true
	user.VerifyToken = ""
	userStore[email] = user

	json.NewEncoder(w).Encode(map[string]string{"status": "verified"})
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var payload struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	_ = json.NewDecoder(r.Body).Decode(&payload)
	email := strings.ToLower(strings.TrimSpace(payload.Email))
	user, ok := userStore[email]
	if !ok || !user.Verified || user.PasswordHash != hashPassword(payload.Password) {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	// Issue login token
	sessionToken := generateToken()
	user.TokensUsed = append(user.TokensUsed, sessionToken)
	userStore[email] = user

	json.NewEncoder(w).Encode(map[string]string{
		"token":  sessionToken,
		"email":  email,
		"status": "logged_in",
		"role":   user.Role,
	})
}

func main() {
	http.HandleFunc("/register", registerHandler)
	http.HandleFunc("/verify-email", verifyEmailHandler)
	http.HandleFunc("/login", loginHandler)

	fmt.Println("Server running on http://localhost:3001")
	http.ListenAndServe(":3001", nil)
}
