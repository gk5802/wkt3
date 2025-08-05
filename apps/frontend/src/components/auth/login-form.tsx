"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import QuoteRotator from "../quote-rotater";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center">
        <Image
          src="/bowler.jpg"
          alt="Welcome"
          height={100}
                  width={100}
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
      <Button variant="outline" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </Button>
      <Button className="w-full">Login</Button>
    </div>
  );
}
