'use server'

import { db } from "@/lib/db"
import { createNewHeroSchema } from "@/validators"
import { revalidatePath } from "next/cache"
import z from "zod"

export async function CreateNewHeroAction(data: z.infer<typeof createNewHeroSchema>) {
  try {
    //validate the data 
    const validated = createNewHeroSchema.parse(data)

    await db.hero.create({
      data: validated
    })
    revalidatePath('/')
    return { success: true, message: 'Hero Added' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to upload here' }

  }
}

export async function getAllHeros() {
  const response = await db.hero.findMany()
  return response
}
