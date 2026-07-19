import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TrackView } from "@/components/TrackView";
import { IconMail, IconCheck, IconExternal } from "@/components/Icons";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Scrivi a Florin Andriciuc: raccontami dove è bloccata la tua impresa edile e capiamo insieme da quale leva partire. Gestione, marketing, vendita o numeri.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      <TrackView event="Contact" name="Contatti" />
      <PageHero
        eyebrow="Contatti"
        crumb="Contatti"
        path="/contatti"
        cta={false}
        title={<>Raccontami dov&apos;è bloccata la tua <span className="text-gradient">impresa</span></>}
        intro="Nessun copione, nessun call center. Compila il form: ti rispondo io e capiamo insieme da dove conviene partire — anche se la risposta non è un mio prodotto."
      />

      <section className="container-fa py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <iframe
              src="https://app.ediliziaincloud.com/f?slug=florinandriciuc&company_id=00000000-0000-0000-0000-000000000001"
              title="Richiedi informazioni"
              loading="lazy"
              className="mx-auto block w-full max-w-[640px] rounded-[1.5rem]"
              style={{ height: 640, border: 0 }}
            />
          </div>

          <div className="lg:pt-4">
            <h2 className="font-display text-xl font-bold text-navy-900">Preferisci scrivere direttamente?</h2>
            <a href={`mailto:${site.email}`} className="mt-4 flex items-center gap-3 rounded-2xl border border-line bg-bg-soft p-5 card-lift">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-100 text-accent-600"><IconMail className="h-6 w-6" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
                <p className="font-display font-bold text-navy-900 break-all">{site.email}</p>
              </div>
            </a>

            <div className="mt-6 rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Cosa succede dopo</p>
              <ul className="mt-3 grid gap-2.5">
                {["Leggo io la tua richiesta, di persona", "Ti rispondo di solito entro 24h lavorative", "Capiamo la leva giusta, senza impegno"].map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-sm text-navy-800">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700"><IconCheck className="h-3.5 w-3.5" /></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Vai diretto al prodotto</p>
              <div className="mt-3 grid gap-2">
                {projects.map((p) => (
                  <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy-800 hover:bg-bg-soft">
                    {p.name}
                    <IconExternal className="h-4 w-4 text-muted/60" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
