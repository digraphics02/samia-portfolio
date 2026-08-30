import { AdobeIcon, AiSparkleIcon, CanvaIcon, MicrosoftOfficeIcon } from "@/components/icons";

const TOOL_ICONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  "Adobe Creative Suite": AdobeIcon,
  "AI (Midjourney, Ideogram)": AiSparkleIcon,
  Canva: CanvaIcon,
  "Microsoft Office": MicrosoftOfficeIcon,
};

export default function ToolBadge({ label }: { label: string }) {
  const Icon = TOOL_ICONS[label];

  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper py-2 pl-2 pr-4 text-sm font-medium text-ink">
      {Icon ? <Icon className="h-6 w-6 shrink-0 rounded-md" /> : null}
      {label}
    </span>
  );
}
