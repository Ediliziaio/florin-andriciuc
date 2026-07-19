import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";
import { SectionHeading, CtaBand } from "@/components/ui";
import { IconCheck, IconQuote, IconSpark } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "La storia di Florin Andriciuc: da imprenditore con i problemi di ogni impresa edile a founder di un ecosistema di software e metodi per farla crescere.",
  alternates: { canonical: "/chi-sono" },
};

const timeline = [
  { year: "Gli inizi", title: "L'inizio nel mondo dell'edilizia", text: "I primi anni dentro il settore: cantieri, preventivi, clienti. Da qui nascono i problemi che poi ho deciso di risolvere." },
  { year: "La svolta", title: "Il problema diventa un'idea", text: "Capisco che gli strumenti per l'impresa edile o non esistono o sono fatti per i contabili. Decido di costruirli io." },
  { year: "Il lancio", title: "Nasce EdiliziaInCloud", text: "Il gestionale cloud pensato per chi vive il cantiere: preventivi, commesse, cantieri, fatture e AI in un posto solo." },
  { year: "Oggi", title: "Un ecosistema per l'impresa edile", text: "Attorno al gestionale, i brand per acquisire clienti, vendere meglio e controllare i numeri. Un sistema unico." },
];

const values = [
  { title: "Da imprenditore, non da fornitore", text: "Costruisco solo cose che avrei voluto avere io quando ero in cantiere. Se non risolve un problema vero, non lo faccio." },
  { title: "La lingua del cantiere", text: "Niente paroloni. Parlo come parla un imprenditore edile, perché è da lì che vengo." },
  { title: "Prima il risultato, poi il prodotto", text: "Non mi interessa venderti un software. Mi interessa che la tua impresa guadagni di più e lavori meglio." },
  { title: "Onestà, anche quando costa", text: "Se la leva giusta per te non è un mio prodotto, te lo dico. La fiducia vale più di una vendita." },
];

export default function ChiSonoPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi sono"
        crumb="Chi sono"
        path="/chi-sono"
        title={<>Ho vissuto i problemi dell&apos;impresa edile. Poi li ho <span className="text-gradient">risolti</span>.</>}
        intro="Non sono un consulente che ha letto i libri. Sono un imprenditore che ha avuto gli stessi problemi tuoi — e ha deciso di costruire gli strumenti che mancavano."
      />

      {/* Storia + foto */}
      <section className="container-fa py-20 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <div className="relative">
                <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-500/20 to-brand-500/20 blur-2xl" />
                <Portrait className="relative shadow-card" />
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft">
                  <IconSpark className="h-6 w-6 shrink-0 text-gold-500" />
                  <p className="text-sm font-medium text-navy-900">Founder di EdiliziaInCloud e dell&apos;ecosistema AEDIX.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <span className="eyebrow">La mia storia</span>
            <div className="prose-fa mt-4">
              <p>
                Ti dico la verità: non è che un giorno mi sono svegliato con l&apos;idea di fare software.
                Sono arrivato agli strumenti perché, come imprenditore, i problemi li avevo sulla mia pelle.
                Non li ho studiati sui libri: li ho vissuti in cantiere, uno per uno.
              </p>
              <p>
                Facevo i preventivi la sera, tardi, su fogli che si rompevano da soli. Guardavo il fatturato
                crescere e il conto in banca no. Vedevo colleghi bravissimi in cantiere e disperati con i
                clienti, con i numeri, con la burocrazia. E mi sono fatto una domanda semplice: perché nessuno
                ha costruito gli strumenti giusti per noi?
              </p>
              <blockquote className="my-8 rounded-2xl border-l-4 border-accent-500 bg-bg-soft p-6">
                <IconQuote className="h-7 w-7 text-gold-500" />
                <p className="mt-2 font-serif text-xl italic leading-snug text-navy-900">
                  Non volevo un&apos;altra app. Volevo che l&apos;impresa edile smettesse di lavorare al buio.
                </p>
              </blockquote>
              <p>
                Così è nato tutto. Prima EdiliziaInCloud, il gestionale. Poi, uno dopo l&apos;altro, gli altri
                pezzi: come farsi trovare dai clienti, come vendere senza svendere, come leggere i propri numeri.
                Non brand a caso: le quattro leve che, messe insieme, fanno crescere un&apos;impresa edile.
              </p>
              <p>
                Oggi il mio lavoro è uno: mettere nelle mani dell&apos;imprenditore edile gli strumenti che a me,
                ai miei tempi, nessuno aveva dato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-fa">
          <SectionHeading eyebrow="Il percorso" title="Come siamo arrivati fin qui" intro="Le tappe da confermare con date e dettagli reali." />
          <div className="mt-12 grid gap-4">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-5 rounded-2xl border border-line bg-white p-6 card-lift">
                  <div className="shrink-0">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 font-display text-sm font-bold text-white text-center leading-tight">
                      {t.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">{t.title}</h3>
                    <p className="mt-1.5 text-muted leading-relaxed">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="container-fa py-20 sm:py-28">
        <SectionHeading eyebrow="Come la penso" title="I principi che non tratto" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 card-lift">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-100 text-accent-600">
                  <IconCheck className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/ecosistema" className="btn btn-dark">Scopri cosa ho costruito</Link>
        </div>
      </section>

      <CtaBand
        title="Parliamo da imprenditore a imprenditore"
        text="Nessun copione da call center. Mi racconti la tua situazione e vediamo insieme da dove partire."
      />
      <div className="h-4" />
    </>
  );
}
