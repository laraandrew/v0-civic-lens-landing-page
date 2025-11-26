import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Replace broken Geist imports with Inter (stable + built-in)
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RepMe - Political Intelligence",
  description:
    "Track your representatives, understand legislation, and stay informed without the noise. Join the waitlist for early access.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/RepMe.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/RepMe.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/RepMe.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
