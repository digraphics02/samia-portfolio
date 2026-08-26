import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { education, experience, expertise, extraCurricular, skills } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";

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

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", url: siteConfig.url }, { name: "About", url }]} />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-ink">About</h1>
        <p className="mt-4 max-w-2xl text-lg text-body">
          {siteConfig.name} is a {siteConfig.tagline} based in {siteConfig.location}.
        </p>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-ink">Experience</h2>
          <div className="mt-6 space-y-10">
            {experience.map((job) => (
              <div key={`${job.company}-${job.period}`}>
                <h3 className="text-lg font-semibold text-ink">
                  {job.role} · {job.company}
                </h3>
                <p className="text-sm text-muted">
                  {job.period}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-body">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-ink">Education</h2>
          <div className="mt-6 space-y-6">
            {education.map((item) => (
              <div key={item.school}>
                <h3 className="text-lg font-semibold text-ink">{item.degree}</h3>
                <p className="text-sm text-muted">
                  {item.school} · {item.period}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-ink">Expertise</h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {expertise.map((item) => (
              <li key={item} className="rounded-md border border-line px-4 py-3 text-sm text-body">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">Skills &amp; Tools</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {skills.map((item) => (
              <li key={item} className="rounded-full border border-line px-4 py-2 text-sm text-body">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">Extra Curricular</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {extraCurricular.map((item) => (
              <li key={item} className="rounded-full border border-line px-4 py-2 text-sm text-body">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
