
"use client";
import { ImageUploadAction } from "@/actions/image-actions";
import { UploadButton } from "@/lib/uploadthing";
import { toast } from "react-toastify";

type UploadImageProps = {
  onImageUploadAction: (url: string) => void
}

export default function ImageUploader({ onImageUploadAction }: UploadImageProps) {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={async (res) => {
        // Do something with the response
        await ImageUploadAction(res[0])
        onImageUploadAction(res[0].ufsUrl)

      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        console.error(error)
        toast.error('Failed to upload image')
      }}
    />
  );
}
