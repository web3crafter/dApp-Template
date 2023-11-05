import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import { GeistSans, GeistMono } from "geist/font"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// Using Tailwind
export const geistSansVariable = GeistSans.variable
export const geistMonoVariable = GeistMono.variable

// Using Next.js
export const geistSansClassName = GeistSans.className
export const geistMonoClassName = GeistMono.className
