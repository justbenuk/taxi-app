import { isAdmin } from "@/actions/auth-actions";
import SiteLogo from "../shared/site-logo";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export default async function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const admin = await isAdmin();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <SiteLogo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="space-y-4">{admin && <p>admin menus</p>}</SidebarContent>
    </Sidebar>
  );
}
