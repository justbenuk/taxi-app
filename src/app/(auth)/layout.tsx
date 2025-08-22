import { RootLayoutProps } from "@/types";
import Link from "next/link";

export default function AuthLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="absolute top-10 left-10">
        <Link href={'/'}>Back Home</Link>
      </div>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          {children}
        </div>
      </div>
    </>
  )
}

