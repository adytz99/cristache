"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const sections = document.querySelectorAll("main section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("reveal-in")
          entry.target.classList.remove("reveal-pending")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top > window.innerHeight * 0.9) {
        section.classList.add("reveal-pending")
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
