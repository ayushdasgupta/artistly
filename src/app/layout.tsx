import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navber";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
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
