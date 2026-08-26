import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Page not found</h1>
      <p className="mt-4 text-lg text-body">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 text-sm font-semibold text-paper hover:bg-accent-dark"
        >
          Go home
        </Link>
        <Link
          href="/portfolio/"
          className="inline-flex min-h-11 items-center rounded-md border border-line px-6 text-sm font-semibold text-ink hover:border-accent"
        >
          View portfolio
        </Link>
        <Link
          href="/contact/"
          className="inline-flex min-h-11 items-center rounded-md border border-line px-6 text-sm font-semibold text-ink hover:border-accent"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
