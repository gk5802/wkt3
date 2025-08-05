// /apps/frontend/src/app/dashboard/page.tsx
import DashboardLayout from "@/components/ui/dashboard-layout";

export default function UserDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-muted-foreground">
        Here you can access your trading history, games, and more.
      </p>
    </DashboardLayout>
  );
}
