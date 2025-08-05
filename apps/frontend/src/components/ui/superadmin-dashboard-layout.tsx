// /apps/frontend/src/components/ui/superadmin-dashboard-layout.tsx
"use client";

import ThemeSwitch from "@/components/ui/theme-switch";
import LanguageSwitch from "@/components/language-switch";
import CurrencySwitch from "@/components/currency-switch";
import Link from "next/link";

export default function SuperadminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-theme3 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Superadmin Panel</h2>
        <nav className="space-y-2">
          <Link href="/superadmin/dashboard" className="block hover:underline">
            Overview
          </Link>
          <Link href="/superadmin/logs" className="block hover:underline">
            User Logs
          </Link>
          <Link href="/superadmin/analytics" className="block hover:underline">
            Platform Analytics
          </Link>
          <Link href="/superadmin/roles" className="block hover:underline">
            Assign Roles
          </Link>
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
