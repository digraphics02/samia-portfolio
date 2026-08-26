import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import MobileNavToggle from "@/components/MobileNavToggle";

export default function Header() {
  return (
    <header className="relative border-b border-line bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-body transition-colors hover:text-ink"
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
