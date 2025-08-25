import PageContainer from "@/components/shared/page-container";
import { Card, CardContent } from "@/components/ui/card";
import { IconDeviceIpadPin, IconDeviceDesktopCode, IconMessages } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export default function MakesDifference() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
        <div className="flex flex-col justify-center">
          <h1 className="text-yellow-500 dark:text-yellow-300 uppercase font-semibold">Why Choose Us</h1>
          <h3 className="text-4xl">What makes us different to other transport providers</h3>
          <div className="flex flex-col space-y-6 mt-10">
            <Card className="bg-muted">
              <CardContent>
                <div className="flex flex-col lg:flex-row text-center lg:text-start gap-8">
                  <div className="flex flex-col items-center justify-center">
                    <IconDeviceIpadPin className="size-12 text-yellow-500 dark:text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="text-yellow-500 dark:text-yellow-300 font-semibold">Track Your Vehicle</h3>
                    <p className="w-3/4 mx-auto lg:m-0">Book your journey with us, and track your vehicle as it makes uts way to you</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-muted">
              <CardContent>
                <div className="flex flex-col lg:flex-row text-center lg:text-start gap-8">
                  <div className="flex flex-col items-center justify-center">
                    <IconDeviceDesktopCode className="size-12 text-yellow-500 dark:text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="text-yellow-500 dark:text-yellow-300 font-semibold">Cutting Edge Technology</h3>
                    <p className="w-3/4 mx-auto lg:m-0">Book on out start of the art app and pay by Card or Cash</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-muted">
              <CardContent>
                <div className="flex flex-col lg:flex-row text-center lg:text-start gap-8">
                  <div className="flex flex-col items-center justify-center">
                    <IconMessages className="size-12 text-yellow-500 dark:text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="text-yellow-500 dark:text-yellow-300 font-semibold">Customer Support</h3>
                    <p className="w-3/4 mx-auto lg:m-0">We have trained staff available 24 hours a day to handle any queries you may have</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-full">
            <div>
              <div className="hidden lg:block h-8"></div>
              <div>
                <Image src={"/assets/image1.jpg"} alt="image1" height={700} width={700} className="w-full h-full rounded-2xl" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-72">
                <Image src={"/assets/image2.jpg"} alt="image2" height={700} width={700} className="w-full h-full rounded-2xl" />
              </div>
              <div>
                <Image src={"/assets/image3.jpg"} alt="image3" height={700} width={700} className="w-full h-full rounded-2xl" />
              </div>
              <div className="hidden lg:block h-8"></div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
