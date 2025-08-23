'use server'

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { UploadedFileData } from "uploadthing/types";

export async function ImageUploadAction(data: UploadedFileData) {
  //check there is a logged in user
  try {
    const session = await auth()
    if (!session) return redirect('unauthorised')

    //save the image details to db
    await db.image.create({
      data: {
        url: data.ufsUrl,
        name: data.name,
        key: data.key,
        customId: data.customId as string
      }
    })

    // we send the url back to add to the database of the model we have uploaded the image for
    return { success: true, message: 'Image uploaded', url: data.ufsUrl }
  } catch (error) {
    return { success: false, message: error }
  }

}
