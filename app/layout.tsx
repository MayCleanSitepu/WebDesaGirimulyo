import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import LiveChatWidget from "@/components/LiveChat"

export const metadata: Metadata = {
  title: "Website Resmi Desa Windusari",
  description: "Informasi, Potensi, dan Kegiatan Desa Windusari",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <LiveChatWidget />
      </body>
    </html>
  )
}
