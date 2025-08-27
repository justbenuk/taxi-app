import { IconMenu } from "@tabler/icons-react";
import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import SiteLogo from "../shared/site-logo";
import MobileMenuList from "./mobile-menu-list";
import MobileAuthMenu from "./mobile-auth-menu";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <IconMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <SiteLogo />
          </SheetTitle>
          <SheetDescription>Your NO.1 Transport Provider</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full pl-6 py-6">
          <MobileMenuList />
          <MobileAuthMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
}
