// /apps/frontend/src/components/ui/admin-dashboard-layout.tsx
"use client";

import ThemeSwitch from "@/components/ui/theme-switch";
import LanguageSwitch from "@/components/language-switch";
import CurrencySwitch from "@/components/currency-switch";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-theme2 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin/dashboard" className="block hover:underline">
            Overview
          </a>
          <a href="/admin/users" className="block hover:underline">
            Manage Users
          </a>
          <a href="/admin/chats" className="block hover:underline">
            Chat Groups
          </a>
          <a href="/admin/games" className="block hover:underline">
            Game Analytics
          </a>
        </nav>
        <div className="mt-4 space-y-2">
          <ThemeSwitch />
          <LanguageSwitch />
          <CurrencySwitch />
        </div>
      </aside>
      <main className="flex-1 p-6 bg-background">{children}</main>
    </div>
  );
}
