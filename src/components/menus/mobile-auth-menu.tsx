"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { IconCreditCard, IconDotsVertical, IconLogout, IconNotification, IconUserCircle } from "@tabler/icons-react";
import { Button } from "../ui/button";

export default function MobileAuthMenu() {
  const { data: session, status } = useSession();
  if (status !== "authenticated") return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" className="mr-10 bg-transparent">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={session.user?.image as string} alt={session.user?.name as string} />
            <AvatarFallback className="rounded-lg">TA</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium text-yellow-500 dark:text-yellow-300">{session.user?.name}</span>
            <span className="text-muted-foreground truncate text-xs">{session.user?.email}</span>
          </div>
          <IconDotsVertical className="ml-auto size-4 text-yellow-500 dark:text-yellow-300" />
        </Button>
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
          <DropdownMenuItem>
            <IconUserCircle />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconCreditCard />
            Dashboard
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconLogout />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
