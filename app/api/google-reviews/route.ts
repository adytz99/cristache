import { NextResponse } from "next/server"
import { fetchGoogleReviews, googleReviewsConfigured } from "@/lib/google-reviews"

// Review content from the Places API may not be cached, so this route is
// always dynamic and tells browsers and the CDN not to keep the response.
export const dynamic = "force-dynamic"

const noStore = { "Cache-Control": "no-store" }

export async function GET() {
  if (!googleReviewsConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 404, headers: noStore })
  }

  try {
    const data = await fetchGoogleReviews()
    if (!data) return NextResponse.json({ error: "unavailable" }, { status: 502, headers: noStore })
    return NextResponse.json(data, { headers: noStore })
  } catch (error) {
    console.error("Google reviews error", error)
    return NextResponse.json({ error: "unavailable" }, { status: 502, headers: noStore })
  }
}
