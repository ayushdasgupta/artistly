"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
})

type FormValues = z.infer<typeof formSchema>
type Props = {
  artistId: string
  open: boolean
  onClose: () => void
  onBook: (id: string) => void
}

export function BookModal({ artistId, open, onClose, onBook }: Props) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  const onSubmit = (values: FormValues) => {
    localStorage.setItem(`artistly-booked-${artistId}`, JSON.stringify(values))
    onBook(artistId)
    onClose()
  }

  useEffect(() => {
    if (!open) form.reset()
  }, [open, form])

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-in fade-in zoom-in duration-200 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Input
            placeholder="Your Name"
            {...form.register("name")}
            className="bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <Input
            placeholder="Your Email"
            {...form.register("email")}
            className="bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <textarea
            className="w-full border rounded-md p-2 bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            rows={3}
            placeholder="Message"
            {...form.register("message")}
          />
          <Button type="submit" className="w-full">Submit Request</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
