
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { categories } from "@/lib/dummyData"
import { CategoryCard } from "@/components/ui/home/CatagoryCard"

export default function HomePage() {
  return (
    <div>
      <section className="flex-1 flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold mb-4">Find & Book Talented Artists</h2>
        <p className="text-muted-foreground max-w-xl mb-6">
          Discover top singers, dancers, speakers, and DJs for your next event.
        </p>
        <Link href="/artists">
          <Button size="lg">Browse Artists</Button>
        </Link>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8 text-center">Explore by Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
