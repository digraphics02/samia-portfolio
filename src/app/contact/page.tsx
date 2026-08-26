import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Breadcrumbs from "@/components/Breadcrumbs";
import SocialLinks from "@/components/SocialLinks";

const url = `${siteConfig.url}contact/`;

export const metadata: Metadata = {
  title: "Contact Samia Rafique | Graphic Designer, Lahore, Pakistan",
  description:
    "Get in touch with Samia Rafique, a Lahore-based Graphic Designer, for freelance branding, packaging, and print design work.",
  alternates: { canonical: url },
  openGraph: {
    title: "Contact Samia Rafique | Graphic Designer, Lahore, Pakistan",
    description:
      "Get in touch with Samia Rafique, a Lahore-based Graphic Designer, for freelance branding, packaging, and print design work.",
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", url: siteConfig.url }, { name: "Contact", url }]} />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-ink">Contact</h1>
        <p className="mt-4 text-lg text-body">
          Available for freelance graphic design work in branding, packaging, and print. Based in{" "}
          {siteConfig.location}.
        </p>

        <SocialLinks className="mt-6" />

        <dl className="mt-10 space-y-6">
          <div>
            <dt className="text-sm font-medium uppercase tracking-wide text-muted">Phone</dt>
            <dd className="mt-1">
              <a href={siteConfig.phoneHref} className="text-lg font-semibold text-ink hover:underline">
                {siteConfig.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium uppercase tracking-wide text-muted">WhatsApp</dt>
            <dd className="mt-1">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-ink hover:underline"
              >
                {siteConfig.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium uppercase tracking-wide text-muted">Email</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg font-semibold text-ink hover:underline"
              >
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium uppercase tracking-wide text-muted">Behance</dt>
            <dd className="mt-1">
              <a
                href={siteConfig.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-ink hover:underline"
              >
                behance.net/samiarafiq
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium uppercase tracking-wide text-muted">LinkedIn</dt>
            <dd className="mt-1">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-ink hover:underline"
              >
                linkedin.com/in/samia-rafique
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
