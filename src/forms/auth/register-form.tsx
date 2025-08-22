'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RegisterUserSchema } from "@/validators"
import { registerUserAction } from "@/actions/auth-actions"
import { toast } from "react-toastify"

export default function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterUserSchema>>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      name: '',
      email: "",
      password: '',
      confirmPassword: ''
    }
  })

  async function onSubmit(values: z.infer<typeof RegisterUserSchema>) {
    const { success, message } = await registerUserAction(values)
    if (!success) {
      toast.error(message)
    }
    toast.success(message)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <p className="text-muted-foreground text-balance">Register for an account</p>
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            /></div>
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
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                </FormItem>
              )}
            /></div>
          <Button type="submit">Register</Button>
        </div>
        <div className="mt-2">
          <p className="text-center text-xs">Already have an account? <Link href={'/login'} className="font-semibold">Login</Link></p>
        </div>
      </form>
    </Form>
  )
}

