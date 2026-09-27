"use client"

import { useLayoutEffect } from "react"
import { usePathname } from "next/navigation"

function targetsIn(root: ParentNode) {
  const nodes: HTMLElement[] = []
  root.querySelectorAll("main section").forEach((section) => {
    if (section.classList.contains("min-h-screen")) return
    const cards = [...section.querySelectorAll<HTMLElement>(".reveal-card")]
    if (cards.length) {
      const head = section.querySelector<HTMLElement>(":scope > .container > :first-child")
      if (head && !head.classList.contains("reveal-card") && !head.querySelector(".reveal-card")) {
        nodes.push(head)
      }
      nodes.push(...cards)
      return
    }
    nodes.push(section.querySelector<HTMLElement>(":scope > .container") ?? (section as HTMLElement))
  })
  return nodes
}

function layoutTop(el: HTMLElement) {
  let y = 0
  let node: HTMLElement | null = el
  while (node) {
    y += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return y
}

function revealProgress(el: HTMLElement, vh: number) {
  const index = Number.parseInt(el.style.getPropertyValue("--i") || "0", 10) || 0
  const shift = (index % 4) * vh * 0.06
  const start = vh * 0.98
  const end = vh * 0.46
  const top = layoutTop(el) - window.scrollY + shift
  let t = (start - top) / (start - end)
  if (t < 0) t = 0
  if (t > 1) t = 1
  return t * t * (3 - 2 * t)
}

export function ScrollReveal() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const nodes = targetsIn(document)
    const pending = new Set(nodes)
    nodes.forEach((el) => el.classList.add("reveal-track"))

    let frame = 0
    const update = () => {
      const vh = window.innerHeight
      pending.forEach((el) => {
        const progress = revealProgress(el, vh)
        el.style.setProperty("--reveal", progress.toFixed(3))
        if (progress >= 1) pending.delete(el)
      })
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      nodes.forEach((el) => {
        el.classList.remove("reveal-track")
        el.style.removeProperty("--reveal")
      })
    }
  }, [pathname])

  return null
}
