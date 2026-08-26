import Link from "next/link";
import { breadcrumbListSchema, type Crumb } from "@/lib/schema";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema(items)) }}
      />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-6 pt-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span aria-current="page" className="text-ink">
                    {item.name}
                  </span>
                ) : (
                  <Link href={new URL(item.url).pathname} className="hover:text-ink">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
