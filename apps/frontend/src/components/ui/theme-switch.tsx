// /apps/frontend/src/components/ui/theme-switch.tsx
"use client";

import { useState, useEffect } from "react";

const themes = ["theme1", "theme2", "theme3", "theme4", "theme5"];

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("theme1");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <select
      className="p-2 border rounded"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
