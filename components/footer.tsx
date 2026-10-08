import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer({ dictionary }: { dictionary: any }) {
  const columns = [
    {
      title: dictionary.footer.services,
      links: [
        { href: "/servicii/creare-continut", label: dictionary.footer.content },
        { href: "/servicii/social-media-marketing", label: dictionary.footer.social },
        { href: "/servicii/campanii-ads", label: dictionary.footer.ads },
        { href: "/servicii/dezvoltare-web", label: dictionary.footer.development },
        { href: "/servicii/aplicatii-mobile", label: dictionary.footer.mobile },
        { href: "/servicii/platforme-online", label: dictionary.footer.platforms },
        { href: "/servicii/baze-de-date", label: dictionary.footer.data },
      ],
    },
    {
      title: dictionary.footer.company,
      links: [
        { href: "/despre", label: dictionary.footer.about },
        { href: "/#proces", label: dictionary.footer.process },
        { href: "/portofoliu", label: dictionary.footer.portfolio },
        { href: "/blog", label: dictionary.footer.blog },
        { href: "/contact", label: dictionary.footer.contact },
      ],
    },
    {
      title: dictionary.footer.legal,
      links: [
        { href: "/termeni-conditii", label: dictionary.footer.terms },
        { href: "/politica-confidentialitate", label: dictionary.footer.privacy },
        { href: "/cookies", label: dictionary.footer.cookies },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-beige/20 bg-black">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/images/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8 object-contain mix-blend-screen" />
              <span className="font-serif text-2xl text-ivory">Cristache</span>
            </Link>
            <p className="max-w-[240px] text-sm text-ivory/55">{dictionary.footer.description}</p>
            <div className="space-y-2 text-sm text-ivory/70">
              <a href="mailto:contact@cristache.ro" className="flex items-center gap-2 hover:text-beige">
                <Mail className="h-4 w-4 text-beige-deep" />
                contact@cristache.ro
              </a>
              <a href="tel:+40735371775" className="flex items-center gap-2 hover:text-beige">
                <Phone className="h-4 w-4 text-beige-deep" />
                (+40) 735 371 775
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-beige-deep" />
                <span>București, România</span>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.16em] text-ivory">{col.title}</h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-ivory/55 transition-colors hover:text-beige">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center border-t border-beige/15 pt-8">
          <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/anpc-sal.png"
              alt="ANPC. Soluționarea alternativă a litigiilor"
              width={693}
              height={179}
              className="h-16 w-auto max-w-full"
            />
          </a>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed tracking-wide text-ivory/25">
          S.C. ATELIERUL NEGRU S.R.L.
          <br />
          Cui: 42681706
          <br />
          Nr. Reg. Com: J40/6967/2020
        </p>

        <div className="mt-3 text-center text-xs tracking-wide text-ivory/40">
          {dictionary.footer.rights}
        </div>
      </div>
    </footer>
  )
}
