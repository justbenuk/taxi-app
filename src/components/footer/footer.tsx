import React from "react";
import PageContainer from "../shared/page-container";
import Link from "next/link";
import SiteLogo from "../shared/site-logo";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandTiktok, IconBrandX } from "@tabler/icons-react";

export default function Footer() {
  const copyDate = new Date().getFullYear();
  return (
    <div className="bg-muted dark:bg-neutral-900/20">
      <PageContainer className="pt-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-20">
          <div className="flex-1">
            <SiteLogo />
            <div className="mt-4 text-yellow-500 dark:text-yellow-300 flex flex-row gap-4">
              <IconBrandFacebook />
              <IconBrandLinkedin />
              <IconBrandTiktok />
              <IconBrandX />
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <nav className="flex flex-col gap-2">
              <Link href={"/"}>Passengers</Link>
              <Link href={"/"}>Services</Link>
              <Link href={"/"}>Business</Link>
            </nav>
            <nav className="flex flex-col gap-2">
              <Link href={"/"}>Drivers</Link>
              <Link href={"/"}>Download Our App</Link>
              <Link href={"/"}>Community</Link>
            </nav>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row justify-between items-center py-4 border-t text-xs">
          <span>&copy;{copyDate} Ben Andrews | All Rights Reserved</span>
          <nav className="flex flex-row items-center space-x-4">
            <Link href={"/"}>Terms & Conditions</Link>
            <Link href={"/"}>Privacy</Link>
            <Link href={"/"}>Login</Link>
          </nav>
        </div>
      </PageContainer>
    </div>
  );
}
