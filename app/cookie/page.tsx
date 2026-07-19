import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CookiePrefsButton } from "@/components/CookiePrefsButton";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa estesa sui cookie utilizzati dal sito di Florin Andriciuc.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cookie" },
};

export default function CookiePage() {
  return (
    <>
      <PageHero eyebrow="Note legali" crumb="Cookie" title="Cookie Policy" cta={false}
        intro="Quali cookie usa questo sito, a cosa servono e come gestire le tue preferenze." />
      <section className="container-fa py-16 sm:py-20">
        <div className="prose-fa">
          <p className="text-sm text-muted">Ultimo aggiornamento: [DA CONFERMARE]</p>

          <h2>Cosa sono i cookie</h2>
          <p>I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo per farli funzionare o per raccogliere informazioni sull&apos;utilizzo.</p>

          <h2>Cookie tecnici (necessari)</h2>
          <p>Servono al funzionamento del sito e alla memorizzazione delle tue preferenze sul consenso. Non richiedono consenso e sono sempre attivi.</p>

          <h2>Cookie analitici e di marketing</h2>
          <p>
            Solo previo tuo consenso, il sito può usare strumenti di analisi (es. Google Analytics 4) per statistiche
            aggregate ed eventuali strumenti di misurazione delle campagne. Fino al consenso, questi strumenti restano
            disattivati tramite Google Consent Mode v2.
          </p>

          <h2>Gestire le preferenze</h2>
          <p>Puoi modificare o revocare il consenso in qualsiasi momento:</p>
          <p className="not-prose">
            <CookiePrefsButton className="btn btn-primary">Gestisci le preferenze cookie</CookiePrefsButton>
          </p>

          <p className="text-sm text-muted">Modello di base da personalizzare con l&apos;elenco puntuale dei cookie effettivamente installati. [DA CONFERMARE]</p>
        </div>
      </section>
    </>
  );
}
