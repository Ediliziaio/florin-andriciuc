import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/ui";
import { JsonLd, breadcrumbSchema, ecosystemItemListSchema } from "@/components/JsonLd";
import { IconExternal, IconBuilding, IconMegaphone, IconHandshake, IconChart, IconCheck, IconUsers, IconGrid } from "@/components/Icons";
import { Flywheel } from "@/components/Flywheel";
import { VerticalTabs } from "@/components/ui/vertical-tabs";
import { extraBrands } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ecosistema",
  description:
    "L'ecosistema di Florin Andriciuc per l'impresa edile: EdiliziaInCloud (gestionale), Marketing Edile, Vendita Edile e Numeri in Edilizia. Quattro leve, una crescita.",
  alternates: { canonical: "/ecosistema" },
};

const accentMap = {
  brand: { chip: "bg-brand-100 text-brand-700", dot: "bg-brand-500", bar: "from-brand-500 to-brand-700", ring: "hover:border-brand-400" },
  accent: { chip: "bg-accent-100 text-accent-700", dot: "bg-accent-500", bar: "from-accent-400 to-accent-600", ring: "hover:border-accent-400" },
  gold: { chip: "bg-gold-100 text-gold-700", dot: "bg-gold-500", bar: "from-gold-400 to-gold-600", ring: "hover:border-gold-400" },
} as const;

const brandIcon = {
  "edilizia-in-cloud": IconBuilding,
  "marketing-edile": IconMegaphone,
  "vendita-edile": IconHandshake,
  "numeri-in-edilizia": IconChart,
  "imprenditore-edile": IconUsers,
  "aedix": IconGrid,
} as const;

const groupLabel: Record<string, string> = {
  prodotto: "Le 4 leve — i prodotti",
  community: "La community",
  gruppo: "Il gruppo",
};

export default function EcosistemaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.domain },
            { name: "Ecosistema", url: `${site.domain}/ecosistema` },
          ]),
          ecosystemItemListSchema(),
        ]}
      />
      <PageHero
        eyebrow="L'ecosistema AEDIX"
        crumb="Ecosistema"
        title={<>Tutto quello che ti serve per far crescere l&apos;<span className="text-gradient">impresa edile</span>. In un posto solo.</>}
        intro="Quattro leve — trovare clienti, chiuderli, gestire i cantieri e sapere quanto guadagni — più la community e il gruppo che le tiene insieme. Sei brand nati dai tuoi stessi problemi, fatti per lavorare come uno."
      />

      {/* Le 4 leve — showcase interattivo (tab verticali + auto-play) */}
      <section className="container-fa py-20 sm:py-28">
        <VerticalTabs />

        {/* Community + Gruppo */}
        <div className="mt-20 border-t border-line pt-16">
          <div className="mb-10">
            <span className="eyebrow">Oltre le 4 leve</span>
            <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">La community e la casa madre</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {extraBrands.map((p, i) => {
              const Icon = brandIcon[p.slug as keyof typeof brandIcon];
              const a = accentMap[p.accent];
              return (
                <Reveal key={p.slug} delay={i * 80}>
                  <article className={`group card-lift flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white ${a.ring}`}>
                    <div className={`h-1.5 w-full bg-gradient-to-r ${a.bar}`} />
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <div className="flex items-center gap-3">
                        <span className={`grid h-12 w-12 place-items-center rounded-xl ${a.chip}`}>
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">{p.kicker}</span>
                            {p.slug === "aedix" && <span className="rounded-full bg-gold-500 px-2 py-0.5 text-[0.65rem] font-bold uppercase text-white">La casa madre</span>}
                          </div>
                          <h3 className="font-display text-xl font-bold text-navy-900">{p.name}</h3>
                          <p className="text-sm font-medium text-muted">{p.domain}</p>
                        </div>
                      </div>
                      <p className="mt-4 font-medium text-navy-800">{p.tagline}</p>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
                      <ul className="mt-4 grid gap-2">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-navy-800">
                            <span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${a.chip}`}>
                              <IconCheck className="h-3 w-3" />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 font-display text-sm font-bold text-accent-600">
                        Visita {p.domain}
                        <IconExternal className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Come si incastrano — schema animato (il volano) */}
      <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
        <div aria-hidden className="aurora pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div aria-hidden className="aurora pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" style={{ animationDelay: "6s" }} />
        <div className="container-fa relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow eyebrow-light justify-center">Non sei app separate. È un volano.</span>
            <h2 className="mt-4 text-white text-[2rem] sm:text-[2.6rem] font-bold leading-tight">
              Un cliente entra da una parte. <span className="text-gold-400">Dall&apos;altra esce l&apos;utile.</span>
            </h2>
            <p className="mx-auto mt-5 text-lg text-brand-100/85 leading-relaxed">
              Ogni pezzo passa la palla al successivo, e il giro ricomincia più forte. Più cantieri gestisci
              bene, più margine hai da reinvestire per trovarne altri. Questo è il volano.
            </p>
          </div>

          <Reveal className="mt-14">
            <Flywheel />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "1 · Trovi", v: "Marketing Edile ti porta richieste vere, non curiosi." },
              { k: "2 · Chiudi", v: "Vendita Edile ti fa firmare senza svendere." },
              { k: "3 · Gestisci", v: "EdiliziaInCloud tiene commessa, costi e fatture in ordine." },
              { k: "4 · Guadagni", v: "Numeri in Edilizia ti dice quanto ti resta davvero." },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-display text-sm font-bold text-gold-400">{s.k}</p>
                  <p className="mt-1.5 text-sm text-brand-100/80 leading-relaxed">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 sm:pt-28">
        <CtaBand
          title="Non sai da quale partire?"
          text="Normale: dipende da dove sei bloccato adesso. Scrivimi e ti dico io qual è la prima leva da tirare."
          secondary={{ label: "Leggi il blog", href: "/blog" }}
        />
      </div>
      <div className="h-4" />
    </>
  );
}
