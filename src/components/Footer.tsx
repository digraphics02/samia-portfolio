import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-3 sm:py-12">
        <div className="col-span-2 sm:col-span-1">
          <p className="text-base font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.tagline}</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.location}</p>
          <SocialLinks className="mt-4" />
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-ink">Site</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-ink">Contact</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={siteConfig.phoneHref} className="text-sm text-muted hover:text-ink">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted hover:text-ink break-all"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
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
