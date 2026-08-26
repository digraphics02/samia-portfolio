import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#211c16",
          color: "#fbf7f2",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#c1622f" }}>
          {siteConfig.location}
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 34, marginTop: 20, opacity: 0.85 }}>{siteConfig.tagline}</div>
      </div>
    ),
    { ...size }
  );
}
