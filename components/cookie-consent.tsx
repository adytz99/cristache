"use client"

import { useEffect } from "react"
import * as CookieConsentJS from "vanilla-cookieconsent"
import "vanilla-cookieconsent/dist/cookieconsent.css"

export default function CookieConsent({ dictionary }: { dictionary: any }) {
  useEffect(() => {
    // Helper: update Google Consent Mode based on accepted categories
    const updateConsentMode = (cookie: { categories: string[] }) => {
      try {
        const w = window as any
        w.dataLayer = w.dataLayer || []
        const gtag = (...args: any[]) => w.dataLayer.push(args)

        const accepted = new Set(cookie?.categories || [])
        const analyticsGranted = accepted.has("analytics")
        const marketingGranted = accepted.has("marketing")

        gtag("consent", "update", {
          analytics_storage: analyticsGranted ? "granted" : "denied",
          ad_storage: marketingGranted ? "granted" : "denied",
          ad_user_data: marketingGranted ? "granted" : "denied",
          ad_personalization: marketingGranted ? "granted" : "denied",
        })
      } catch (_) {
        // no-op
      }
    }

    CookieConsentJS.run({
      // v3 API options
      mode: "opt-in",
      autoShow: true,
      revision: 2, // bump to re-prompt after config changes
      manageScriptTags: true,
      autoClearCookies: true,
      lazyHtmlGeneration: false,
      guiOptions: {
        consentModal: {
          layout: "cloud",
          position: "middle center",
          transition: "slide",
        },
        preferencesModal: {
          layout: "box",
          transition: "slide",
        },
      },
      language: {
        default: "ro",
        translations: {
          ro: {
            consentModal: {
              title: dictionary.cookie.consentModal.title,
              description: dictionary.cookie.consentModal.description,
              acceptAllBtn: dictionary.cookie.consentModal.acceptAllBtn,
              acceptNecessaryBtn: dictionary.cookie.consentModal.acceptNecessaryBtn,
              showPreferencesBtn: dictionary.cookie.consentModal.showPreferencesBtn,
            },
            preferencesModal: {
              title: dictionary.cookie.preferencesModal.title,
              subtitle: dictionary.cookie.preferencesModal.subtitle,
              acceptAllBtn: dictionary.cookie.preferencesModal.acceptAllBtn,
              acceptNecessaryBtn: dictionary.cookie.preferencesModal.acceptNecessaryBtn,
              savePreferencesBtn: dictionary.cookie.preferencesModal.savePreferencesBtn,
              closeIconLabel: dictionary.cookie.preferencesModal.closeIconLabel,
              sections: [
                {
                  title: dictionary.cookie.preferencesModal.sections.usage.title,
                  description: dictionary.cookie.preferencesModal.sections.usage.description,
                },
                {
                  title: dictionary.cookie.preferencesModal.sections.necessary.title,
                  description: dictionary.cookie.preferencesModal.sections.necessary.description,
                  linkedCategory: "necessary",
                },
                {
                  title: dictionary.cookie.preferencesModal.sections.analytics.title,
                  description: dictionary.cookie.preferencesModal.sections.analytics.description,
                  linkedCategory: "analytics",
                },
                {
                  title: dictionary.cookie.preferencesModal.sections.marketing.title,
                  description: dictionary.cookie.preferencesModal.sections.marketing.description,
                  linkedCategory: "marketing",
                },
              ],
            },
          },
        },
      },
      categories: {
        necessary: { readOnly: true },
        analytics: {},
        marketing: {},
      },
      onFirstConsent: ({ cookie }: any) => updateConsentMode(cookie),
      onConsent: ({ cookie }: any) => updateConsentMode(cookie),
      onChange: ({ cookie }: any) => updateConsentMode(cookie),
    })
  }, [dictionary])

  return null
}
