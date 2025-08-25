import PageContainer from "@/components/shared/page-container";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function CommunitySection() {
  return (
    <PageContainer>
      <div className="lg:w-2/3 pb-10">
        <h3 className="uppercase text-yellow-500 dark:text-yellow-300 font-semibold">Community</h3>
        <h1 className="text-3xl font-semibold">Working with our community to be the best</h1>
        <p>
          Here at Taxi App, We are always giving back to our community, with money of codes and chances to win prizes through our social media. With news about our great services,
          you can find everything you need below
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mb-20">
        <Card>
          <CardHeader>
            <CardTitle>Blog Title</CardTitle>
          </CardHeader>
          <CardContent>
            <div>image</div>
            <div>post content</div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="text-muted-foreground">Date</h3>
              <Link href={"/"} className="text-yellow-500 dark:text-yellow-300">
                Read More
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blog Title</CardTitle>
          </CardHeader>
          <CardContent>
            <div>image</div>
            <div>post content</div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="text-muted-foreground">Date</h3>
              <Link href={"/"} className="text-yellow-500 dark:text-yellow-300">
                Read More
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blog Title</CardTitle>
          </CardHeader>
          <CardContent>
            <div>image</div>
            <div>post content</div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="text-muted-foreground">Date</h3>
              <Link href={"/"} className="text-yellow-500 dark:text-yellow-300">
                Read More
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageContainer>
  );
}
