import { services } from "@/lib/services-data"
import { projects } from "@/lib/projects-data"
import { siteUrl } from "@/lib/seo-utils"

export const dynamic = "force-static"

export function GET() {
  const body = `# Cristache

> Cristache este un studio de conținut și produs digital din București, România. Oferă creare conținut, social media marketing, campanii ADS, dezvoltare web, aplicații mobile iOS și Android, platforme online cu integrare de plăți și baze de date.

Administratori: Adrian Cristin Cristache și Nicoleta Alexandra Cristache.
Email: contact@cristache.ro
Telefon: +40 735 371 775
Locație: București, România
Limbă: română

## Servicii

${services.map((service) => `- [${service.name}](${siteUrl}/servicii/${service.slug}): ${service.short}`).join("\n")}

## Proiecte

${projects.map((project) => `- ${project.title}: ${project.description}`).join("\n")}

## Pagini principale

- [Acasă](${siteUrl}/)
- [Servicii](${siteUrl}/servicii)
- [Portofoliu](${siteUrl}/portofoliu)
- [Despre](${siteUrl}/despre)
- [Blog și studii de caz](${siteUrl}/blog)
- [Contact](${siteUrl}/contact)
`

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
