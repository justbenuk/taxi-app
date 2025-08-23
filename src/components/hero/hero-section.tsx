'use client'
import Pagecontainer from "../shared/page-container"
import { Button } from "../ui/button"
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HeroItemProps } from "@/types";
import { ReactNode } from "react";


export default function HeroSection({ heroItems }: { heroItems: HeroItemProps[] }) {

  const customRenderThumb = (children: ReactNode[]) =>
    children.map((_, idx) => {
      return <div key={idx} className="border-none bg-yellow-500 dark:bg-yellow-300 h-0.5"></div>;
    });



  return (
    <Carousel className="container mx-auto mt-4 rounded-2xl overflow-hidden" showArrows={false} renderThumbs={customRenderThumb} autoPlay infiniteLoop showIndicators={false} interval={8000} showStatus={false}>
      {heroItems.map((hero: HeroItemProps) => (
        <div key={hero.id} className="rounded-2xl text-xl h-[50dvh]" style={{ backgroundImage: `url('${hero.image}')`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%' }}>
          <div className="bg-black/90 h-full rounded-2xl overflow-hidden">
            <Pagecontainer className="h-full overflow-hidden">
              <div className="flex flex-col items-start justify-center h-full space-y-4 lg:space-y-8">
                <h3 className="font-semibold text-md text-yellow-500 dark:text-yellow-300">{hero.title}</h3>
                <h1 className="text-3xl lg:text-5xl lg:w-2/4 text-white text-start">{hero.content}</h1>
                {hero.buttonLink && (
                  <Button asChild variant={'default'} size={'lg'} className="bg-yellow-500 dark:bg-yellow-300">
                    <Link href={hero.buttonLink} className="text-muted-foreground font-semibold">{hero.buttonText}</Link>
                  </Button>
                )}
              </div>
            </Pagecontainer>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

