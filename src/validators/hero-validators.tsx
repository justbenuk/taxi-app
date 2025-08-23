import z from "zod";

export const createNewHeroSchema = z.object({
  title: z.string().min(1, 'You must add a title'),
  content: z.string(),
  image: z.string(),
  buttonLink: z.string(),
  buttonText: z.string()
})
