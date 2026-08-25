import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-neutral-900">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-neutral-600">{siteConfig.tagline}</p>
          <p className="mt-1 text-sm text-neutral-600">{siteConfig.location}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-neutral-900">Site</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-neutral-600 hover:text-neutral-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-neutral-900">Contact</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={siteConfig.phoneHref} className="text-sm text-neutral-600 hover:text-neutral-900">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-neutral-600 hover:text-neutral-900">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 px-6 py-4">
        <p className="mx-auto max-w-5xl text-xs text-neutral-500">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
