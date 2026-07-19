import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "./JsonLd";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  path,
  cta = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  crumb: string;
  path?: string;
  cta?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-soft">
      {path && (
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", url: site.domain },
            { name: crumb, url: `${site.domain}${path}` },
          ])}
        />
      )}
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-brand-300/25 blur-3xl" />
      <div className="container-fa relative py-16 sm:py-24">
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-navy-900">{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-[2.4rem] sm:text-[3.4rem] font-extrabold leading-[1.04]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">{intro}</p>
        {cta && (
          <div className="mt-8">
            <Link href="/contatti" className="btn btn-primary">{site.cta.primaryLabel}</Link>
          </div>
        )}
      </div>
    </section>
  );
}
