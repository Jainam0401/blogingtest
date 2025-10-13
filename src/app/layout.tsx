import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Suspense } from "react"

import { inter, roboto, satoshi,lato } from "@/app/styles/font"
export const metadata: Metadata = {
  title: "SUVIT - Professional Content Writing, SEO, and Translation Services",
  description: "Professional content writing, SEO content, and translation services for effective communication, maximum reach, and global impact.",
  generator: "Jainam",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${roboto.variable} ${satoshi.variable} ${lato.variable} `}>
        <Suspense fallback={null}>
          
        </Suspense>
        {children}
       
      </body>
    </html>
  )
}
