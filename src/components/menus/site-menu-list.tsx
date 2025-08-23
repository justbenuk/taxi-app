import { SITEMENULIST } from "@/data/site-menu";
import SiteMenuItem from "./site-menu-item";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SiteMenuList() {
  return (
    <nav className="hidden lg:flex flex-row items-center gap-6 font-semibold">
      {SITEMENULIST.map((item, idx) => (
        <SiteMenuItem key={idx} item={item} />
      ))}
      <Button asChild variant={'default'} size={'sm'} className="bg-yellow-500 dark:bg-yellow-300">
        <Link href={'/book-now'} className="font-semibold">Book Now</Link>
      </Button>
    </nav>
  )
}

