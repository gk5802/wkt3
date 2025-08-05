// /apps/frontend/src/app/superadmin/dashboard/page.tsx

import SuperadminDashboardLayout from "@/components/ui/superadmin-dashboard-layout";

export default function SuperadminDashboard() {
  return (
    <SuperadminDashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Superadmin Overview</h1>
      <p className="text-muted-foreground">
        Monitor platform usage and assign employee roles.
      </p>
    </SuperadminDashboardLayout>
  );
}
