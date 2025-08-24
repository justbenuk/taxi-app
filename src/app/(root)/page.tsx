import { getAllHeros } from "@/actions/hero-actions";
import HeroSection from "@/components/hero/hero-section";
import PageContainer from "@/components/shared/page-container";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IconDeviceIpadPin, IconDeviceDesktopCode, IconMessages } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const allHeros = await getAllHeros();

  return (
    <>
      <HeroSection heroItems={allHeros} />
      <div className="py-20">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
            <div className="flex flex-col justify-center items-center"></div>
          </div>
        </PageContainer>
      </div>
      <div className="bg-muted dark:bg-neutral-900/20 py-20">
        <PageContainer>
          <div className="text-center">
            <h1 className="0uppercase font-semibold text-yellow-500 dark:text-yellow-300">Services</h1>
            <p className="text-4xl">Choose a vehicle that suits your needs</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-30 gap-y-10 mt-20">
            <Card>
              <CardContent className="flex flex-col justify-between">
                <div className="flex flex-col items-center justify-center">
                  <Image src={"/assets/skoda.png"} alt="skoda" height={400} width={400} className="pb-6" />
                  <p className="text-center">
                    Arrive in comfort and style in one of our saloon cars, which can accommodate up to four passengers. With a fleet of small to medium-sized vehicles, you&apos;ll
                    have plenty of space for everything from luggage to shopping bags.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row justify-end text-yellow-500 dark:text-yellow-300">
                <Link href={"/"}>Read More</Link>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="flex flex-col justify-between">
                <Image src={"/assets/big.png"} alt="skoda" height={400} width={400} className="pb-6" />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center">
                    Travel together in our spacious black cabs. Seating five to eight passengers, these vehicles are ideal for groups and can comfortably accommodate luggage,
                    shopping, or even wheelchairs.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row justify-end text-yellow-500 dark:text-yellow-300">
                <Link href={"/"}>Read More</Link>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="flex flex-col justify-between">
                <Image src={"/assets/wheel.png"} alt="skoda" height={400} width={400} />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center">
                    Our disabled access vehicles are equipped with everything you need for a comfortable trip. Featuring ramps, they ready to accommodate wheelchairs and provide
                    easy, stress-free transport.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row justify-end text-yellow-500 dark:text-yellow-300">
                <Link href={"/"}>Read More</Link>
              </CardFooter>
            </Card>
          </div>
        </PageContainer>
      </div>
      <div className="py-20"></div>
    </>
  );
}
