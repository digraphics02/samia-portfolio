"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Tone = "dark" | "light" | "accent";

const toneClasses: Record<Tone, string> = {
  dark: "bg-ink text-paper",
  light: "border border-line bg-paper text-ink",
  accent: "bg-accent text-paper",
};

export default function ContactChip({
  href,
  external,
  rotate,
  tone = "light",
  delay = 0,
  floatOffset = 0,
  children,
}: {
  href: string;
  external?: boolean;
  rotate: number;
  tone?: Tone;
  delay?: number;
  floatOffset?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-in={visible}
      style={
        {
          "--rotate": `${rotate}deg`,
          "--float-duration": `${3 + (floatOffset % 3) * 0.5}s`,
          "--float-delay": `${floatOffset * 0.25}s`,
          transitionDelay: visible ? `${delay}ms` : "0ms",
        } as CSSProperties
      }
      className={`chip inline-flex items-center gap-3 rounded-full px-5 py-3.5 shadow-sm hover:shadow-lg sm:px-6 sm:py-4 ${toneClasses[tone]}`}
    >
      {children}
    </a>
  );
}
