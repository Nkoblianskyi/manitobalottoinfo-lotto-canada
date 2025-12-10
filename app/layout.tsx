import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ManitobaLottoInfo - Canadian Lottery Information",
  description:
    "Your trusted source for Canadian lottery information. Explore Lotto 6/49, Lotto Max, Daily Grand and more. For informational purposes only.",
  keywords: ["lottery", "canada", "manitoba", "lotto 6/49", "lotto max", "daily grand", "lottery information"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ManitobaLottoInfo - Canadian Lottery Information",
    description: "Your trusted source for Canadian lottery information and ticket selection.",
    siteName: "ManitobaLottoInfo",
    url: "https://manitobalottoinfo.com",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
