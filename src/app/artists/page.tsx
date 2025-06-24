"use client"

import { useEffect, useState } from "react"
import { ArtistCard } from "@/components/artists/ArtistCard"
import { FilterBlock } from "@/components/artists/FilterBlock"
import { dummyArtists, categories, locations, priceRanges } from "@/lib/dummyData"

export default function ArtistListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [artists, setArtists] = useState(dummyArtists)

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("artistly-onboarded") || "[]")
    setArtists([...dummyArtists, ...local])
  }, [])

  const filteredArtists = artists.filter((artist) => {
    return (
      (!selectedCategory || artist.category === selectedCategory) &&
      (!selectedLocation || artist.location === selectedLocation) &&
      (!selectedPrice || artist.feeRange === selectedPrice)
    )
  })

  return (
    <div className="max-w-7xl mx-auto p-4 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Browse Artists</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FilterBlock
          label="Category"
          options={categories.map((c) => c.title)}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
        <FilterBlock
          label="Location"
          options={locations}
          value={selectedLocation}
          onChange={setSelectedLocation}
        />
        <FilterBlock
          label="Price Range"
          options={priceRanges}
          value={selectedPrice}
          onChange={setSelectedPrice}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} {...artist} profileImage={artist.profileImage ?? undefined} />
        ))}
        {filteredArtists.length === 0 && (
          <p className="text-muted-foreground dark:text-gray-400 col-span-full text-center">No artists found.</p>
        )}
      </div>
    </div>
  )
}
