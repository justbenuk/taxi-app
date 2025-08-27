import { getCurrentProfile } from "@/actions/profile-actions";
import ProfileSectionTitle from "@/components/header/profile-section-title";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Your Profile",
};

export default async function ProfilePage() {
  const { success, message, user } = await getCurrentProfile()

  if (!success) {
    return (
      <div className="p-6 border-4 border-red-500 bg-red-300 rounded-xl">
        <p className="text-red-500 font-bold">something went wrong, Please contact the administrator</p>
      </div>
    )
  }
  return (
    <div>
      <ProfileSectionTitle title="Personal Information" description="What we know about you" />
    </div>
  );
}
