"use client"

import { useEffect } from "react"

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="ro">
      <body className="flex min-h-screen flex-col items-center justify-center bg-black p-8 text-center text-[#F6F1EA]">
        <h1 className="mb-4 text-4xl">Eroare neașteptată</h1>
        <p className="mb-8 text-[#F6F1EA]/60">Ne cerem scuze, ceva nu a funcționat corect.</p>
        <a href="/" className="rounded-full bg-[#E8DCC8] px-6 py-3 font-semibold text-black">
          Înapoi la prima pagină
        </a>
      </body>
    </html>
  )
}
