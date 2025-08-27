import MobileMenu from "../menus/mobile-menu";
import SiteMenuList from "../menus/site-menu-list";
import PageContainer from "../shared/page-container";
import SiteLogo from "../shared/site-logo";

export default function Header() {
  return (
    <header className="py-6 border-b dark:border-none mb-8">
      <PageContainer>
        <div className="flex flex-row items-center justify-between">
          <SiteLogo />
          <SiteMenuList />
          <MobileMenu />
        </div>
      </PageContainer>
    </header>
  );
}
