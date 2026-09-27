"use client"

import * as CookieConsentJS from "vanilla-cookieconsent"

export function CookieSettingsButton({ dictionary }: { dictionary: any }) {
  const openPreferences = () => {
    CookieConsentJS.showPreferences()
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-gray-400 hover:text-white transition-colors underline"
      aria-label={dictionary.cookie.settings}
    >
      {dictionary.cookie.settings}
    </button>
  )
}

