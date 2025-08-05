// /apps/frontend/src/components/auth/register-form.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import QuoteRotator from "../quote-rotater";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center">
        <Image
          src="/bowler.jpg"
          width={100}
          height={100}
          alt="Welcome"
          priority
          className="w-24 h-24 mx-auto mb-4"
        />
        <QuoteRotator />
      </div>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Button variant="outline" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Passwords" : "Show Passwords"}
      </Button>
      <Button className="w-full">Register</Button>
    </div>
  );
}
