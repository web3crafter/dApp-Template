import "./globals.css"
import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { geistSansClassName, geistSansVariable } from "@/lib/fonts"
import { ThemeProvider } from "@/providers/theme-provider"

import TailwindIndicator from "@/components/tailwind-indicator"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/nav/site-header"
import WagmiRainbowProvider from "@/providers/wagmi-rainbow-provider"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head /> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          // geistSansClassName
          geistSansVariable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WagmiRainbowProvider>
            <div className="relative flex flex-col min-h-screen">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            <Toaster richColors />
            <TailwindIndicator />
          </WagmiRainbowProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
