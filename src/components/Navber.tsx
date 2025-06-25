"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggler"
export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
   <header className="sticky top-0 z-50 backdrop-blur bg-white/30 dark:bg-slate-900/30 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <Link href="/">
          <h1 className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
            Artistly
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/artists"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Explore Artists
          </Link>
          <Link
            href="/onboard"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Become an Artist
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Manager Dashboard
          </Link>
          <ThemeToggle/>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200"
            >
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/artists"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Explore Artists
                </Link>
                <Link
                  href="/onboard"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Become an Artist
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Manager Dashboard
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <ThemeToggle/>
        </div>
        
      </div>
    </header>
  )
}
