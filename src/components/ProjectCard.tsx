import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/content";

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  const cover = project.images[0];

  return (
    <Link
      href={`/portfolio/${project.slug}/`}
      className="group block overflow-hidden rounded-lg border border-line bg-paper transition-colors hover:border-ink"
    >
      {cover && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">{project.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-ink group-hover:underline">{project.title}</h3>
      </div>
    </Link>
  );
}
