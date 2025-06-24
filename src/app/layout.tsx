import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navber";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Artistly",
  description: "Find & book talented artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    >
      <body className="min-h-screen flex flex-col">
        
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
        
      </body>
    </html>
  );
}
