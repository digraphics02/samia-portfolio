import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import ContactChip from "@/components/ContactChip";
import { ArrowIcon, BehanceIcon, LinkedInIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

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

const chips = [
  {
    label: "Call",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    Icon: PhoneIcon,
    external: false,
    tone: "dark",
    rotate: -6,
  },
  {
    label: "WhatsApp",
    value: siteConfig.phone,
    href: siteConfig.whatsappHref,
    Icon: WhatsAppIcon,
    external: true,
    tone: "accent",
    rotate: 4,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: MailIcon,
    external: false,
    tone: "light",
    rotate: -3,
  },
  {
    label: "Behance",
    value: "behance.net/samiarafiq",
    href: siteConfig.social.behance,
    Icon: BehanceIcon,
    external: true,
    tone: "dark",
    rotate: 5,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/samia-rafique",
    href: siteConfig.social.linkedin,
    Icon: LinkedInIcon,
    external: true,
    tone: "light",
    rotate: -4,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", url: siteConfig.url }, { name: "Contact", url }]} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium uppercase tracking-wide text-body">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for Freelance
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            Got a project in mind?
            <br className="hidden sm:block" />
            <span className="text-accent">Let&apos;s talk.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-body">
            Available for freelance graphic design work in branding, packaging, and print. Based in{" "}
            {siteConfig.location}.
          </p>
        </Reveal>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-surface px-6 py-16 sm:px-12 sm:py-20">
          <Reveal delay={420} className="absolute right-6 top-6 sm:right-10 sm:top-10">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-transform hover:scale-110 hover:bg-ink-hover sm:h-16 sm:w-16"
            >
              <ArrowIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </Reveal>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            {chips.map(({ label, value, href, Icon, external, tone, rotate }, index) => (
              <ContactChip
                key={label}
                href={href}
                external={external}
                tone={tone}
                rotate={rotate}
                delay={index * 90}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="text-left">
                  <span className="block text-[11px] font-medium uppercase tracking-wide opacity-70">
                    {label}
                  </span>
                  <span className="block text-sm font-bold sm:text-base">{value}</span>
                </span>
              </ContactChip>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
