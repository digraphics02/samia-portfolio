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
// purely decorative, sits behind all page content.
const BADGES: Badge[] = [
  { label: "Ai", shape: "square", top: "8%", left: "3%", size: 60, rotate: -8, duration: 5.4, delay: 0 },
  { label: "Ps", shape: "square", top: "62%", left: "2%", size: 54, rotate: 6, duration: 4.8, delay: 0.8 },
  { label: "C", shape: "circle", top: "16%", right: "4%", size: 50, rotate: 0, duration: 5.8, delay: 1.2 },
  { label: "GPT", shape: "circle", top: "48%", right: "3%", size: 58, rotate: 0, duration: 6.1, delay: 0.4 },
  { label: "✳", shape: "circle", top: "80%", right: "5%", size: 46, rotate: 0, duration: 5.1, delay: 1.6 },
  { label: "Ai", shape: "square", top: "90%", left: "6%", size: 40, rotate: 10, duration: 4.6, delay: 2.1 },
];

export default function BackgroundTools() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden xl:block">
      {BADGES.map((badge, index) => (
        <div
          key={index}
          className={`floaty absolute flex items-center justify-center border border-ink/[0.06] font-bold text-ink/[0.06] ${
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
