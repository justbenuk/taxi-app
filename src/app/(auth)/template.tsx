import { isLoggedIn } from "@/actions/auth-actions";
import { TemplateLayoutProps } from "@/types";

export default async function AuthTemplate({ children }: TemplateLayoutProps) {
  await isLoggedIn()
  return (
    <>{children}</>
  )
}

