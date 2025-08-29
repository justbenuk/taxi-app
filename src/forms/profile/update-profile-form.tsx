'use client'
import { updateUserProfileAction } from "@/actions/profile-actions"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { updateProfileSchema } from "@/validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import z from "zod"

type UserProfileProps = {
  user: {
    name: string | null
    email: string
    position: string
    contactNumber: string
    nationalInsurance: string
    dateOfBirth: string
  }
}

export default function UpdateProfileForm({ user }: UserProfileProps) {
  const [edit, openEdit] = useState(false)
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user.name as string,
      email: user.email,
      position: user.position,
      contactNumber: user.contactNumber,
      nationalInsurance: user.nationalInsurance,
      dateOfBirth: user.dateOfBirth
    }
  })

  async function onSubmit(values: z.infer<typeof updateProfileSchema>) {

    const { success, message } = await updateUserProfileAction(values)
    if (!success) toast.error(message)
    openEdit(false)
    toast.success(message)

  }
  return (
    <Form {...form}>
      <div className="flex justify-end">
        {edit === false ? (
          <Button onClick={() => openEdit(!edit)} className="bg-yellow-500 dark:bg-yellow-300">Edit</Button>
        ) : (
          <Button onClick={() => openEdit(!edit)} className="bg-red-500 text-white">Cancel</Button>
        )}

      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-5xl" id="updateprofile">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Of Birth</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="nationalInsurance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National Insurance Number</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!edit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          {edit && (<Button type="submit" form="updateprofile" disabled={!edit}>Update Profile</Button>)}
        </div>
      </form>
    </Form>
  )
}

