import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { portfolioProjects } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

const url = `${siteConfig.url}portfolio/`;

export const metadata: Metadata = {
  title: "Portfolio | Samia Rafique, Graphic Designer",
  description:
    "Branding, logo design, and visual identity work by Samia Rafique, a Graphic Designer based in Lahore, Pakistan.",
  alternates: { canonical: url },
  openGraph: {
    title: "Portfolio | Samia Rafique, Graphic Designer",
    description:
      "Branding, logo design, and visual identity work by Samia Rafique, a Graphic Designer based in Lahore, Pakistan.",
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", url: siteConfig.url }, { name: "Portfolio", url }]} />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight text-ink">Portfolio</h1>
          <p className="mt-4 max-w-2xl text-lg text-body">
            Selected branding, logo design, and visual identity projects.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 70, 350)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
