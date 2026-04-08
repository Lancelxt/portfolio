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
  title: "Malyaj Singh | Software Engineer & Cloud Architect",
  description:
    "Malyaj Singh is a full-stack software engineer specializing in resilient cloud infrastructure, automated CI/CD pipelines, and high-performance digital experiences. Explore my portfolio of scalable systems and premium interfaces.",
  keywords: ["Software Engineer", "Cloud Architect", "DevOps Engineer", "Full-Stack Developer", "Next.js", "AWS", "Infrastructure as Code", "Resilient Systems"],
  authors: [{ name: "Malyaj Singh" }],
  openGraph: {
    title: "Malyaj Singh | Software Engineer & Cloud Architect",
    description: "Building resilient cloud systems and premium user experiences.",
    url: "https://malyaj.dev",
    siteName: "Malyaj Singh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malyaj Singh | Software Engineer & Cloud Architect",
    description: "Building resilient cloud systems and premium user experiences.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
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
