import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { portfolioProjects } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = `${siteConfig.url}portfolio/${project.slug}/`;
  const title = `${project.title} | Samia Rafique, Graphic Designer`;
  const description = `${project.category} project by Samia Rafique, Graphic Designer based in Lahore, Pakistan. View the full case study on Behance.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
    },
  };
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const url = `${siteConfig.url}portfolio/${project.slug}/`;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Portfolio", url: `${siteConfig.url}portfolio/` },
          { name: project.title, url },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">{project.category}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900">{project.title}</h1>

        <a
          href={project.behanceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-neutral-900 px-6 text-sm font-semibold text-white hover:bg-neutral-700"
        >
          View full case study on Behance
        </a>
      </section>
    </>
  );
}
