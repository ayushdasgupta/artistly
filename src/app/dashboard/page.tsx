"use client"

import { useEffect, useState } from "react"
import { ArtistTable } from "@/components/dashboard/ArtistTable"
import { dummyArtists } from "@/lib/dummyData"
import { columns as baseColumns, Artist } from "@/components/dashboard/columns"
import { ViewBookingModal } from "@/components/dashboard/ViewBookingModal"

export default function DashboardPage() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState<null | Artist>(null)

  useEffect(() => {
    const getAllArtists = () => {
      const dummy = dummyArtists
      const local = JSON.parse(localStorage.getItem("artistly-onboarded") || "[]")
      return [...dummy, ...local]
    }

    const updateArtistBookingCounts = () => {
      const allartists = getAllArtists()

      const updated = allartists.map((artist) => {
        const key = `artistly-booked-${artist.id}`
        const isBooked = localStorage.getItem(key) ? 1 : 0
        return { ...artist, bookingCount: isBooked }
      })

      setArtists(updated)
    }

    updateArtistBookingCounts()
  }, [])

  const handleView = (artist: Artist) => {
    setSelectedArtist(artist)
    setModalOpen(true)
  }

  const handleBookingCleared = () => {
    const getAllArtists = () => {
      const dummy = dummyArtists
      const local = JSON.parse(localStorage.getItem("artistly-onboarded") || "[]")
      return [...dummy, ...local]
    }

    const allartists = getAllArtists()
    const updated = allartists.map((artist) => {
      const key = `artistly-booked-${artist.id}`
      const isBooked = localStorage.getItem(key) ? 1 : 0
      return { ...artist, bookingCount: isBooked }
    })

    setArtists(updated)
  }

  const columns = baseColumns.map((col) => {
    if (col.header === "Actions") {
      return {
        ...col,
        cell: (row: Artist) => (
          <button
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            onClick={() => handleView(row)}
          >
            View
          </button>
        ),
      }
    }
    return col
  })

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Artist Submissions</h1>
      <ArtistTable data={artists} columns={columns} />

      {selectedArtist && (
        <ViewBookingModal
          open={modalOpen}
          artistId={selectedArtist.id}
          artistName={selectedArtist.name}
          onClose={() => setModalOpen(false)}
          onBookingCleared={handleBookingCleared}
        />
      )}
    </div>
  )
}
