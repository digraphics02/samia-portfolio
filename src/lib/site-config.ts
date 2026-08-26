// Single source of truth for site-wide identity, contact info, and the
// one indexable flag that drives both robots.ts and layout robots metadata.
// Content here is sourced directly from the resume PDF and the profile
// links provided (Behance, LinkedIn) — nothing invented.

export const siteConfig = {
  name: "Samia Rafique",
  role: "Graphic Designer",
  tagline: "Graphic Designer & Print Specialist",
  url: "https://samiarafiq.com/",
  locale: "en_US",
  location: "Lahore, Pakistan",
  email: "Samiarafiq.21@gmail.com",
  phone: "+92-3109435687",
  phoneHref: "tel:+923109435687",
  whatsappHref: "https://wa.me/923109435687",
  social: {
    behance: "https://www.behance.net/samiarafiq",
    linkedin: "https://www.linkedin.com/in/samia-rafique",
  },
} as const;

// Gate indexing on production so preview/staging deploys default to noindex.
export const indexable = process.env.VERCEL_ENV === "production";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/contact/", label: "Contact" },
] as const;
