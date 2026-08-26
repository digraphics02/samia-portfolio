import { ImageResponse } from "next/og";
import { portfolioProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

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
          {project?.category ?? siteConfig.tagline}
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, marginTop: 24 }}>{project?.title ?? siteConfig.name}</div>
        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.85 }}>{siteConfig.name}</div>
      </div>
    ),
    { ...size }
  );
}
