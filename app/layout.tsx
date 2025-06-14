import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Google",
  description:
    "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
  keywords: "search, web search, google, search engine",
  authors: [{ name: "Google" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    google: "notranslate",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//images.google.com" />
        <link rel="dns-prefetch" href="//mail.google.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body className="antialiased font-arial">{children}</body>
    </html>
  )
}
