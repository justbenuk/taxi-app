import { MenuItemProps } from "@/types";
import Link from "next/link";

export default function SiteMenuItem({ item }: MenuItemProps) {
  return (
    <Link href={item.href}>{item.name}</Link>
  )
}

