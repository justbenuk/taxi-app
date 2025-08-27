import { isLoggedIn } from "@/actions/auth-actions";
import SiteSidebarHeader from "@/components/header/admin-sidebar-header";
import AdminSidebar from "@/components/sidebars/admin_sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PageLayoutProps } from "@/types";

export default async function AdminTemplate({ children }: PageLayoutProps) {
  await isLoggedIn();
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AdminSidebar variant="inset" />
      <SidebarInset>
        <SiteSidebarHeader title="Dashboard" />
        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
