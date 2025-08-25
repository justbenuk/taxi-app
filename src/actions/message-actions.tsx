"use server";

import { db } from "@/lib/db";
import { ContactFormSchema } from "@/validators";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function CreateContactMessageAction(data: z.infer<typeof ContactFormSchema>) {
  try {
    const validated = ContactFormSchema.parse(data);
    await db.message.create({
      data: validated,
    });
    revalidatePath("/");
    return { success: true, message: "Message Sent" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Sending Failed" };
  }
}
