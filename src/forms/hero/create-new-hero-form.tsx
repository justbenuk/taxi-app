'use client'

import { CreateNewHeroAction } from "@/actions/hero-actions"
import ImageUploader from "@/components/images/image-uploader"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createNewHeroSchema } from "@/validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import z from "zod"

export default function CreateNewHeroForm() {
  const [imageUrl, setImageUrl] = useState('')
  const form = useForm<z.infer<typeof createNewHeroSchema>>({
    resolver: zodResolver(createNewHeroSchema),
    defaultValues: {
      title: '',
      image: '',
      content: '',
      buttonLink: '',
      buttonText: ''
    }
  })

  function handleImageUrl(url: string) {
    setImageUrl(url)
  }


  async function onSubmit(values: z.infer<typeof createNewHeroSchema>) {
    //add the upoload image url to the values array
    values.image = imageUrl
    const { success, message } = await CreateNewHeroAction(values)
    if (!success) toast.error(message)
    toast.success(message)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <ImageUploader onImageUploadAction={handleImageUrl} />
                <FormControl>
                  <Input {...field} value={imageUrl} onChange={(e) => e.target.value} hidden />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name='buttonLink'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Button Link</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name='buttonText'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Button Text</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form></Form>
  )
}

