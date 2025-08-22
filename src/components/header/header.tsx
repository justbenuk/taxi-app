import Pagecontainer from "../shared/page-container";
import SiteLogo from "../shared/site-logo";

export default function Header() {
  return (
    <header className="border-b py-4">
      <Pagecontainer>
        <div className="flex flex-row items-center justify-between">
          <SiteLogo />
          <nav>nav</nav>
        </div>
      </Pagecontainer>
    </header>
  )
}

