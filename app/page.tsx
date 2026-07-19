import Link from "next/link";
import { site } from "@/lib/site";
import { projects, products, extraBrands } from "@/lib/projects";
import { articles } from "@/lib/articles";
import { Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";
import { SectionHeading, StatRow, CtaBand, FaqSection, ProcessSteps, Pill } from "@/components/ui";
import { JsonLd, ecosystemItemListSchema } from "@/components/JsonLd";
import { BrandLogo, hasBrandLogo } from "@/components/BrandLogo";
import {
  IconArrow, IconCheck, IconExternal, IconBuilding, IconMegaphone,
  IconHandshake, IconChart, IconQuote, IconUsers, IconGrid,
} from "@/components/Icons";

const accentMap = {
  brand: { chip: "bg-brand-100 text-brand-700", dot: "bg-brand-500", ring: "hover:border-brand-400" },
  accent: { chip: "bg-accent-100 text-accent-700", dot: "bg-accent-500", ring: "hover:border-accent-400" },
  gold: { chip: "bg-gold-100 text-gold-700", dot: "bg-gold-500", ring: "hover:border-gold-400" },
} as const;

const brandIcon = {
  "edilizia-in-cloud": IconBuilding,
  "marketing-edile": IconMegaphone,
  "vendita-edile": IconHandshake,
  "numeri-in-edilizia": IconChart,
  "imprenditore-edile": IconUsers,
  "aedix": IconGrid,
} as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={ecosystemItemListSchema()} />
      <Hero />
      <BrandMarquee />
      <Pains />
      <FounderNote />
      <Ecosystem />
      <Method />
      <Testimonials />
      <LatestArticles />
      <FaqSection items={homeFaq} />
      <CtaBand secondary={{ label: "Scopri l'ecosistema", href: "/ecosistema" }} />
      <div className="h-4" />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-soft">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-16 h-96 w-96 rounded-full bg-accent-200/50 blur-3xl pulse-glow" />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-brand-300/30 blur-3xl" />

      <div className="container-fa relative py-16 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Founder di EdiliziaInCloud · Ecosistema AEDIX</span>
            <h1 className="mt-5 text-[2.5rem] sm:text-[3.6rem] font-extrabold leading-[1.03]">
              La tua impresa edile può valere molto più di quanto <span className="text-gradient">incassi oggi</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
              Non ti manca il lavoro. Ti mancano gli strumenti giusti: per gestire i cantieri, trovare
              clienti, chiudere i preventivi e sapere quanto guadagni davvero. <span className="hl">Quelli te li do io</span> —
              fatti per il cantiere, non per l&apos;ufficio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contatti" className="btn btn-primary">
                {site.cta.primaryLabel}
                <IconArrow className="arrow h-4 w-4" />
              </Link>
              <Link href="/ecosistema" className="btn btn-ghost">Vedi come ti aiuto</Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2"><IconCheck className="h-4 w-4 text-accent-600" /> Pensati per chi è in cantiere</span>
              <span className="inline-flex items-center gap-2"><IconCheck className="h-4 w-4 text-accent-600" /> Nessuna fuffa da ufficio marketing</span>
            </div>
          </div>

          <Reveal className="relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-accent-500/25 via-transparent to-brand-500/25 blur-2xl" />
              <Portrait className="relative shadow-card" />

              {/* Badge fluttuante: ruolo */}
              <div className="floaty absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:-left-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 font-display text-sm font-extrabold text-white">FA</span>
                <div className="leading-tight">
                  <p className="font-display text-sm font-bold text-navy-900">Florin Andriciuc</p>
                  <p className="text-xs text-accent-600 font-semibold">Founder &amp; CEO · AEDIX</p>
                </div>
              </div>

              {/* Chip fluttuante: ecosistema */}
              <div className="floaty absolute -right-3 top-6 rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:-right-5" style={{ animationDelay: "1.5s" }}>
                <p className="stat-num text-2xl leading-none">6</p>
                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wide text-muted">brand · 1 missione</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <StatRow
            items={[
              { value: "4", label: "brand nell'ecosistema, un solo obiettivo" },
              { value: "1.000+*", label: "imprese edili raggiunte dai progetti" },
              { value: "10+*", label: "anni dentro il mondo dell'edilizia" },
              { value: "100%", label: "pensato per chi vive il cantiere" },
            ]}
          />
          <p className="mt-6 text-xs text-muted/70">* Dati indicativi — [DA CONFERMARE] con i numeri reali.</p>
        </div>
      </div>
    </section>
  );
}


