import { SITEMENULIST } from "@/data/site-menu";
import React from "react";
import MobileMenuItem from "./mobile-menu-item";
import Link from "next/link";

export default function MobileMenuList() {
  return (
    <nav className="flex flex-col gap-6">
      {SITEMENULIST.map((item, idx) => (
        <MobileMenuItem key={idx} item={item} />
      ))}
      <Link href={"/book-now"}>Book Now</Link>
    </nav>
  );
}
