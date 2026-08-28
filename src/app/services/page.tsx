import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import ServiceChip from "@/components/ServiceChip";

const url = `${siteConfig.url}services/`;

export const metadata: Metadata = {
  title: "Services | Samia Rafique, Graphic Designer",
  description:
    "Graphic design services from Samia Rafique: branding and packaging, print and signage, social and marketing graphics, photo editing, and AI-powered design tools.",
  alternates: { canonical: url },
  openGraph: {
    title: "Services | Samia Rafique, Graphic Designer",
    description:
      "Graphic design services from Samia Rafique: branding and packaging, print and signage, social and marketing graphics, photo editing, and AI-powered design tools.",
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

const TONES = ["dark", "accent", "light"] as const;
const ROTATIONS = [-6, 4, -3, 5, -4, 6, -5, 3];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", url: siteConfig.url }, { name: "Services", url }]} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium uppercase tracking-wide text-body">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            What I offer
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            Design services,
            <br className="hidden sm:block" />
            <span className="text-accent">start to finish.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-body">
            Graphic design across branding, print, digital, and photo retouching — from concept
            to production-ready artwork.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex min-h-11 items-center rounded-md bg-ink px-6 text-sm font-semibold text-paper hover:bg-ink-hover"
          >
            Get in touch
          </Link>
        </Reveal>

        <div className="mt-14 space-y-8">
          {serviceCategories.map((category, categoryIndex) => (
            <Reveal key={category.name} delay={Math.min(categoryIndex * 90, 360)}>
              <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-12 sm:px-10 sm:py-14">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-8 select-none text-[8rem] font-bold leading-none text-ink/5 sm:text-[10rem]"
                >
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>

                <h2 className="relative text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {category.name}
                </h2>

                <div className="relative mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                  {category.items.map((item, itemIndex) => (
                    <ServiceChip
                      key={item}
                      label={item}
                      tone={TONES[itemIndex % TONES.length]}
                      rotate={ROTATIONS[itemIndex % ROTATIONS.length]}
                      delay={itemIndex * 80}
                      floatOffset={itemIndex}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
