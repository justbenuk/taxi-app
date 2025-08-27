import { auth } from "@/auth";
import { TemplateLayoutProps } from "@/types";
import { redirect } from "next/navigation";

export default async function AuthTemplate({ children }: TemplateLayoutProps) {
  const session = await auth();
  if (session) redirect("/dashboard");
  return <>{children}</>;
}
