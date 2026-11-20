import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

// Adrian's profiles are the studio's public social accounts for now.
const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/adrian_cristache",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1M12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.1 1.4C1.3 2.6.9 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.2.6 2.9.3.8.7 1.5 1.4 2.1.7.7 1.3 1.1 2.1 1.4.8.3 1.6.5 2.9.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.3 2.9-.6.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.2-.6-2.9-.3-.8-.7-1.5-1.4-2.1-.7-.7-1.3-1.1-2.1-1.4-.8-.3-1.6-.5-2.9-.6C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@adicrs9",
    path: "M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.4a2.9 2.9 0 0 1-5.2 1.7 2.9 2.9 0 0 1 3.2-4.5V9.1a6.3 6.3 0 0 0-5.4 10.7 6.3 6.3 0 0 0 10.8-4.4V8.6a8.2 8.2 0 0 0 4.8 1.5V6.7z",
  },
]

export function Footer({ dictionary }: { dictionary: any }) {
  const columns = [
    {
      title: dictionary.footer.services,
      links: [
        { href: "/servicii/dezvoltare-web", label: dictionary.footer.development },
        { href: "/servicii/platforme-online", label: dictionary.footer.platforms },
        { href: "/servicii/automatizari-ai", label: dictionary.footer.automation },
        { href: "/servicii/aplicatii-mobile", label: dictionary.footer.mobile },
        { href: "/servicii/baze-de-date", label: dictionary.footer.data },
        { href: "/servicii/creare-continut", label: dictionary.footer.content },
        { href: "/servicii/social-media-marketing", label: dictionary.footer.social },
        { href: "/servicii/campanii-ads", label: dictionary.footer.ads },
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
            <div className="flex items-center gap-3 pt-1" role="group" aria-label={dictionary.footer.follow}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-beige/25 text-ivory/70 transition-colors hover:border-beige hover:text-beige"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
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
          Nr. Reg. Com: J2020006967400
        </p>

        <div className="mt-3 text-center text-xs tracking-wide text-ivory/40">
          {dictionary.footer.rights}
        </div>
      </div>
    </footer>
  )
}
