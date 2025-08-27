import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { IconLogout } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function MobileLogoutForm() {
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/");
  }

  return (
    <form action={handleLogout} id="logout">
      <Button form="logout" variant={"ghost"} className="p-0">
        <DropdownMenuItem>
          <IconLogout />
          Logout
        </DropdownMenuItem>
      </Button>
    </form>
  );
}
