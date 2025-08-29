import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function ProfileTemplate({ children }: { children: ReactNode }) {
  const session = await auth()
  if (!session) redirect('/login')
  return (
    <>{children}</>
  )
}

