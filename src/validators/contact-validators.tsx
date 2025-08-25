import z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  phone: z.string(),
  message: z.string().min(1, "Message is required"),
});
