"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

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
