import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0f172a] mt-12 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground dark:text-gray-400">
          &copy; {new Date().getFullYear()} Artistly. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <Link
            href="/artists"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Artists
          </Link>
          <Link
            href="/onboard"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Join
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </footer>
  )
}
