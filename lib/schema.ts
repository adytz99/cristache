import { siteUrl } from "@/lib/seo-utils"
import type { Service, ServiceFaq } from "@/lib/services-data"
import type { CaseStudy } from "@/lib/blog-data"

const orgId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

export const people = [
  {
    id: `${siteUrl}/despre#adrian-cristache`,
    name: "Adrian Cristin Cristache",
    jobTitle: "Administrator",
    image: `${siteUrl}/images/adrian-cristache.jpg`,
    description: "Conduce direcția de produs, web, aplicații și platforme.",
  },
  {
    id: `${siteUrl}/despre#nicoleta-cristache`,
    name: "Nicoleta Alexandra Cristache",
    jobTitle: "Administrator",
    image: `${siteUrl}/images/nicoleta-cristache.jpg`,
    description: "Conduce conținutul, social media și relația cu clienții.",
  },
]

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: "Cristache",
        alternateName: "Cristache Web & Creative",
        url: siteUrl,
        logo: `${siteUrl}/images/logo-mark.png`,
        image: `${siteUrl}/opengraph-image`,
        description:
          "Studio de conținut și produs digital din București: creare conținut, social media marketing, campanii ADS, dezvoltare web, aplicații mobile, platforme online, integrare plăți și baze de date.",
        email: "contact@cristache.ro",
        telephone: "+40735371775",
        address: { "@type": "PostalAddress", addressLocality: "București", addressCountry: "RO" },
        areaServed: { "@type": "Country", name: "România" },
        founder: people.map((person) => ({ "@id": person.id })),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@cristache.ro",
          telephone: "+40735371775",
          availableLanguage: ["ro"],
        },
        knowsAbout: [
          "Creare conținut",
          "Social media marketing",
          "TikTok Ads",
          "Meta Ads",
          "Google Ads",
          "Dezvoltare web",
          "Aplicații mobile",
          "Integrare plăți",
          "Baze de date",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Cristache",
        inLanguage: "ro-RO",
        publisher: { "@id": orgId },
      },
    ],
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function faqSchema(faq: ServiceFaq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}

export function serviceSchema(service: Service) {
  const url = `${siteUrl}/servicii/${service.slug}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.intro,
        url,
        provider: { "@id": orgId },
        areaServed: { "@type": "Country", name: "România" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.name,
          itemListElement: service.includes.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item },
          })),
        },
      },
      faqSchema(service.faq),
      breadcrumbSchema([
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
        { name: service.name, path: `/servicii/${service.slug}` },
      ]),
    ],
  }
}

export function articleSchema(study: CaseStudy) {
  const url = `${siteUrl}/blog/${study.slug}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: study.content.title,
        description: study.content.excerpt,
        datePublished: study.date,
        dateModified: study.date,
        image: `${siteUrl}${study.image}`,
        inLanguage: "ro-RO",
        url,
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        mainEntityOfPage: url,
        keywords: study.content.tags.join(", "),
      },
      breadcrumbSchema([
        { name: "Acasă", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: study.content.title, path: `/blog/${study.slug}` },
      ]),
    ],
  }
}

export function aboutSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...people.map((person) => ({
        "@type": "Person",
        "@id": person.id,
        name: person.name,
        jobTitle: person.jobTitle,
        image: person.image,
        description: person.description,
        worksFor: { "@id": orgId },
      })),
      {
        "@type": "AboutPage",
        url: `${siteUrl}/despre`,
        name: "Despre Cristache",
        about: { "@id": orgId },
      },
      breadcrumbSchema([
        { name: "Acasă", path: "/" },
        { name: "Despre", path: "/despre" },
      ]),
    ],
  }
}

export function homeFaqSchema(faq: ServiceFaq[]) {
  return { "@context": "https://schema.org", ...faqSchema(faq) }
}