/* ---------------- MARQUEE ---------------- */
function BrandMarquee() {
  const items = ["Costruzioni", "Ristrutturazioni", "Serramenti", "Impianti", "Carpenteria", "Opere specialistiche", "General contractor"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-line bg-white py-7 overflow-hidden">
      <p className="container-fa text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">
        Un ecosistema pensato per ogni impresa edile
      </p>
      <div className="mt-5 relative">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="marquee-track whitespace-nowrap">
          {row.map((c, i) => (
            <span key={i} className="font-display text-lg font-semibold text-navy-900/30">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- PAINS ---------------- */
const pains = [
  {
    icon: IconBuilding,
    problem: "«Gestisco tutto tra Excel, WhatsApp e la testa»",
    solution: "Un gestionale unico dove preventivi, commesse, cantieri e fatture parlano tra loro.",
    accent: "brand" as const,
  },
  {
    icon: IconMegaphone,
    problem: "«I clienti arrivano solo col passaparola, quando arrivano»",
    solution: "Un sistema di marketing che porta richieste reali di chi vuole ristrutturare o costruire.",
    accent: "accent" as const,
  },
  {
    icon: IconHandshake,
    problem: "«Faccio preventivi tutto il giorno ma ne chiudo pochi»",
    solution: "Un metodo di vendita per presentare il preventivo e chiudere senza svendere.",
    accent: "gold" as const,
  },
  {
    icon: IconChart,
    problem: "«Fatturo tanto ma a fine anno non mi resta niente»",
    solution: "Il controllo di gestione che ti dice, prima di firmare, se su quel lavoro ci guadagni.",
    accent: "brand" as const,
  },
];

function Pains() {
  return (
    <section className="container-fa py-20 sm:py-28">
      <SectionHeading
        eyebrow="Se ti riconosci, sei nel posto giusto"
        title={<>I 4 problemi che fermano <span className="text-gradient">ogni impresa edile</span></>}
        intro="Riconosci la tua giornata in una di queste frasi? Bene. Per ognuna c'è una soluzione precisa, non un discorso generico."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {pains.map((p, i) => {
          const a = accentMap[p.accent];
          return (
            <Reveal key={i} delay={i * 90}>
              <div className={`card-lift h-full rounded-2xl border border-line bg-white p-6 sm:p-7 ${a.ring}`}>
                <div className="flex items-start gap-4">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${a.chip}`}>
                    <p.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold leading-snug text-navy-900">{p.problem}</p>
                    <p className="mt-2.5 flex gap-2 text-muted leading-relaxed">
                      <IconArrow className="mt-1.5 h-4 w-4 shrink-0 text-accent-600" />
                      <span>{p.solution}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- FOUNDER NOTE ---------------- */
function FounderNote() {
  return (
    <section className="bg-bg-soft py-20 sm:py-28">
      <div className="container-fa">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/20 to-accent-500/20 blur-2xl" />
              <Portrait className="relative shadow-card" />
              <div className="absolute -bottom-4 right-4 rounded-2xl border border-line bg-white px-4 py-2.5 shadow-card">
                <p className="font-serif text-lg italic text-navy-900">Florin</p>
              </div>
            </div>
          </Reveal>

          <div>
            <span className="eyebrow">Perché lo faccio</span>
            <blockquote className="mt-5 font-serif text-[1.6rem] sm:text-[2rem] italic leading-[1.25] text-navy-900">
              &ldquo;Non ho letto i problemi dell&apos;impresa edile su un libro. Li ho vissuti. Per questo gli
              strumenti che costruisco parlano la lingua del cantiere.&rdquo;
            </blockquote>
            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
              Preventivi fatti di notte, margini che sparivano, clienti solo col passaparola: la tua
              giornata, probabilmente. È la stessa che ho vissuto io. Per questo gli strumenti che trovi
              qui risolvono problemi veri — non quelli inventati da un&apos;agenzia.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/chi-sono" className="btn btn-dark">La mia storia<IconArrow className="arrow h-4 w-4" /></Link>
              <Link href="/ecosistema" className="btn btn-ghost">Cosa ho costruito</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ECOSYSTEM ---------------- */
function Ecosystem() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="container-fa relative">
        <SectionHeading
          tone="dark"
          eyebrow="L'ecosistema AEDIX"
          title={<>Quattro leve. Un gruppo. <span className="text-gold-400">Una missione.</span></>}
          intro="Ogni brand risolve un pezzo del puzzle dell'impresa edile. Sotto AEDIX, la casa madre, lavorano insieme per farla crescere davvero."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {products.map((p, i) => {
            const Icon = brandIcon[p.slug as keyof typeof brandIcon];
            const a = accentMap[p.accent];
            return (
              <Reveal key={p.slug} delay={i * 90}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${p.name} — ${p.tagline}`}
                  className={`group card-lift block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 ${p.featured ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">{p.kicker}</p>
                        {p.featured && <span className="rounded-full bg-accent-500 px-2 py-0.5 text-[0.65rem] font-bold uppercase text-white">In primo piano</span>}
                      </div>
                      {hasBrandLogo(p.slug) ? (
                        <>
                          <BrandLogo slug={p.slug} name={p.name} imgClass="h-7 sm:h-8" />
                          <h3 className="sr-only">{p.name}</h3>
                        </>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span className={`grid h-11 w-11 place-items-center rounded-xl ${a.chip}`}>
                            <Icon className="h-6 w-6" />
                          </span>
                          <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                        </div>
                      )}
                    </div>
                    <IconExternal className="h-5 w-5 text-brand-300 transition group-hover:text-white" />
                  </div>
                  <p className="mt-4 text-brand-100/85 leading-relaxed">{p.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-brand-100/75">
                        <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold text-white">
                    Visita {p.domain}
                    <IconArrow className="arrow h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Community · AI · Gruppo */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {extraBrands.map((p, i) => {
            const Icon = brandIcon[p.slug as keyof typeof brandIcon] ?? IconGrid;
            const a = accentMap[p.accent];
            return (
              <Reveal key={p.slug} delay={i * 90}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${p.name} — ${p.tagline}`}
                  className="group card-lift flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    {hasBrandLogo(p.slug) ? (
                      <BrandLogo slug={p.slug} name={p.name} imgClass="h-6" />
                    ) : (
                      <span className={`grid h-11 w-11 place-items-center rounded-xl ${a.chip}`}>
                        <Icon className="h-6 w-6" />
                      </span>
                    )}
                    <IconExternal className="h-5 w-5 shrink-0 text-brand-300 transition group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">{p.kicker}</p>
                    {!hasBrandLogo(p.slug) && <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>}
                    <h3 className="sr-only">{p.name}</h3>
                    <p className="mt-1 text-sm text-brand-100/75">{p.tagline}</p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- METHOD ---------------- */
function Method() {
  return (
    <section className="container-fa py-20 sm:py-28">
      <SectionHeading
        eyebrow="Come lavoriamo insieme"
        title="Non parti da un prodotto. Parti dal tuo problema."
        intro="Niente pacchetti a scatola chiusa. Si parte sempre dal punto che oggi ti costa di più — tempo, clienti o margine."
      />
      <div className="mt-12">
        <ProcessSteps
          steps={[
            { n: "01", title: "Mi dici dove sei bloccato", text: "Dove perdi tempo, dove sfugge il margine, perché i clienti non arrivano. Parliamo la lingua del cantiere, non quella dell'ufficio." },
            { n: "02", title: "Troviamo la leva giusta per te", text: "Gestione, marketing, vendita o numeri: capiamo insieme da dove ti conviene partire. Con onestà, anche se la risposta non è un mio prodotto." },
            { n: "03", title: "La mettiamo a terra sul tuo lavoro", text: "Attiviamo lo strumento che serve e lo facciamo girare sul modo in cui lavori tu. Non il contrario." },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  { quote: "Finalmente qualcuno che parla come noi in cantiere e non come un venditore di software.", name: "[DA CONFERMARE]", role: "Titolare impresa di costruzioni" },
  { quote: "Ho capito per la prima volta su quali lavori guadagnavo davvero. Cambia tutto.", name: "[DA CONFERMARE]", role: "Imprenditore edile" },
  { quote: "Le richieste hanno smesso di dipendere solo dal passaparola. Ora arrivano ogni settimana.", name: "[DA CONFERMARE]", role: "Serramentista" },
];

function Testimonials() {
  return (
    <section className="bg-bg-soft py-20 sm:py-28">
      <div className="container-fa">
        <SectionHeading
          eyebrow="Dicono di me"
          title="Le parole degli imprenditori edili"
          intro="Testimonianze da inserire con nome, cognome e impresa reali."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="card-lift h-full rounded-2xl border border-line bg-white p-6 sm:p-7">
                <IconQuote className="h-8 w-8 text-gold-500" />
                <blockquote className="mt-3 font-serif text-lg italic leading-snug text-navy-900">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-700">
                    {t.name.startsWith("[") ? "?" : t.name.charAt(0)}
                  </span>
                  <div className="leading-tight">
                    <p className="font-display text-sm font-bold text-navy-900">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LATEST ARTICLES ---------------- */
function LatestArticles() {
  const latest = articles.slice(0, 3);
  return (
    <section className="container-fa py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Dal blog"
          title="Idee dritte per l'impresa edile"
          intro="Zero fuffa. Solo cose che, da imprenditore, avrei voluto sapere prima."
        />
        <Link href="/blog" className="btn btn-ghost">Tutti gli articoli<IconArrow className="arrow h-4 w-4" /></Link>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {latest.map((a, i) => (
          <Reveal key={a.slug} delay={i * 90}>
            <Link href={`/blog/${a.slug}`} className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-white p-6 hover:border-brand-400">
              <div className="flex items-center gap-2 text-xs">
                <Pill>{a.category}</Pill>
                <span className="text-muted">{a.readingTime}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy-900 group-hover:text-brand-700">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{a.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-accent-600">
                Leggi <IconArrow className="arrow h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const homeFaq = [
  {
    q: "Chi è Florin Andriciuc?",
    a: "Florin Andriciuc è un imprenditore italiano, founder e CEO del gruppo AEDIX (aedix.it). Ha costruito un ecosistema di software e servizi per le imprese edili — EdiliziaInCloud, Marketing Edile, Vendita Edile e Numeri in Edilizia, con la community Imprenditore Edile — partendo dai problemi reali del cantiere, non dalla teoria.",
  },
  {
    q: "Cos'è l'ecosistema AEDIX?",
    a: "AEDIX è la casa madre che riunisce i brand fondati da Florin Andriciuc per l'impresa edile: il gestionale EdiliziaInCloud, Marketing Edile per l'acquisizione clienti, Vendita Edile per la chiusura, Numeri in Edilizia per il controllo di gestione e la community Imprenditore Edile.",
  },
  {
    q: "Ti occupi solo di software?",
    a: "No. Il software (EdiliziaInCloud) è il cuore, ma intorno c'è tutto ciò che serve a un'impresa edile per crescere: trovare clienti (Marketing Edile), venderli bene (Vendita Edile) e capire i propri numeri (Numeri in Edilizia).",
  },
  {
    q: "Lavori con imprese di ogni dimensione?",
    a: "Il focus è l'impresa edile italiana: dall'artigiano strutturato alla società di costruzioni. Se costruisci, ristrutturi o installi, gli strumenti sono pensati per te.",
  },
  {
    q: "Come iniziamo a lavorare insieme?",
    a: "Scrivimi dalla pagina contatti e raccontami dove sei bloccato. Ti rispondo io e capiamo insieme da quale leva partire, senza impegno.",
  },
];
