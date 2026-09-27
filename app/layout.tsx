import type { Metadata } from "next"
import { Geist, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { getDictionary } from "@/lib/get-dictionary"
import { CookieConsentWrapper } from "@/components/cookie-consent-wrapper"
import { CookieFloatingButton } from "@/components/cookie-floating-button"
import { Toaster } from "@/components/ui/toaster"
import { JsonLd } from "@/components/json-ld"
import { ScrollReveal } from "@/components/scroll-reveal"
import { organizationSchema } from "@/lib/schema"
import { siteName, siteUrl } from "@/lib/seo-utils"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary()

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dictionary.metadata.title,
      template: `%s | ${siteName}`,
    },
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    alternates: { canonical: "/" },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      type: "website",
      locale: "ro_RO",
      url: "/",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dictionary = await getDictionary()

  return (
    <html lang="ro" className={`${geist.variable} ${display.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-black text-ivory min-h-screen" suppressHydrationWarning>
        <JsonLd data={organizationSchema()} />
        <ScrollReveal />
        {children}
        <CookieConsentWrapper dictionary={dictionary} />
        <CookieFloatingButton dictionary={dictionary} />
        <Toaster />
      </body>
    </html>
  )
}
