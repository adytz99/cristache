import type { Metadata } from "next"

export const siteUrl = "https://cristache.ro"
export const siteName = "Cristache"

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  image,
}: {
  title: string
  description: string
  path: string
  type?: "website" | "article"
  publishedTime?: string
  image?: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "ro_RO",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  }
}
