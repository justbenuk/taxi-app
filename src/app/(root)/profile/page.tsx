import { getCurrentProfile } from "@/actions/profile-actions";
import ProfileSectionTitle from "@/components/header/profile-section-title";
import ProfileUploader from "@/components/images/profile-uploader";
import UpdateProfileForm from "@/forms/profile/update-profile-form";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Your Profile",
};

export default async function ProfilePage() {
  const { success, user } = await getCurrentProfile()

  if (!success || !user) {
    return (
      <div className="p-6 border-4 border-red-500 bg-red-300 rounded-xl">
        <p className="text-red-500 font-bold">something went wrong, Please contact the administrator</p>
      </div>
    )
  }
  return (
    <div>
      <ProfileSectionTitle title="Personal Information" description="What we know about you" />
      <div className="mt-10 grid gap-10 max-w-5xl">
        <div className="flex flex-col items-start lgflex-row gap-4">
          <Image src={user.image} alt="User Image" width={500} height={500} className="h-[100px] w-[100px] rounded-full" />
          <div>
            <h1 className="font-semibold">Change your profile picture</h1>
            <ProfileUploader />
          </div>
        </div>
        <div>
          <UpdateProfileForm user={user} />
        </div>
      </div>
    </div>
  );
}
