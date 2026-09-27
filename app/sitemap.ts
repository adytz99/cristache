import type { MetadataRoute } from "next"
import { caseStudies } from "@/lib/blog-data"
import { services } from "@/lib/services-data"
import { siteUrl } from "@/lib/seo-utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/servicii", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portofoliu", priority: 0.9, changeFrequency: "monthly" },
    { path: "/despre", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/termeni-conditii", priority: 0.2, changeFrequency: "yearly" },
    { path: "/politica-confidentialitate", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
  ]

  return [
    ...pages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/servicii/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/blog/${study.slug}`,
      lastModified: new Date(study.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}
