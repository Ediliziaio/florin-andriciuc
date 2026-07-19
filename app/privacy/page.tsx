import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali del sito di Florin Andriciuc.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Note legali" crumb="Privacy" title="Privacy Policy" cta={false}
        intro="Come tratto i dati personali raccolti attraverso questo sito, ai sensi del Regolamento UE 2016/679 (GDPR)." />
      <section className="container-fa py-16 sm:py-20">
        <div className="prose-fa">
          <p className="text-sm text-muted">Ultimo aggiornamento: luglio 2026</p>

          <h2>Titolare del trattamento</h2>
          <p>
            Titolare del trattamento è Florin Andriciuc.
            Per qualsiasi richiesta relativa ai tuoi dati puoi scrivere a{" "}
            <a className="text-brand-600 underline" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Dati raccolti</h2>
          <ul>
            <li>Dati che fornisci volontariamente tramite il form di contatto (nome, email, telefono, impresa, messaggio).</li>
            <li>Dati di navigazione raccolti in forma aggregata e anonima tramite strumenti di analisi, solo previo consenso.</li>
          </ul>

          <h2>Finalità e base giuridica</h2>
          <ul>
            <li>Rispondere alle tue richieste e ricontattarti (esecuzione di misure precontrattuali su tua richiesta).</li>
            <li>Analisi statistica dell&apos;utilizzo del sito (consenso, revocabile in ogni momento).</li>
          </ul>

          <h2>Conservazione</h2>
          <p>I dati sono conservati per il tempo necessario a gestire la tua richiesta e adempiere agli obblighi di legge, poi cancellati o anonimizzati.</p>

          <h2>Diritti dell&apos;interessato</h2>
          <p>
            Hai diritto di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione, oltre a revocare
            il consenso e proporre reclamo al Garante per la protezione dei dati personali. Per esercitarli scrivi a{" "}
            <a className="text-brand-600 underline" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <p className="text-sm text-muted">
            Questo documento può essere aggiornato nel tempo: fa fede la versione pubblicata su questa pagina.
          </p>
        </div>
      </section>
    </>
  );
}
