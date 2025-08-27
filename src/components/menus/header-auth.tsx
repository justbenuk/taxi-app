"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { IconCreditCard, IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";
import MobileLogoutForm from "@/forms/auth/mobile-logout-form";

export default function HeaderAuth() {
  const { data: session, status } = useSession();
  if (status !== "authenticated") return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 rounded-full grayscale">
          <AvatarImage src={session.user.image as string} alt={session.user?.name as string} />
          <AvatarFallback className="rounded-lg">TA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg" align="end" sideOffset={4}>
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={session.user?.image as string} alt={session.user?.name as string} />
              <AvatarFallback className="rounded-lg">TA</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{session.user?.name}</span>
              <span className="text-muted-foreground truncate text-xs">{session.user?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/profile"}>
            <DropdownMenuItem>
              <IconUserCircle />
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href={"/dashboard"}>
            <DropdownMenuItem>
              <IconCreditCard />
              Dashboard
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <MobileLogoutForm />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
