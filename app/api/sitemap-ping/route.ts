import { NextResponse } from "next/server"

export async function GET() {
  const sitemapUrl = "https://cristache.ro/sitemap.xml"
  return NextResponse.json({ ok: true, sitemap: sitemapUrl })
}
