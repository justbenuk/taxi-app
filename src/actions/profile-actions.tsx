"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { changeUsersPasswordSchema, updateProfileSchema } from "@/validators";
import { compareSync, hashSync } from "bcrypt-ts-edge";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";
import { UploadedFileData } from "uploadthing/types";
import z from "zod";

export async function updateUsersPassword(data: z.infer<typeof changeUsersPasswordSchema>) {
  const session = await auth()
  if (!session) redirect('/')

  try {
    const validated = changeUsersPasswordSchema.parse(data)
    const user = await db.user.findUnique({
      where: {
        id: session.user.id
      }
    })
    if (!user) {
      return { success: false, message: 'User not found' }
    }
    const checkPassword = compareSync(validated.oldPassword, user.password)
    const hashPasword = hashSync(validated.newPassword, 10)
    if (checkPassword) {
      await db.user.update({
        where: {
          id: user.id
        },
        data: {
          password: hashPasword
        }
      })
      return { success: true, message: 'Password changed' }
    }
    return { success: false, message: 'Something went wrong' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to change password' }
  }
}

export async function getCurrentProfile() {
  const session = await auth();
  if (!session) redirect("/login");

  try {
    const user = await db.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        name: true,
        email: true,
        image: true,
        dateOfBirth: true,
        contactNumber: true,
        nationalInsurance: true,
        position: true
      },
    });

    if (!user) {
      return { success: false, message: "User not found" };
    }
    return { success: true, user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}

export async function updateUserProfileAction(data: z.infer<typeof updateProfileSchema>) {
  const session = await auth()
  if (!session) redirect('/')

  try {
    const validated = updateProfileSchema.parse(data)

    await db.user.update({
      where: {
        id: session.user.id
      },
      data: {
        name: validated.name,
        email: validated.email,
        dateOfBirth: validated.dateOfBirth,
        contactNumber: validated.contactNumber,
        nationalInsurance: validated.nationalInsurance,
        position: validated.position,
      }
    })

    revalidatePath('/profile')
    return { success: true, message: 'Profile Updated' }

  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to update profile' }
  }
}

export async function updateProfilePictureAction(data: UploadedFileData) {
  const session = await auth()
  if (!session) redirect('/login')

  const utapi = new UTApi()

  try {
    const existingImage = await db.user.findFirst({
      where: {
        id: session.user.id
      },
      select: {
        image: true
      }
    })

    const imageKey = await db.image.findFirst({
      where: {
        url: existingImage?.image
      }
    })


    await db.$transaction(async (tx) => {
      // first call - update users profile picture
      await tx.user.update({
        where: {
          id: session.user.id
        },
        data: {
          image: data.ufsUrl
        }
      })

      //secant call - add image to db
      await tx.image.create({
        data: {
          url: data.ufsUrl,
          key: data.key,
          customId: data.customId,
          name: data.name
        }
      })

      //last call - delete old image from uploadthing and db
      if (imageKey?.key) {
        await tx.image.delete({
          where: {
            id: imageKey.id
          }
        })

        await utapi.deleteFiles(imageKey.key)
      }
    })
    revalidatePath('/profile')
    return { success: true, message: 'Updated Profile Picture' }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'Something went wrong' }
  }
}
