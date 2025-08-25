import PageContainer from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkForUs() {
  return (
    <div className="py-20">
      <PageContainer>
        <div className="grid god-cols-1 lg:grid-cols-4 my-2">
          <div>
            <div className="absolute hidden lg:flex flex-col items-center justify-center">
              <Image src={"/assets/wheel.png"} alt="taxi" height={1000} width={1000} className="top-10 xl:top-0 lg:w-[600px] xl:w-[900px] relative" />
            </div>
          </div>
          <div></div>
          <div className=" flex flex-col items-center justify-center bg-muted rounded-xl lg:col-span-2">
            <div className="flex flex-row justify-end p-12">
              <div className="lg:w-2/3 space-y-4">
                <h3 className="text-yellow-500 dark:text-yellow-300 uppercase font-semibold">Become a driver</h3>
                <h1 className="text-3xl">Start your journey with us today</h1>
                <p>We can provide all the support needed to become a partner with us. From completing the forms to helping you find an appropriate vehicle.</p>
                <div className="mt-4">
                  <Button asChild variant={"default"} size={"lg"} className="bg-yellow-500 dark:bg-yellow-300">
                    <Link href={"/contact"} className="font-semibold">
                      Let&apos;s Talk
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
