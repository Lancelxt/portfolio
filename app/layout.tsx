import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GlowContainer } from "../components/GlowContainer"
import WhatsAppButton from "../components/WhatsAppButton"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' })

export const metadata: Metadata = {
  title: "Malyaj Singh | High-Performance Engineer",
  description:
    "Specializing in cloud infrastructure, CI/CD pipelines, and high-aesthetic portfolio design. Merging technical depth with premium UX.",
  generator: "Armory AI OS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased text-white selection:bg-primary/20`}>
        <GlowContainer>
          {children}
        </GlowContainer>
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
