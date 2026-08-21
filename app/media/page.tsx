import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { IconMail, IconCheck, IconArrow, IconExternal } from "@/components/Icons";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Press kit e materiali per la stampa",
  description:
    "Bio ufficiali, foto, loghi e argomenti su cui Florin Andriciuc interviene. Materiali pronti per giornalisti, podcast, eventi e organizzatori.",
  alternates: { canonical: "/media" },
};

// Argomenti su cui interviene: sono anche i temi su cui vuole essere citato.
const topics = [
  {
    title: "Digitalizzazione dell'impresa edile",
    text: "Perché le imprese edili italiane restano indietro, cosa serve davvero e cosa è solo tecnologia venduta bene.",
  },
  {
    title: "AI applicata al cantiere",
    text: "Cosa funziona già oggi nell'impresa edile, cosa è fuffa da fiera, e come capire se uno strumento serve davvero.",
  },
  {
    title: "Controllo di gestione in edilizia",
    text: "Perché il fatturato è vanità, come si perde il margine di commessa e cosa guarda un imprenditore che sa leggere i numeri.",
  },
  {
    title: "Da imprenditore edile a founder",
    text: "Il percorso da chi vive il cantiere a chi costruisce software per il settore: cosa cambia e cosa resta uguale.",
  },
  {
    title: "Costruire un gruppo di brand verticali",
    text: "Perché sette marchi distinti invece di uno solo, cosa ha funzionato e cosa è costato più del previsto.",
  },
  {
    title: "Vendita e acquisizione clienti nell'edilizia",
    text: "Come cambia il modo di trovare e chiudere clienti per un'impresa che non vuole più dipendere dal passaparola.",
  },
];

export default function MediaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Press kit", url: `${site.domain}/media` },
        ])}
      />

      <PageHero
        eyebrow="Press kit"
        crumb="Press kit"
        path="/media"
        cta={false}
        title={<>Materiali per la <span className="text-gradient">stampa</span></>}
        intro="Bio ufficiali, foto, loghi e argomenti su cui intervengo. Prendi quello che ti serve: è tutto pronto per essere usato, senza chiedere il permesso."
      />

      {/* BIO CANONICHE */}
      <section className="container-fa py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Bio ufficiali</span>
          <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">Tre lunghezze, già pronte</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Usa queste versioni così come sono: sono quelle ufficiali, identiche ovunque.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          <Reveal>
            <article className="rounded-2xl border border-line bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">Bio breve — una riga</p>
              <p className="mt-3 text-lg leading-relaxed text-navy-900">{site.bio.oneLine}</p>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="rounded-2xl border border-line bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">Bio media — tre righe</p>
              <p className="mt-3 text-lg leading-relaxed text-navy-900">{site.bio.short}</p>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className="rounded-2xl border border-line bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">Frase di posizionamento</p>
              <p className="mt-3 font-serif text-xl italic leading-relaxed text-navy-900">{site.bio.positioning}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* FOTO E LOGHI */}
      <section className="bg-bg-soft py-16 sm:py-24">
        <div className="container-fa">
          <div className="max-w-2xl">
            <span className="eyebrow">Foto e loghi</span>
            <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">Materiali visivi</h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <Portrait className="shadow-card" />
              <p className="mt-3 text-sm text-muted">
                Ritratto ufficiale.{" "}
                <a href="/florin.jpg" download className="font-semibold text-brand-600 link-u">
                  Scarica la foto
                </a>
              </p>
            </div>

            <div>
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Logo personale</p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Logo Florin Andriciuc" className="h-12 w-auto" />
                  <a href="/logo.png" download className="text-sm font-semibold text-brand-600 link-u">Scarica versione scura</a>
                  <a href="/logo-light.png" download className="text-sm font-semibold text-brand-600 link-u">Scarica versione chiara</a>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-line bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Loghi dei brand</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {projects.map((p) => (
                    <a
                      key={p.slug}
                      href={`/brands/${p.slug}.png`}
                      download
                      className="flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-sm font-semibold text-navy-900 transition hover:border-brand-400 hover:text-brand-700"
                    >
                      {p.name}
                      <IconArrow className="h-4 w-4 text-accent-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARGOMENTI */}
      <section className="container-fa py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Interventi</span>
          <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">Argomenti su cui intervengo</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Podcast, interviste, tavole rotonde, formazione. Questi sono i temi su cui ho qualcosa
            di concreto da dire, perché li ho vissuti.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 80}>
              <div className="card-lift h-full rounded-2xl border border-line bg-white p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-100 text-accent-600">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{t.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FATTI + CONTATTO */}
      <section className="bg-bg-soft py-16 sm:py-24">
        <div className="container-fa grid gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">In breve</span>
            <h2 className="mt-3 text-[2rem] font-bold leading-tight">I fatti essenziali</h2>
            <dl className="mt-6 grid gap-3">
              {[
                ["Nome", site.name],
                ["Ruolo", "Founder & CEO di AEDIX"],
                ["Settore", "Software e servizi per le imprese edili"],
                ["Brand", "AEDIX, EdiliziaInCloud, Marketing Edile, Vendita Edile, Numeri in Edilizia, Imprenditore Edile, edilizia.io"],
                ["Sede", "Italia"],
                ["Lingua", "Italiano"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 rounded-xl border border-line bg-white px-4 py-3 sm:flex-row sm:gap-4">
                  <dt className="w-32 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted">{k}</dt>
                  <dd className="text-sm font-medium text-navy-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <span className="eyebrow">Contatto stampa</span>
            <h2 className="mt-3 text-[2rem] font-bold leading-tight">Scrivimi direttamente</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Per interviste, ospitate o richieste di materiali: rispondo io, non un ufficio stampa.
            </p>
            <a href={`mailto:${site.email}`} className="card-lift mt-6 flex items-center gap-3 rounded-2xl border border-line bg-white p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-100 text-accent-600">
                <IconMail className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
                <p className="font-display font-bold text-navy-900 break-all">{site.email}</p>
              </div>
            </a>

            <div className="mt-5 rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Profili ufficiali</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {[
                  ["LinkedIn", site.social.linkedin],
                  ["Instagram", site.social.instagram],
                  ["YouTube", site.social.youtube],
                  ["Talk su TED.com", site.externalProfiles.tedTalk],
                ]
                  .filter(([, url]) => url.startsWith("http"))
                  .map(([label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy-900 transition hover:border-brand-400 hover:text-brand-700"
                    >
                      {label}
                      <IconExternal className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-muted">
              Vuoi sapere di più prima di scrivermi? Leggi <Link href="/chi-sono" className="font-semibold text-brand-600 link-u">la mia storia</Link>{" "}
              o guarda <Link href="/ecosistema" className="font-semibold text-brand-600 link-u">l&apos;ecosistema</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
