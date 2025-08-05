// /apps/frontend/src/app/admin/dashboard/page.tsx
import AdminDashboardLayout from "@/components/ui/admin-dashboard-layout";

export default function AdminDashboard() {
  return (
    <AdminDashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Overview</h1>
      <p className="text-muted-foreground">
        Manage users, chats, and game insights.
      </p>
    </AdminDashboardLayout>
  );
}
