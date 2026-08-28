import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { expertise, portfolioProjects, skills } from "@/lib/content";
import { personSchema } from "@/lib/schema";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ServiceChip from "@/components/ServiceChip";
import { ArrowIcon } from "@/components/icons";

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

const TONES = ["dark", "accent", "light"] as const;
const featuredProjects = portfolioProjects.slice(0, 3);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium uppercase tracking-wide text-body">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {siteConfig.location}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            {siteConfig.name}
            <br className="hidden sm:block" />
            <span className="text-accent">{siteConfig.tagline}.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body">
            Specializing in branding, food packaging, and print design with expertise in layout,
            typography, and production-ready artwork.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/portfolio/"
              className="inline-flex min-h-11 items-center rounded-md bg-ink px-6 text-sm font-semibold text-paper hover:bg-ink-hover"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact/"
              className="inline-flex min-h-11 items-center rounded-md border border-line px-6 text-sm font-semibold text-ink hover:border-ink"
            >
              Contact
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-12 sm:px-10 sm:py-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-8 select-none text-[8rem] font-bold leading-none text-ink/5 sm:text-[10rem]"
              >
                01
              </span>

              <div className="relative flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Expertise
                </h2>
                <Link href="/services/" className="text-sm font-medium text-body hover:text-ink">
                  View all services
                </Link>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                {expertise.map((item, index) => (
                  <ServiceChip
                    key={item}
                    label={item}
                    tone={TONES[index % TONES.length]}
                    delay={index * 60}
                  />
                ))}
              </div>

              <p className="relative mt-8 text-sm text-muted">Tools: {skills.join(", ")}</p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-12 sm:px-10 sm:py-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-8 select-none text-[8rem] font-bold leading-none text-ink/5 sm:text-[10rem]"
              >
                02
              </span>

              <div className="relative flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Featured Work
                </h2>
                <Link href="/portfolio/" className="text-sm font-medium text-body hover:text-ink">
                  View all portfolio work
                </Link>
              </div>

              <div className="relative mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <Reveal key={project.slug} delay={Math.min(index * 80, 320)}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
              <Link
                href="/contact/"
                aria-label="Get in touch"
                className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-paper shadow-lg transition-transform hover:scale-110 sm:right-10 sm:top-10 sm:h-16 sm:w-16"
              >
                <ArrowIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>

              <h2 className="text-2xl font-bold tracking-tight text-paper sm:text-3xl">
                Let&apos;s work together
              </h2>
              <p className="mx-auto mt-2 max-w-md text-paper/70">
                Available for freelance graphic design work in branding, packaging, and print.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 text-sm font-semibold text-paper hover:bg-accent-dark"
                >
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-11 items-center rounded-md border border-paper/30 px-6 text-sm font-semibold text-paper hover:border-paper"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
