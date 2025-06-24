"use client"
import Image from 'next/image'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { BookModal } from "./BookModal"

type ArtistCardProps = {
  id: string
  name: string
  bio: string
  category: string
  location: string
  languages: string
  feeRange: string
  profileImage?: string
}

export const ArtistCard = ({
  id,
  name,
  bio,
  category,
  location,
  languages,
  feeRange,
  profileImage,
}: ArtistCardProps) => {
  const [open, setOpen] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const storageKey = `artistly-booked-${id}`

  useEffect(() => {
    const data = localStorage.getItem(storageKey)
    if (data) setIsBooked(true)
  }, [storageKey])

  const handleBook = () => {
    setIsBooked(true)
  }

  const handleCancel = () => {
    localStorage.removeItem(storageKey)
    setIsBooked(false)
  }

  return (
    <div className="border rounded-xl p-5 shadow-sm bg-white dark:bg-slate-800 relative space-y-3 text-gray-900 dark:text-gray-100">

      {profileImage ? (
        <Image
          src={profileImage}
          width={600}
          height={400}
          alt={`${name}'s profile`}
          className="w-full h-48 object-cover rounded-md"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-md text-4xl font-bold uppercase">
          {name
            .split(" ")
            .map(word => word[0])
            .join("")
            .slice(0, 2)}
        </div>
      )}

      <div>
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="text-sm text-muted-foreground dark:text-gray-400">{category} • {location}</p>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Speaks: {languages}</p>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300">{bio}</p>

      <p className="text-sm text-muted-foreground dark:text-gray-400">Fee: {feeRange}</p>

      {isBooked ? (
        <div className="space-y-2 pt-2">
          <Button disabled variant="outline" className="w-full">
            Already Requested
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="w-full"
            onClick={handleCancel}
          >
            Cancel Booking
          </Button>
        </div>
      ) : (
        <Button className="mt-3 w-full" onClick={() => setOpen(true)}>
          Ask for Quote
        </Button>
      )}

      <BookModal
        artistId={id}
        open={open}
        onClose={() => setOpen(false)}
        onBook={handleBook}
      />
    </div>
  )
}
