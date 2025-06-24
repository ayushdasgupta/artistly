"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useState } from "react"
import { toast } from "sonner"
import { locations } from "@/lib/dummyData"

const categories = ["Singers", "Dancers", "DJs", "Speakers"]
const languages = ["English", "Hindi", "Bengali", "Tamil"]
const feeRanges = ["₹5k-10k", "₹10k-20k", "₹20k-50k", "₹50k+"]

const formSchema = z.object({
  name: z.string().min(2),
  bio: z.string().min(10),
  category: z.string(),
  languages: z.string(),
  feeRange: z.string(),
  location: z.string().min(2),
  profileImage: z.any().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function OnboardingPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      category: "",
      languages: "",
      feeRange: "",
      location: "",
    },
  })

  const [file, setFile] = useState<File | null>(null)

  const onSubmit = (values: FormValues) => {
    const existing = JSON.parse(localStorage.getItem("artistly-onboarded") || "[]")
    const id = `${values.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`
    const newArtist = {
      id,
      ...values,
      profileImage: file ? URL.createObjectURL(file) : undefined,
    }

    const updated = [...existing, newArtist]
    localStorage.setItem("artistly-onboarded", JSON.stringify(updated))
    toast.success("Artist Registered successfully!")
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Artist Onboarding</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white dark:bg-slate-800" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={4} className="bg-white dark:bg-slate-800" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={() => (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <FormField
                      key={cat}
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem key={cat} className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value === cat}
                              onCheckedChange={(checked) => {
                                field.onChange(checked ? cat : "")
                              }}
                            />
                          </FormControl>
                          <Label>{cat}</Label>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="languages"
            render={() => (
              <FormItem>
                <FormLabel>Languages Spoken</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <FormField
                      key={lang}
                      control={form.control}
                      name="languages"
                      render={({ field }) => (
                        <FormItem key={lang} className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value === lang}
                              onCheckedChange={(checked) => {
                                field.onChange(checked ? lang : "")
                              }}
                            />
                          </FormControl>
                          <Label>{lang}</Label>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="feeRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fee Range</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="bg-white dark:bg-slate-800">
                      <SelectValue placeholder="Select Fee Range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-800">
                      {feeRanges.map((fee) => (
                        <SelectItem key={fee} value={fee}>
                          {fee}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="bg-white dark:bg-slate-800">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-800">
                      {locations.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Label className="pb-3">Profile Image (Optional)</Label>
            <Input
              type="file"
              className="bg-white dark:bg-slate-800"
              onChange={(e) => {
                if (e.target.files?.[0]) setFile(e.target.files[0])
              }}
            />
            {file && (
              <p className="text-sm text-muted-foreground mt-1">
                Selected: {file.name}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
