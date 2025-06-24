import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Artistly. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <Link href="/artists" className="hover:text-blue-600">Artists</Link>
          <Link href="/onboard" className="hover:text-blue-600">Join</Link>
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        </div>
      </div>
    </footer>
  )
}
