'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { LoginUserSchema } from "@/validators"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { loginUserAction } from "@/actions/auth-actions"
import { toast } from "react-toastify"

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginUserSchema>>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: "",
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof LoginUserSchema>) {
    const response = await loginUserAction(values)
    if (!response.success) return toast.error(response.message)

    return toast.success(response.message)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground text-balance">Login in to your account</p>
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            /></div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                </FormItem>
              )}
            /></div>
          <Button type="submit">Login</Button>
        </div>
        <div className="mt-2">
          <p className="text-center text-xs">Don&apos;t have an account? <Link href={'/register'} className="font-semibold">Register</Link></p>
        </div>
      </form>
    </Form>
  )
}

