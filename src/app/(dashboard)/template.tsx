import { auth } from "@/auth";
import SiteSidebarHeader from "@/components/header/admin-sidebar-header";
import DashboardSidebar from "@/components/sidebars/dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PageLayoutProps } from "@/types";
import { redirect } from "next/navigation";

export default async function AdminTemplate({ children }: PageLayoutProps) {
  const session = await auth()
  if (!session) redirect('/login')

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <DashboardSidebar variant="inset" />
      <SidebarInset>
        <SiteSidebarHeader title="Dashboard" />
        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
