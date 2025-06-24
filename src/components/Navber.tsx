"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <Link href="/">
          <h1 className="text-xl font-bold tracking-tight text-blue-600">
            Artistly
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/artists" className="text-sm font-medium  hover:text-blue-600 transition">
            Explore Artists
          </Link>
          <Link href="/onboard" className="text-sm font-medium hover:text-blue-600 transition">
            Become an Artist
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-blue-600 transition">
            Manager Dashboard
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/artists"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  Explore Artists
                </Link>
                <Link
                  href="/onboard"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  Become an Artist
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  Manager Dashboard
                </Link>
              </div>
              
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
