'use client'
import Header from "@/components/header/header";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import Pagecontainer from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";


export default function NotFound() {
  const theme = useTheme()

  const shadowColor = theme.resolvedTheme === "light" ? "black" : "white"
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Pagecontainer>
        <div className="text-center">
          <LineShadowText className="text-[12rem] font-bold" shadowColor={shadowColor}>
            404
          </LineShadowText>
          <h1 className="font-bold text-4xl -mt-10 text-yellow-500 dark:text-yellow-300">Page Not Found</h1>
          <p className="w-4/5 mx-auto my-4">It seems the page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track</p>
          <Button variant={'default'} size={'sm'} asChild>
            <Link href={'/'}>Go Home</Link>
          </Button>
        </div>
      </Pagecontainer>
      <footer></footer>
    </div>
  )
}

