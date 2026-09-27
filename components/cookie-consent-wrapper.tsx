"use client"

import dynamic from "next/dynamic"

const CookieConsent = dynamic(() => import("./cookie-consent"), { ssr: false })

export function CookieConsentWrapper({ dictionary }: { dictionary: any }) {
  return <CookieConsent dictionary={dictionary} />
}
