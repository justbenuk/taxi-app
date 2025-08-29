"use client";
import React from "react";
import { UploadButton } from "@/lib/uploadthing";
import { toast } from "react-toastify";
import { updateProfilePictureAction } from "@/actions/profile-actions";

export default function ProfileUploader() {
  return (
    <UploadButton
      endpoint={"profileUploader"}
      appearance={{
        button: "bg-muted px-6 mt-4 text-black",
        container: "flex flex-row items-center"
      }}

      onClientUploadComplete={async (res) => {
        const { success, message } = await updateProfilePictureAction(res[0]);
        if (!success) toast.error(message);
        toast.success(message);
      }}
      onUploadError={(error) => {
        toast.error("Image upload failed" + error);
      }}
      className="flex flex-row gap-4"
    />
  );
}
