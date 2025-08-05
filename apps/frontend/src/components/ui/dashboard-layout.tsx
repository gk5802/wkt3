// /apps/frontend/src/components/ui/dashboard-layout.tsx
"use client";

// import { useState } from "react";
import ThemeSwitch from "@/components/ui/theme-switch";
import LanguageSwitch from "@/components/language-switch";
import CurrencySwitch from "@/components/currency-switch";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-theme1 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">WKT3 Dashboard</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block hover:underline">
            Home
          </a>
          <a href="/dashboard/profile" className="block hover:underline">
            Profile
          </a>
          <a href="/dashboard/games" className="block hover:underline">
            Games
          </a>
          <a href="/dashboard/trading" className="block hover:underline">
            Trading
          </a>
        </nav>
        <div className="space-y-2">
          <ThemeSwitch />
          <LanguageSwitch />
          <CurrencySwitch />
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-background">{children}</main>
    </div>
  );
}
