"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site-config";

export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-ink"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          )}
        </svg>
      </button>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="absolute inset-x-0 top-full border-b border-line bg-paper px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-11 py-2 text-base font-medium text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
