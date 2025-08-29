import z from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.string().min(1, 'Please provide your email'),
  dateOfBirth: z.string().min(1, 'Please provide your Date Of Birth'),
  nationalInsurance: z.string().min(1, 'Please provide your national insurance number'),
  contactNumber: z.string().min(1, 'Please provide your contact number'),
  position: z.string().min(1, 'Please privide your position')
})

export const changeUsersPasswordSchema = z.object({
  oldPassword: z.string().min(1, 'You must provide your old password'),
  newPassword: z.string().min(6, 'Your password must be 6 charactors'),
  confirmNewPassword: z.string().min(6, 'Your password must be 6 charactors')
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords don't match",
  path: ['confirmNewPassword']
})
