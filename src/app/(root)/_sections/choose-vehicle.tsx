import PageContainer from "@/components/shared/page-container";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ChooseVehicle() {
  return (
    <PageContainer>
      <div className="text-center">
        <h1 className="uppercase font-semibold text-yellow-500 dark:text-yellow-300">Services</h1>
        <p className="text-4xl">Choose a vehicle that suits your needs</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-30 gap-y-10 mt-20">
        <Card>
          <CardContent className="flex flex-col justify-between space-y-4">
            <Image src={"/assets/skoda.png"} alt="skoda" height={400} width={400} className="pb-6" />
            <p className="text-center">
              Arrive in comfort and style in one of our saloon cars, which can accommodate up to four passengers. With a fleet of small to medium-sized vehicles, you&apos;ll have
              plenty of space for everything from luggage to shopping bags.
            </p>
          </CardContent>
          <CardFooter className="flex flex-row justify-end text-yellow-500 dark:text-yellow-300">
            <Link href={"/"}>Read More</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-between">
            <Image src={"/assets/big.png"} alt="skoda" height={400} width={400} className="pb-6" />
            <p className="text-center">
              Travel together in our spacious black cabs. Seating five to eight passengers, these vehicles are ideal for groups and can comfortably accommodate luggage, shopping,
              or even wheelchairs.
            </p>
          </CardContent>
          <CardFooter className="flex flex-row justify-end text-yellow-500 dark:text-yellow-300">
            <Link href={"/"}>Read More</Link>
          </CardFooter>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardContent className="flex flex-col items-center justify-between space-y-6">
            <Image src={"/assets/wheel.png"} alt="skoda" height={400} width={400} />
            <p className="text-center">
              Our disabled access vehicles are equipped with everything you need for a comfortable trip. Featuring ramps, they ready to accommodate wheelchairs and provide easy,
              stress-free transport.
            </p>
          </CardContent>
          <CardFooter className="flex flex-row justify-end text-yellow-500 dark:text-yellow-300">
            <Link href={"/"}>Read More</Link>
          </CardFooter>
        </Card>
      </div>
    </PageContainer>
  );
}
