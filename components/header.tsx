"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { services } from "@/lib/services-data"

export function Header({ dictionary }: { dictionary: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const links = [
    { href: "/", label: dictionary.header.home },
    { href: "/#proces", label: dictionary.header.process },
    { href: "/portofoliu", label: dictionary.header.portfolio },
    { href: "/despre", label: dictionary.header.about },
    { href: "/blog", label: dictionary.header.blog },
    { href: "/contact", label: dictionary.header.contact },
  ]

  const closeMenus = () => {
    setIsMenuOpen(false)
    setMobileServicesOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-beige/15 bg-black">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Cristache, acasă">
          <Image src="/images/logo-mark.png" alt="Cristache" width={56} height={56} className="h-12 w-12 object-contain mix-blend-screen" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link href="/" className="menu-link-in text-xs font-medium uppercase tracking-[0.16em] text-ivory/60 transition-colors hover:text-beige" style={{ animationDelay: "0ms" }}>
            {dictionary.header.home}
          </Link>

          <div
            className="menu-link-in relative"
            style={{ animationDelay: "70ms" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false)
            }}
          >
            <Link
              href="/servicii"
              className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.16em] text-ivory/60 transition-colors hover:text-beige"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              {dictionary.header.services}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>
            <div className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 ${servicesOpen ? "visible" : "pointer-events-none invisible"}`}>
              <div className="rounded-xl border border-beige/20 bg-black p-2 shadow-2xl">
                <Link
                  href="/servicii"
                  className="block rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-beige transition-colors hover:bg-white/5"
                >
                  {dictionary.header.services}
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servicii/${service.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-ivory/75 transition-colors hover:bg-white/5 hover:text-ivory"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.slice(1).map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="menu-link-in text-xs font-medium uppercase tracking-[0.16em] text-ivory/60 transition-colors hover:text-beige"
              style={{ animationDelay: `${(index + 2) * 70}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="menu-link-in hidden lg:block" style={{ animationDelay: "560ms" }}>
          <Link href="/contact" className="btn-primary !py-2.5 !px-4 !text-[0.7rem]">
            {dictionary.header.requestAnalysis}
          </Link>
        </div>

        <button
          className="p-2 text-beige lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-beige/15 bg-black lg:hidden">
          <nav className="container space-y-4 py-5">
            <Link href="/" className="menu-link-in block text-sm uppercase tracking-[0.14em] text-ivory/70" onClick={closeMenus}>
              {dictionary.header.home}
            </Link>
            <div className="menu-link-in" style={{ animationDelay: "60ms" }}>
              <button
                type="button"
                className="flex w-full items-center justify-between text-sm uppercase tracking-[0.14em] text-ivory/70"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                {dictionary.header.services}
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-3 space-y-2 border-l border-beige/20 pl-4">
                  <Link href="/servicii" className="block text-sm text-beige" onClick={closeMenus}>
                    {dictionary.header.services}
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicii/${service.slug}`}
                      className="block text-sm text-ivory/70"
                      onClick={closeMenus}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {links.slice(1).map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="menu-link-in block text-sm uppercase tracking-[0.14em] text-ivory/70"
                style={{ animationDelay: `${(index + 2) * 60}ms` }}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-full" onClick={closeMenus}>
              {dictionary.header.requestAnalysis}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
