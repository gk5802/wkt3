// /apps/frontend/src/components/language-switch.tsx
"use client";

import { useState } from "react";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState("en");

  const languages = [
    "en",
    "es",
    "fr",
    "hi",
    "zh",
    "ar",
    "pt",
    "ru",
    "de",
    "ja",
  ];

  return (
    <select
      className="p-2 border rounded"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
