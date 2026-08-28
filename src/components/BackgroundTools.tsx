type Badge = {
  label: string;
  shape: "square" | "circle";
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
  duration: number;
  delay: number;
};

// Faint, floating monograms for the software this work is made with —
// purely decorative, sits behind all page content. Anchored close to
// the true viewport edge (px offsets, not %) so they stay clear of the
// centered content column even at narrower "wide" viewports.
const BADGES: Badge[] = [
  { label: "Ai", shape: "square", top: "10%", left: "16px", size: 64, rotate: -8, duration: 5.4, delay: 0 },
  { label: "Ps", shape: "square", top: "66%", left: "12px", size: 56, rotate: 6, duration: 4.8, delay: 0.8 },
  { label: "C", shape: "circle", top: "18%", right: "16px", size: 54, rotate: 0, duration: 5.8, delay: 1.2 },
  { label: "GPT", shape: "circle", top: "50%", right: "12px", size: 60, rotate: 0, duration: 6.1, delay: 0.4 },
  { label: "✳", shape: "circle", top: "82%", right: "20px", size: 50, rotate: 0, duration: 5.1, delay: 1.6 },
  { label: "Ai", shape: "square", top: "92%", left: "24px", size: 44, rotate: 10, duration: 4.6, delay: 2.1 },
];

export default function BackgroundTools() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden xl:block">
      {BADGES.map((badge, index) => (
        <div
          key={index}
          className={`floaty absolute flex items-center justify-center border border-ink/10 bg-ink/[0.03] font-bold text-ink/15 ${
            badge.shape === "circle" ? "rounded-full" : "rounded-xl"
          }`}
          style={{
            top: badge.top,
            left: badge.left,
            right: badge.right,
            width: badge.size,
            height: badge.size,
            fontSize: badge.size * 0.3,
            transform: `rotate(${badge.rotate}deg)`,
            animationDuration: `${badge.duration}s`,
            animationDelay: `${badge.delay}s`,
          }}
        >
          {badge.label}
        </div>
      ))}
    </div>
  );
}
