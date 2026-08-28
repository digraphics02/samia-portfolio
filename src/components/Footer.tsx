import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-5xl px-6 pt-10 sm:pt-12">
        <div className="flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-center sm:justify-between sm:pb-10">
          <p className="text-lg font-semibold text-ink">
            Open for <span className="text-accent">freelance design work.</span>
          </p>
          <Link
            href="/contact/"
            className="inline-flex min-h-11 w-fit items-center rounded-md bg-ink px-6 text-sm font-semibold text-paper hover:bg-ink-hover"
          >
            Get in touch
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 py-10 sm:grid-cols-[1.3fr_1fr_1fr] sm:gap-8 sm:py-12">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-base font-semibold text-ink">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted">{siteConfig.tagline}</p>
            <p className="mt-1 text-sm text-muted">{siteConfig.location}</p>
            <SocialLinks className="mt-4" />
          </div>

          <nav aria-label="Footer" className="sm:border-l sm:border-line sm:pl-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Site</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-body hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:border-l sm:border-line sm:pl-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Contact</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={siteConfig.phoneHref} className="text-sm text-body hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-sm text-body hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-6 py-4">
        <p className="mx-auto max-w-5xl text-xs text-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
