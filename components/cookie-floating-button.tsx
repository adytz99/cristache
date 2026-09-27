"use client"

import { Cookie } from "lucide-react"
import * as CookieConsentJS from "vanilla-cookieconsent"

export function CookieFloatingButton({ dictionary }: { dictionary: any }) {
  const openPreferences = () => {
    CookieConsentJS.showPreferences()
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      aria-label={dictionary.cookie.floatingLabel}
      title={dictionary.cookie.floatingLabel}
      className="fixed left-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-white text-gray-900 shadow-lg border border-gray-200 px-4 py-2 hover:bg-gray-50 hover:shadow-xl transition-colors"
    >
      <Cookie className="h-5 w-5 text-beige-deep" />
      <span className="hidden sm:inline">{dictionary.cookie.settings}</span>
    </button>
  )
}

