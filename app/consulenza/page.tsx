import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, ProcessSteps, CtaBand, FaqSection } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { IconArrow, IconCheck, IconBuilding, IconMegaphone, IconHandshake, IconChart } from "@/components/Icons";
import { products } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulenza per imprese edili",
  description:
    "Consulenza per imprese edili con Florin Andriciuc: capiamo insieme se il blocco è gestione, clienti, vendita o margini — e da quale leva partire. Gratuita.",
  alternates: { canonical: "/consulenza" },
  openGraph: {
    type: "website",
    title: "Consulenza per imprese edili — Florin Andriciuc",
    description:
      "Capiamo insieme se il blocco della tua impresa edile è gestione, clienti, vendita o margini — e da quale leva partire.",
    url: `${site.domain}/consulenza`,
  },
};

const brandIcon = {
  "edilizia-in-cloud": IconBuilding,
  "marketing-edile": IconMegaphone,
  "vendita-edile": IconHandshake,
  "numeri-in-edilizia": IconChart,
} as const;

const consulenzaServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consulenza per imprese edili",
  serviceType: "Consulenza per imprese edili",
  description:
    "Consulenza di Florin Andriciuc per imprenditori edili: analisi della situazione dell'impresa (gestione, acquisizione clienti, vendita, controllo di gestione) e individuazione della leva da cui partire per crescere.",
  url: `${site.domain}/consulenza`,
  areaServed: "IT",
  provider: { "@id": `${site.domain}/#florin` },
  audience: { "@type": "Audience", audienceType: "Imprenditori edili e imprese di costruzioni" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Prima consulenza gratuita" },
};

const perChi = [
  "Imprese di costruzioni e ristrutturazioni",
  "Serramentisti e installatori",
  "Impiantisti",
  "Carpenterie e opere specialistiche",
  "Artigiani strutturati che vogliono crescere",
  "General contractor",
];

const faq = [
  {
    q: "Cosa comprende la consulenza per imprese edili?",
    a: "La consulenza parte dalla tua situazione reale: dove perdi tempo, dove sfugge il margine, perché i clienti non arrivano. Insieme individuiamo la leva da cui partire — gestione, marketing, vendita o controllo di gestione — e definiamo i passi concreti per metterla a terra sul tuo modo di lavorare.",
  },
  {
    q: "La prima consulenza è davvero gratuita?",
    a: "Sì. La prima chiamata serve a capire dove sei bloccato e se posso esserti utile. Se la leva giusta per te non è uno dei miei strumenti, te lo dico con onestà: la fiducia vale più di una vendita.",
  },
  {
    q: "In cosa è diversa da una consulenza di marketing generica?",
    a: "Non è una consulenza da agenzia: è il confronto con un imprenditore che i problemi dell'impresa edile li ha vissuti in prima persona e ci ha costruito sopra un ecosistema di strumenti — EdiliziaInCloud, Marketing Edile, Vendita Edile e Numeri in Edilizia. Si parla la lingua del cantiere, non quella dell'ufficio.",
  },
  {
    q: "Lavori solo con grandi imprese?",
    a: "No. Il focus è l'impresa edile italiana in tutte le sue forme: dall'artigiano strutturato alla società di costruzioni. Se costruisci, ristrutturi o installi, la consulenza è pensata per te.",
  },
  {
    q: "Come si inizia?",
    a: "Scrivimi dalla pagina contatti e raccontami in due righe dove sei bloccato. Ti rispondo io e fissiamo una chiamata senza impegno.",
  },
];

export default function ConsulenzaPage() {
  return (
    <>
      <JsonLd data={consulenzaServiceSchema} />
      <PageHero
        eyebrow="Consulenza"
        crumb="Consulenza"
        path="/consulenza"
        title={<>Consulenza per imprese edili: partiamo dal tuo <span className="text-gradient">problema</span>, non da un prodotto.</>}
        intro="La consulenza di Florin Andriciuc aiuta l'imprenditore edile a capire dove si blocca la crescita — gestione, clienti, vendita o margini — e da quale leva partire per sbloccarla. La prima chiamata è gratuita e senza impegno."
      />

      {/* Answer block: risposta autosufficiente per Google e per le AI */}
      <section className="container-fa py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Cos&apos;è, in concreto</span>
            <div className="prose-fa mt-4">
              <p>
                La consulenza per imprese edili di Florin Andriciuc è un percorso pratico: si parte dalla
                situazione reale della tua impresa — preventivi, cantieri, clienti, margini — e si individua
                la leva che oggi ti costa di più. Non un pacchetto a scatola chiusa, ma la risposta a una
                domanda precisa: <strong>da dove conviene partire per far crescere la tua impresa adesso?</strong>
              </p>
              <p>
                Dietro la consulenza c&apos;è l&apos;esperienza diretta di chi i problemi dell&apos;impresa edile li ha
                vissuti e ci ha costruito sopra un ecosistema completo: il gestionale{" "}
                <a href="https://www.ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>,
                l&apos;acquisizione clienti di <Link href="/ecosistema/marketing-edile">Marketing Edile</Link>, il metodo
                di chiusura di <Link href="/ecosistema/vendita-edile">Vendita Edile</Link> e il controllo di gestione
                di <Link href="/ecosistema/numeri-in-edilizia">Numeri in Edilizia</Link>.
              </p>
            </div>
          </div>
          <Reveal>
            <div className="rounded-2xl border border-line bg-bg-soft p-7">
              <p className="font-display text-lg font-bold text-navy-900">Per chi è pensata</p>
              <ul className="mt-5 grid gap-3">
                {perChi.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-600">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-navy-900">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metodo */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-fa">
          <SectionHeading
            eyebrow="Come funziona"
            title="Tre passi, zero fumo"
            intro="Il percorso è lo stesso che userei per la mia impresa: capire il blocco, scegliere la leva, metterla a terra."
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
        </div>
      </section>

      {/* Le 4 leve */}
      <section className="container-fa py-20 sm:py-28">
        <SectionHeading
          eyebrow="Le leve su cui lavoriamo"
          title="Quattro aree, un solo obiettivo: farti guadagnare di più"
          intro="Ogni consulenza tocca una o più di queste leve. Per ognuna esiste uno strumento dedicato dell'ecosistema AEDIX."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {products.map((p, i) => {
            const Icon = brandIcon[p.slug as keyof typeof brandIcon] ?? IconBuilding;
            return (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  href={`/ecosistema/${p.slug}`}
                  className="card-lift group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 hover:border-brand-400"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold text-navy-900 group-hover:text-brand-700">{p.name}</span>
                    <span className="mt-1 block text-sm text-muted leading-relaxed">{p.tagline}</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-display text-sm font-bold text-accent-600">
                      Approfondisci <IconArrow className="arrow h-4 w-4" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FaqSection
        title="Domande frequenti sulla consulenza"
        intro="Le risposte alle domande che mi fanno più spesso gli imprenditori edili prima di iniziare."
        items={faq}
      />

      <CtaBand
        title="Raccontami dove sei bloccato"
        text="Due righe sulla tua situazione bastano. Ti dico con onestà da quale leva partirei io — anche se la risposta non è un mio prodotto."
        secondary={{ label: "Scopri l'ecosistema", href: "/ecosistema" }}
      />
      <div className="h-4" />
    </>
  );
}
