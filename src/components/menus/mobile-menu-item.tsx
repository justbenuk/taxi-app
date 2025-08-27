import Link from "next/link";
import React from "react";

type MobileMenuItem = {
  item: {
    href: string;
    name: string;
  };
};

export default function MobileMenuItem({ item }: MobileMenuItem) {
  return <Link href={item.href}>{item.name}</Link>;
}
