"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import type { GoogleReviewsData } from "@/lib/google-reviews"

type Labels = {
  title: string
  description: string
  basedOn: string
  seeAll: string
  writeReview: string
  source: string
}

// Start loading a little before the section scrolls into view. Kept outside
// the component so the observer is not recreated on every render.
const observerOptions: IntersectionObserverInit = { rootMargin: "400px 0px" }

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors"
const primaryButton = `${buttonBase} bg-ink text-ivory hover:bg-black`
const outlineButton = `${buttonBase} border border-ink/25 text-ink hover:bg-ink hover:text-ivory`

function Stars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  const rounded = Math.round(rating)
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={`${rating.toFixed(1)} din 5 stele`}>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          aria-hidden="true"
          className={`${size} ${value <= rounded ? "fill-[#f5b301] text-[#f5b301]" : "fill-transparent text-ink/25"}`}
        />
      ))}
    </span>
  )
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.5z" />
    </svg>
  )
}

export function GoogleReviews({ labels }: { labels: Labels }) {
  const { ref, isInView } = useInView(observerOptions)
  const [data, setData] = useState<GoogleReviewsData | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!isInView || data || failed) return
    const controller = new AbortController()
    fetch("/api/google-reviews", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((json: GoogleReviewsData) => setData(json))
      .catch((error) => {
        if (!controller.signal.aborted) {
          console.warn("Google reviews unavailable", error)
          setFailed(true)
        }
      })
    return () => controller.abort()
  }, [isInView, data, failed])

  // Hide the whole section rather than show an empty or broken block. A
  // profile with no reviews yet is better left off the homepage: ask clients
  // for reviews with the direct link instead (see writeReviewUrl).
  if (failed || (data && data.reviews.length === 0)) return null

  return (
    <section id="recenzii" className="bg-ivory py-20 text-ink" aria-labelledby="recenzii-titlu">
      <div ref={ref} className="container">
        <div className="mb-12 text-center">
          <h2 id="recenzii-titlu" className="text-4xl text-ink md:text-5xl">
            {labels.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/60">{labels.description}</p>

          {data && (
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl bg-white sm:rounded-full px-5 py-2.5 shadow-sm">
              <GoogleMark />
              <span className="text-2xl font-semibold leading-none">{data.rating.toFixed(1).replace(".", ",")}</span>
              <Stars rating={data.rating} />
              <span className="text-sm text-ink/60">
                {labels.basedOn.replace("{count}", String(data.total))}
              </span>
            </div>
          )}
        </div>

        {!data && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
            {[0, 1, 2].map((index) => (
              <div key={index} className="h-56 animate-pulse rounded-3xl bg-white/70" />
            ))}
          </div>
        )}

        {data && (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.reviews.map((review) => (
              <li key={review.id} className="flex flex-col rounded-3xl bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  {review.authorPhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element -- Google profile photo, shown as returned by the API
                    <img
                      src={review.authorPhoto}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-beige text-sm font-semibold">
                      {review.authorName.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <div className="min-w-0">
                    {review.authorUrl ? (
                      <a
                        href={review.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="block truncate font-medium text-ink hover:text-beige-deep"
                      >
                        {review.authorName}
                      </a>
                    ) : (
                      <span className="block truncate font-medium text-ink">{review.authorName}</span>
                    )}
                    <span className="text-xs text-ink/50">{review.relativeTime}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Stars rating={review.rating} />
                </div>
                <p className="mt-3 line-clamp-6 flex-1 whitespace-pre-line text-ink/75">{review.text}</p>
                <p className="mt-5 flex items-center gap-2 text-xs text-ink/45">
                  <GoogleMark />
                  {labels.source}
                </p>
              </li>
            ))}
          </ul>
        )}

        {data && (
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>
              {labels.seeAll}
            </a>
            <a href={data.writeReviewUrl} target="_blank" rel="noopener noreferrer" className={outlineButton}>
              {labels.writeReview}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
