import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navber";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Artistly | Find & Book Top Talent Online",
  description: "Discover, connect, and book talented artists like singers, dancers, DJs, and more for your events. Powered by a modern, responsive web app experience.",
  keywords: [
    "Artist booking",
    "Hire artists",
    "Book performers",
    "Find singers online",
    "Event talent platform",
    "Artistly",
    "Next.js booking app",
    "DJs for hire",
    "Local performers",
    "Event management"
  ],
  metadataBase: new URL("https://artistly-ruddy.vercel.app"), 

  openGraph: {
    title: "Artistly | Book Performers Easily",
    description: "Browse and book verified artists from various categories like singers, DJs, and speakers. Artistly makes talent booking easy and accessible.",
    url: "https://artistly-ruddy.vercel.app", 
    siteName: "Artistly",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Artistly Talent Booking Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Artistly | Find & Book Top Artists",
    description: "Your one-stop platform to discover and book talented performers for any event.",
    images: ["/image.png"],
    creator: "@ayushdasgupta01", 
  },

  icons: {
    icon: "/event.png", 
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <div className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
