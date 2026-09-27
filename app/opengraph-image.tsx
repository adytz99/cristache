import { ImageResponse } from "next/og"

export const alt = "Cristache Web & Creative: creare conținut, social media, site-uri și aplicații mobile"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#F6F1EA",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 44, letterSpacing: 8, color: "#E8DCC8" }}>CR</div>
        <div style={{ marginTop: 24, fontSize: 112, letterSpacing: 18 }}>CRISTACHE</div>
        <div style={{ marginTop: 8, fontSize: 30, letterSpacing: 12, color: "#C4A882" }}>WEB &amp; CREATIVE</div>
        <div style={{ marginTop: 40, width: 120, height: 2, background: "#C4A882" }} />
        <div style={{ marginTop: 40, fontSize: 30, color: "rgba(246,241,234,0.75)", fontFamily: "sans-serif" }}>
          Conținut · Social media · Web · Aplicații mobile · Platforme
        </div>
      </div>
    ),
    size,
  )
}
