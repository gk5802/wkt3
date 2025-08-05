// /apps/frontend/src/components/currency-switch.tsx
"use client";

import { useState } from "react";

export default function CurrencySwitch() {
  const [currency, setCurrency] = useState("USD");

  const currencies = [
    "USD",
    "EUR",
    "INR",
    "JPY",
    "CNY",
    "GBP",
    "AUD",
    "CAD",
    "SGD",
    "ZAR",
  ];

  return (
    <select
      className="p-2 border rounded"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
    >
      {currencies.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
}
