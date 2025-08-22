import { z } from 'zod'

export const LoginUserSchema = z.object({
  email: z.string().min(1, 'You must provide an email'),
  password: z.string().min(1, 'You must provide your password')
})

export const RegisterUserSchema = z.object({
  name: z.string().min(3, 'Name must be 3 characters or more'),
  email: z.string().email('Please provide a valid email address'),
  password: z.string().min(6, 'Password must be 6 characters or more'),
  confirmPassword: z.string().min(6, 'Password must be 6 characters or more')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
})
