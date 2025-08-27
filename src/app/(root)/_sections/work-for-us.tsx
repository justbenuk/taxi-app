import PageContainer from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkForUs() {
  return (
    <div className="lg:py-20">
      <PageContainer>
        <div className="bg-yellow-500 dark:bg-yellow-300 rounded-xl text-black">
          <div className="max-w-5xl mx-auto p-6 lg:p-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="uppercase font-semibold text-center">Become a driver</h3>
              <h1 className="text-3xl text-center">Start your journey with us today</h1>
              <p className="text-center">
                We can provide all the support needed to become a partner with us. From completing the forms to helping you find an appropriate vehicle.
              </p>
              <div className="mt-4">
                <Button asChild variant={"default"} size={"lg"} className="bg-gray-950 text-white">
                  <Link href={"/contact"} className="font-semibold">
                    Let&apos;s Talk
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
