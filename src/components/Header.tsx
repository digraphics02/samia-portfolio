import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import MobileNavToggle from "@/components/MobileNavToggle";

export default function Header() {
  return (
    <header className="relative border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-neutral-900">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNavToggle />
      </div>
    </header>
  );
}
