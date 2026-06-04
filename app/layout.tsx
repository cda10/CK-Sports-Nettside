import type { Metadata } from "next"
import { Cormorant_Garamond, Geist } from "next/font/google"

import "./globals.css"

import { Header, Footer, JsonLd, Analytics } from "@/components/ck"

const display = Cormorant_Garamond({
  variable: "--font-ck-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const sans = Geist({
  variable: "--font-ck-sans",
  subsets: ["latin"],
})

const title = "CK Sports — Bedrifts-bootcamp & Move&Yoga treningsreiser"
const description =
  "Trening, mestring og opplevelser med Kathrine Maaseide. Bedrifts-bootcamp i arbeidstiden, og Move&Yoga treningsreiser til solen. Stavanger."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cksports.no"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.cksports.no",
    siteName: "CK Sports",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${display.variable} ${sans.variable} h-full`}>
      <body
        className="min-h-full bg-[#faf8f4] text-[#1f3a4d] antialiased"
        style={{ fontFamily: "var(--font-ck-sans)" }}
      >
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
