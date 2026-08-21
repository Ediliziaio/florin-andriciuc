import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, CtaBand, FaqSection } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { IconArrow, IconBuilding, IconMegaphone, IconHandshake, IconChart } from "@/components/Icons";
import { publishedArticles } from "@/lib/articles";
import { products } from "@/lib/projects";
import { site } from "@/lib/site";

// ISR: le liste di articoli per leva si aggiornano quando escono i programmati.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Metodo delle 4 leve per l'impresa edile",
  description:
    "Numeri, gestione, clienti e vendita: il metodo delle 4 leve di Florin Andriciuc per far crescere un'impresa edile. La guida completa, con da dove partire.",
  alternates: { canonical: "/metodo" },
  openGraph: {
    type: "website",
    title: "Il metodo delle 4 leve per l'impresa edile",
    description:
      "Numeri, gestione, clienti e vendita: il metodo per far crescere un'impresa edile, con l'ordine giusto e gli approfondimenti per ogni leva.",
    url: `${site.domain}/metodo`,
  },
};

// Le 4 leve del metodo: ognuna aggancia il brand dell'ecosistema e gli
// articoli del blog collegati (via relatedProject, solo quelli usciti).
const leve = [
  {
    slug: "numeri-in-edilizia",
    n: "01",
    nome: "I numeri",
    domanda: "Su ogni cantiere, ci guadagni o ci rimetti?",
    icon: IconChart,
    problema:
      "Fatturato alto e conto vuoto, prezzi copiati dai concorrenti, sconti decisi sul momento: senza margine di commessa, costi di struttura e punto di pareggio, ogni decisione è una scommessa.",
    segnali: [
      "Non sai quanto hai marginato sull'ultimo cantiere chiuso",
      "Il prezzo lo fai guardando cosa chiedono gli altri",
      "A fine anno lavori tanto ma resta poco",
    ],
  },
  {
    slug: "edilizia-in-cloud",
    n: "02",
    nome: "La gestione",
    domanda: "L'impresa sta in piedi anche senza di te?",
    icon: IconBuilding,
    problema:
      "Preventivi la sera su Excel, cantieri seguiti a memoria, extra mai fatturati: quando le informazioni vivono nella testa del titolare, il titolare è il collo di bottiglia dell'impresa.",
    segnali: [
      "Ogni domanda dell'ufficio o della squadra finisce a te",
      "Gli extra si fanno «già che ci siamo» e si dimenticano",
      "Una tua settimana di ferie è un rischio aziendale",
    ],
  },
  {
    slug: "marketing-edile",
    n: "03",
    nome: "I clienti",
    domanda: "Il flusso di richieste lo comandi tu?",
    icon: IconMegaphone,
    problema:
      "Il passaparola è un ottimo canale e una pessima strategia: non decidi quando arriva né che lavori porta. Un'impresa che vuole crescere ha bisogno di un canale suo, che si apre e si chiude come un rubinetto.",
    segnali: [
      "A gennaio il telefono tace, a maggio non sai dove sbattere la testa",
      "Gli ultimi cinque clienti sono arrivati tutti col passaparola",
      "Accetti qualsiasi lavoro perché «non si sa mai»",
    ],
  },
  {
    slug: "vendita-edile",
    n: "04",
    nome: "La vendita",
    domanda: "Quanti preventivi firmi, su dieci che fai?",
    icon: IconHandshake,
    problema:
      "Preventivi mandati per mail e mai richiamati, sconti per chiudere, trattative ridotte al numero finale: la vendita in edilizia è un processo — sopralluogo, presentazione, follow-up — non una speranza.",
    segnali: [
      "Fai tanti preventivi e ne firmi pochi",
      "Il cliente sparisce dopo aver ricevuto il preventivo",
      "L'unica leva che usi in trattativa è lo sconto",
    ],
  },
] as const;

const metodoFaq = [
  {
    q: "Cos'è il metodo delle 4 leve per l'impresa edile?",
    a: "È il metodo di Florin Andriciuc per far crescere un'impresa edile lavorando sui quattro punti dove le imprese perdono di più: i numeri (margini e costi), la gestione (sistema unico per preventivi, cantieri e fatture), i clienti (un canale di acquisizione controllabile) e la vendita (il processo che trasforma i preventivi in firme). Per ogni leva esiste uno strumento dedicato dell'ecosistema AEDIX.",
  },
  {
    q: "Da quale leva si parte?",
    a: "Dalla leva dove l'impresa perde di più, che si individua con quattro domande: conosci il margine dell'ultimo cantiere? L'impresa gira senza di te? Da dove arrivano gli ultimi clienti? Quanti preventivi firmi su dieci? Come regola generale: prima i numeri, poi la gestione, poi clienti e vendita — che moltiplicano quello che le prime due hanno sistemato.",
  },
  {
    q: "Serve attivare tutte e quattro le leve insieme?",
    a: "No, ed è sconsigliato: si parte dalla leva più urgente e si procede con ordine. Attivare il marketing con i margini in disordine, ad esempio, significa moltiplicare le perdite. Il metodo serve proprio a scegliere la sequenza giusta per la situazione specifica dell'impresa.",
  },
  {
    q: "Il metodo vale anche per una piccola impresa o un artigiano?",
    a: "Sì: le quattro leve valgono dall'artigiano strutturato alla società di costruzioni — cambiano gli strumenti e la scala, non la logica. Anzi, più l'impresa è piccola, più conta partire dalla leva giusta, perché tempo e budget non perdonano i tentativi a caso.",
  },
];

const brandBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

export default function MetodoPage() {
  const articles = publishedArticles();
  const articlesByLeva = (slug: string) => articles.filter((a) => a.relatedProject === slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Il metodo delle 4 leve per l'impresa edile",
          description:
            "Le quattro leve su cui lavora il metodo di Florin Andriciuc per far crescere le imprese edili: numeri, gestione, clienti, vendita.",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: leve.length,
          itemListElement: leve.map((l, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${l.nome} — ${l.domanda}`,
            url: `${site.domain}/ecosistema/${l.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Il metodo"
        crumb="Metodo"
        path="/metodo"
        title={<>Il metodo delle <span className="text-gradient">4 leve</span> per far crescere un&apos;impresa edile</>}
        intro="Un'impresa edile perde soldi in quattro posti: numeri, gestione, clienti e vendita. Il metodo delle 4 leve serve a capire dove stai perdendo di più e a sistemare le leve nell'ordine giusto — con uno strumento dedicato per ognuna."
      />

      {/* Answer block */}
      <section className="container-fa py-16 sm:py-24">
        <div className="prose-fa max-w-3xl">
          <p>
            Il metodo delle 4 leve è il modo in cui guardo ogni impresa edile — la mia di ieri e quelle
            con cui lavoro oggi. L&apos;idea è semplice: <strong>la crescita non è prendere più lavoro, è smettere
            di perdere dove stai già perdendo</strong>. E le perdite di un&apos;impresa edile si concentrano sempre
            negli stessi quattro punti. Ognuno ha i suoi sintomi, il suo ordine di priorità e uno strumento
            dell&apos;ecosistema AEDIX costruito apposta. Qui sotto trovi tutte e quattro le leve, con i segnali
            per riconoscere la tua e gli approfondimenti dal blog per ognuna.
          </p>
        </div>
      </section>

      {/* Le 4 leve */}
      <section className="bg-bg-soft py-16 sm:py-24">
        <div className="container-fa grid gap-8">
          {leve.map((l, i) => {
            const brand = brandBySlug[l.slug];
            const related = articlesByLeva(l.slug);
            const Icon = l.icon;
            return (
              <Reveal key={l.slug} delay={i * 60}>
                <div className="rounded-[1.75rem] border border-line bg-white p-7 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 font-display text-lg font-bold text-white">{l.n}</span>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-navy-900">{l.nome}</h2>
                          <p className="text-accent-600 font-semibold">{l.domanda}</p>
                        </div>
                      </div>
                      <p className="mt-5 text-muted leading-relaxed">{l.problema}</p>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">Ti riconosci se…</p>
                      <ul className="mt-3 grid gap-2">
                        {l.segnali.map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-navy-900">
                            <IconArrow className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                      {brand && (
                        <Link href={`/ecosistema/${brand.slug}`} className="btn btn-dark mt-7">
                          <Icon className="h-4 w-4" />
                          La leva: {brand.name}
                          <IconArrow className="arrow h-4 w-4" />
                        </Link>
                      )}
                    </div>
                    {related.length > 0 && (
                      <div className="rounded-2xl bg-bg-soft p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">Dal blog, su questa leva</p>
                        <div className="mt-4 grid gap-3">
                          {related.map((a) => (
                            <Link
                              key={a.slug}
                              href={`/blog/${a.slug}`}
                              className="group rounded-xl border border-line bg-white p-4 transition hover:border-brand-400"
                            >
                              <span className="block font-display text-sm font-bold leading-snug text-navy-900 group-hover:text-brand-700">{a.title}</span>
                              <span className="mt-1 block text-xs text-muted">{a.readingTime} di lettura</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* L'ordine giusto */}
      <section className="container-fa py-16 sm:py-24">
        <SectionHeading
          eyebrow="L'ordine conta"
          title="Da quale leva partire?"
          intro="La leva giusta è quella dove perdi di più adesso. Come regola generale: prima i numeri (senza, decidi al buio), poi la gestione (senza sistema non deleghi), poi clienti e vendita — che moltiplicano quello che le prime due hanno sistemato."
        />
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/blog/da-quale-leva-partire" className="btn btn-dark">
            Come faccio la diagnosi
            <IconArrow className="arrow h-4 w-4" />
          </Link>
          {/* Nota: quando esce la guida lunga (31/08, come-far-crescere-impresa-edile)
              conviene puntare questo bottone direttamente lì. */}
          <Link href="/blog" className="btn btn-ghost">
            Tutti gli articoli del metodo
          </Link>
        </div>
      </section>

      <FaqSection
        title="Domande frequenti sul metodo"
        intro="Le risposte rapide sulle 4 leve e su come si applica il metodo."
        items={metodoFaq}
      />

      <CtaBand
        title="Vuoi sapere qual è la TUA leva?"
        text="Raccontami dove sei bloccato: in una chiamata gratuita facciamo la diagnosi e ti dico da quale leva partirei io, con onestà."
        secondary={{ label: "Come funziona la consulenza", href: "/consulenza" }}
      />
      <div className="h-4" />
    </>
  );
}
