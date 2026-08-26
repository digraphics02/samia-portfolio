import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { BehanceIcon, LinkedInIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

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

const methods = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    Icon: PhoneIcon,
    external: false,
  },
  {
    label: "WhatsApp",
    value: siteConfig.phone,
    href: siteConfig.whatsappHref,
    Icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: "Behance",
    value: "behance.net/samiarafiq",
    href: siteConfig.social.behance,
    Icon: BehanceIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/samia-rafique",
    href: siteConfig.social.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", url: siteConfig.url }, { name: "Contact", url }]} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-surface px-8 py-10 sm:px-10 sm:py-12">
            <MailIcon className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 text-line" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium uppercase tracking-wide text-body">
                <span className="relative flex h-2 w-2">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for Freelance
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Let&apos;s talk.
              </h1>
              <p className="mt-4 max-w-sm text-lg text-body">
                Available for freelance graphic design work in branding, packaging, and print. Based
                in {siteConfig.location}.
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {methods.map(({ label, value, href, Icon, external }, index) => (
              <li key={label} className={index === methods.length - 1 ? "sm:col-span-2" : undefined}>
                <Reveal delay={Math.min(index * 80, 320)}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-paper p-5 text-center transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                        {label}
                      </span>
                      <span className="mt-0.5 block break-all text-sm font-semibold text-ink sm:text-base">
                        {value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
