import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";

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

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", url: siteConfig.url }, { name: "Services", url }]} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Services</h1>
            <p className="mt-4 max-w-md text-lg text-body">
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

          <div className="space-y-6">
            {serviceCategories.map((category, index) => (
              <Reveal key={category.name} delay={Math.min(index * 90, 360)}>
                <div className="rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-ink hover:bg-paper">
                  <h2 className="text-2xl font-bold tracking-tight text-ink">{category.name}</h2>
                  <ul className="mt-5 flex flex-wrap gap-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-body"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
