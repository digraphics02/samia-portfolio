import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { expertise, portfolioProjects, skills } from "@/lib/content";
import { personSchema } from "@/lib/schema";
import ProjectCard from "@/components/ProjectCard";

// Provisional title/description assembled from the resume and Behance
// profile only — replace with the supplied metadata doc when it arrives.
export const metadata: Metadata = {
  title: "Samia Rafique | Graphic Designer & Print Specialist in Lahore, Pakistan",
  description:
    "Samia Rafique is a Graphic Designer & Print Specialist based in Lahore, Pakistan, specializing in branding, food packaging, and print design with expertise in layout, typography, and production-ready artwork.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Samia Rafique | Graphic Designer & Print Specialist",
    description:
      "Branding, food packaging, and print design portfolio — layout, typography, and production-ready artwork.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samia Rafique | Graphic Designer & Print Specialist",
    description:
      "Branding, food packaging, and print design portfolio — layout, typography, and production-ready artwork.",
  },
};

const featuredProjects = portfolioProjects.slice(0, 3);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-wide text-muted">{siteConfig.location}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-body">
          Graphic Designer &amp; Print Specialist specializing in branding, food packaging, and print
          design with expertise in layout, typography, and production-ready artwork.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/portfolio/"
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 text-sm font-semibold text-paper hover:bg-accent-dark"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact/"
            className="inline-flex min-h-11 items-center rounded-md border border-line px-6 text-sm font-semibold text-ink hover:border-accent"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-ink">Expertise</h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {expertise.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-paper px-4 py-3 text-sm text-body"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Tools: {skills.join(", ")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold text-ink">Featured Work</h2>
          <Link href="/portfolio/" className="text-sm font-medium text-body hover:text-ink">
            View all portfolio work
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-ink">Let&apos;s work together</h2>
          <p className="mt-2 text-body">
            Available for freelance graphic design work in branding, packaging, and print.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 text-sm font-semibold text-paper hover:bg-accent-dark"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex min-h-11 items-center rounded-md border border-line px-6 text-sm font-semibold text-ink hover:border-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
