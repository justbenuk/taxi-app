import PageContainer from "@/components/shared/page-container";
import { RootLayoutProps } from "@/types";
import Link from "next/link";

export default function ProfileLayout({ children }: RootLayoutProps) {
  return (
    <PageContainer>
      <div className="flex flex-row gap-4">
        <div className="border-r pr-10">
          <div className="flex flex-col space-y-4">
            <Link href={'/profile'}>Personal Information</Link>
            <Link href={'/profile'}>Password</Link>
            <Link href={'/profile'}>Address</Link>
            <Link href={'/profile'}>Emergency Contact</Link>
          </div>
        </div>
        <div className="flex-1 pl-10">
          <div className="pb-4">{children}</div>
        </div>
      </div>
    </PageContainer>
  );
}
