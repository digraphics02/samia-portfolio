"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Tone = "dark" | "light" | "accent";

const toneClasses: Record<Tone, string> = {
  dark: "bg-ink text-paper",
  light: "border border-line bg-paper text-ink",
  accent: "bg-accent text-paper",
};

export default function ServiceChip({
  label,
  tone = "light",
  rotate = 0,
  delay = 0,
  floatOffset = 0,
}: {
  label: string;
  tone?: Tone;
  rotate?: number;
  delay?: number;
  floatOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      data-in={visible}
      style={
        {
          "--rotate": `${rotate}deg`,
          "--float-duration": `${3 + (floatOffset % 3) * 0.5}s`,
          "--float-delay": `${floatOffset * 0.25}s`,
          transitionDelay: visible ? `${delay}ms` : "0ms",
        } as CSSProperties
      }
      className={`chip inline-flex items-center rounded-full px-4 py-2.5 text-sm font-medium shadow-sm hover:shadow-lg sm:px-5 sm:py-3 ${toneClasses[tone]}`}
    >
      {label}
    </div>
  );
}
