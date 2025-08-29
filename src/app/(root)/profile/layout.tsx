import PageContainer from "@/components/shared/page-container";
import { RootLayoutProps } from "@/types";
import { IconEye, IconHome, IconUser, IconUsers } from "@tabler/icons-react";
import Link from "next/link";

export default function ProfileLayout({ children }: RootLayoutProps) {
  return (
    <PageContainer>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:border-r lg:pr-10">
          <div className="flex flex-col space-y-10">
            <Link href={'/profile'}>
              <div className="flex flex-row items-center gap-3">
                <IconUser className="dark:text-yellow-300" />
                <div>
                  <h1 className="font-semibold">Personal Information</h1>
                  <p className="text-xs text-muted-foreground">Change your details</p>
                </div>
              </div>
            </Link>
            <Link href={'/profile/change-password'}>
              <div className="flex flex-row items-center gap-3">
                <IconEye className="dark:text-yellow-300" />
                <div>
                  <h1 className="font-semibold">Password</h1>
                  <p className="text-xs text-muted-foreground">Change your password</p>
                </div>
              </div>
            </Link>
            <Link href={'/profile/change-password'}>
              <div className="flex flex-row items-center gap-3">
                <IconHome className="dark:text-yellow-300" />
                <div>
                  <h1 className="font-semibold">Address</h1>
                  <p className="text-xs text-muted-foreground">Change your Address</p>
                </div>
              </div>
            </Link>
            <Link href={'/profile/change-password'}>
              <div className="flex flex-row items-center gap-3">
                <IconUsers className="dark:text-yellow-300" />
                <div>
                  <h1 className="font-semibold">Emergency Contacts</h1>
                  <p className="text-xs text-muted-foreground">Add or cgange your emergency contacts</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 lg:pl-10 mt-10 lg:mt-0">
          <div className="pb-4">{children}</div>
        </div>
      </div>
    </PageContainer>
  );
}
