"use server";

import { auth, signIn } from "@/auth";
import { db } from "@/lib/db";
import { LoginUserSchema, RegisterUserSchema } from "@/validators";
import { hashSync } from "bcrypt-ts-edge";
import { signOut } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import z from "zod";

export async function registerUserAction(data: z.infer<typeof RegisterUserSchema>) {
  try {
    //validate the form with zod
    const validated = RegisterUserSchema.parse(data);

    //hash the password with bcrypt
    //the conform password is checked in the schema so we dont need to do it here
    const hashedPassword = hashSync(validated.password, 10);

    //add the user to the db
    await db.user.create({
      data: {
        name: validated.name,
        email: validated.email,
        password: hashedPassword,
      },
    });

    //we can try and sign the user in after registration
    await signIn("credentials", {
      email: validated.email,
      password: validated.password,
    });

    //if all goes well return success
    return { success: true, message: "User Registered" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return { success: false, message: "Sorry! Something went wrong" };
  }
}

export async function loginUserAction(data: z.infer<typeof LoginUserSchema>) {
  try {
    //validate the form with zod
    const validated = LoginUserSchema.parse(data);

    //send the credentials to authjs
    await signIn("credentials", validated);

    //return a success if logged in
    return { success: true, message: "User Logged In" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return { success: false, message: "Sorry! Something went wrong" };
  }
}

export async function logoutUserAction() {
  revalidatePath("/");
  await signOut();
}

export async function isAdmin() {
  const session = await auth();
  if (session?.user.role === "admin") return true;
  return null;
}
