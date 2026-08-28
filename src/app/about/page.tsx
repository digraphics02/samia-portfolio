import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { education, experience, expertise, extraCurricular, skills } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import ServiceChip from "@/components/ServiceChip";

const url = `${siteConfig.url}about/`;

export const metadata: Metadata = {
  title: "About Samia Rafique | Graphic Designer, Lahore, Pakistan",
  description:
    "Education, experience, and skills of Samia Rafique, a Lahore-based Graphic Designer specializing in branding, packaging, and print media design.",
  alternates: { canonical: url },
  openGraph: {
    title: "About Samia Rafique | Graphic Designer, Lahore, Pakistan",
    description:
      "Education, experience, and skills of Samia Rafique, a Lahore-based Graphic Designer specializing in branding, packaging, and print media design.",
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "profile",
  },
};

const TONES = ["dark", "accent", "light"] as const;

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", url: siteConfig.url }, { name: "About", url }]} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium uppercase tracking-wide text-body">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            About
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            {siteConfig.name}
            <br className="hidden sm:block" />
            <span className="text-accent">{siteConfig.tagline}.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-body">
            Based in {siteConfig.location} — education, experience, and the skills behind the
            work.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex min-h-11 items-center rounded-md bg-ink px-6 text-sm font-semibold text-paper hover:bg-ink-hover"
          >
            Get in touch
          </Link>
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

              <h2 className="relative text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Experience
              </h2>

              <div className="relative mt-8 space-y-8">
                {experience.map((job, index) => (
                  <Reveal
                    key={`${job.company}-${job.period}`}
                    delay={Math.min(index * 90, 270)}
                    className={
                      index < experience.length - 1
                        ? "border-b border-line/70 pb-8"
                        : undefined
                    }
                  >
                    <h3 className="text-lg font-semibold text-ink">
                      {job.role} · {job.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {job.period}
                      {job.location ? (
                        <span className="text-muted"> · {job.location}</span>
                      ) : null}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
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

              <h2 className="relative text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Education
              </h2>

              <div className="relative mt-8 space-y-6">
                {education.map((item, index) => (
                  <Reveal
                    key={item.school}
                    delay={Math.min(index * 90, 180)}
                    className={
                      index < education.length - 1 ? "border-b border-line/70 pb-6" : undefined
                    }
                  >
                    <h3 className="text-lg font-semibold text-ink">{item.degree}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {item.period}
                      <span className="text-muted">
                        {" "}
                        · {item.school}
                        {item.location ? ` · ${item.location}` : ""}
                      </span>
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-12 sm:px-10 sm:py-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-8 select-none text-[8rem] font-bold leading-none text-ink/5 sm:text-[10rem]"
              >
                03
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
            </div>
          </Reveal>

          <Reveal delay={270}>
            <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-12 sm:px-10 sm:py-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-8 select-none text-[8rem] font-bold leading-none text-ink/5 sm:text-[10rem]"
              >
                04
              </span>

              <h2 className="relative text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Skills &amp; Tools
              </h2>

              <div className="relative mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                {skills.map((item, index) => (
                  <ServiceChip
                    key={item}
                    label={item}
                    tone={TONES[index % TONES.length]}
                    delay={index * 60}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-12 sm:px-10 sm:py-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-8 select-none text-[8rem] font-bold leading-none text-ink/5 sm:text-[10rem]"
              >
                05
              </span>

              <h2 className="relative text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Extra Curricular
              </h2>

              <div className="relative mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                {extraCurricular.map((item, index) => (
                  <ServiceChip
                    key={item}
                    label={item}
                    tone={TONES[index % TONES.length]}
                    delay={index * 60}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
