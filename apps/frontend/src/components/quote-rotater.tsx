"use client";

import { useEffect, useState } from "react";

const quotes = [
  "Trade with AI",
  "Bet and Win",
  "Predict the Score",
  "Win Big Today",
  "Invest Smartly",
  "Join Game Now",
  "Kabaddi Time Now",
  "Earn with Skill",
  "Fast Secure Fun",
  "Gaming Gets Real",
];

export default function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-sm text-muted-foreground italic">{quotes[index]}</p>
  );
}
