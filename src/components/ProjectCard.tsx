import Link from "next/link";
import type { PortfolioProject } from "@/lib/content";

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/portfolio/${project.slug}/`}
      className="group block rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-400"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{project.category}</p>
      <h3 className="mt-2 text-lg font-semibold text-neutral-900 group-hover:underline">{project.title}</h3>
    </Link>
  );
}
