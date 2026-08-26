import { siteConfig } from "@/lib/site-config";
import { BehanceIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

const links = [
  { href: siteConfig.whatsappHref, label: "Chat on WhatsApp", Icon: WhatsAppIcon, external: true },
  { href: `mailto:${siteConfig.email}`, label: "Email Samia Rafique", Icon: MailIcon, external: false },
  { href: siteConfig.social.behance, label: "Samia Rafique on Behance", Icon: BehanceIcon, external: true },
  { href: siteConfig.social.linkedin, label: "Samia Rafique on LinkedIn", Icon: LinkedInIcon, external: true },
] as const;

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon, external }) => (
        <li key={href}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:bg-accent hover:text-paper"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
