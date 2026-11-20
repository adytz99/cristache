// Server-only helper for the Google reviews shown on the homepage.
//
// Data comes from the Places API (New), Place Details endpoint. Google's
// Places policies do not allow caching or storing review content (only the
// Place ID may be stored), so every call goes to Google with `no-store`.
// To keep the cost near zero the homepage only calls this when a visitor
// scrolls to the reviews section (see components/google-reviews.tsx), and a
// daily quota should be set on the API key in Google Cloud Console.

export type GoogleReview = {
  id: string
  authorName: string
  authorUrl?: string
  authorPhoto?: string
  rating: number
  text: string
  relativeTime: string
  publishTime?: string
}

export type GoogleReviewsData = {
  name: string
  rating: number
  total: number
  mapsUrl: string
  writeReviewUrl: string
  reviews: GoogleReview[]
}

type PlacesReview = {
  name?: string
  relativePublishTimeDescription?: string
  rating?: number
  text?: { text?: string }
  originalText?: { text?: string }
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
  publishTime?: string
}

type PlacesResponse = {
  displayName?: { text?: string }
  rating?: number
  userRatingCount?: number
  googleMapsUri?: string
  reviews?: PlacesReview[]
}

const FIELD_MASK = "displayName,rating,userRatingCount,googleMapsUri,reviews"

export function googleReviewsConfigured() {
  return Boolean(process.env.GOOGLE_PLACE_ID && process.env.GOOGLE_MAPS_API_KEY)
}

export function writeReviewUrl(placeId: string) {
  return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`
}

export async function fetchGoogleReviews(): Promise<GoogleReviewsData | null> {
  const placeId = process.env.GOOGLE_PLACE_ID
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  if (!placeId || !apiKey) return null

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=ro&regionCode=RO`,
    {
      headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": FIELD_MASK },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    },
  )

  if (!response.ok) {
    console.error("Google reviews request failed", response.status, await response.text().catch(() => ""))
    return null
  }

  const place = (await response.json()) as PlacesResponse

  const reviews = (place.reviews ?? [])
    .map((review, index): GoogleReview | null => {
      // Prefer the original wording over Google's automatic translation.
      const text = (review.originalText?.text ?? review.text?.text ?? "").trim()
      const authorName = review.authorAttribution?.displayName?.trim()
      if (!text || !authorName) return null
      return {
        id: review.name ?? `review-${index}`,
        authorName,
        authorUrl: review.authorAttribution?.uri,
        authorPhoto: review.authorAttribution?.photoUri,
        rating: Math.round(review.rating ?? 0),
        text,
        relativeTime: review.relativePublishTimeDescription ?? "",
        publishTime: review.publishTime,
      }
    })
    .filter((review): review is GoogleReview => review !== null)

  return {
    name: place.displayName?.text ?? "Cristache",
    rating: place.rating ?? 0,
    total: place.userRatingCount ?? 0,
    mapsUrl: place.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(placeId)}`,
    writeReviewUrl: writeReviewUrl(placeId),
    reviews,
  }
}
