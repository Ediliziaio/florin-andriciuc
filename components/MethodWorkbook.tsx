import Link from "next/link";
const steps = [
  { name: "Numeri", question: "Quale risultato sto confrontando?", document: "Ricavi, costi considerati e stima del lavoro residuo.", href: "/ecosistema/numeri-in-edilizia" },
  { name: "Gestione", question: "Dove si interrompe il passaggio di informazioni?", document: "Un caso con richiesta, documento, referente e consegna.", href: "/ecosistema/edilizia-in-cloud" },
  { name: "Clienti", question: "Da dove arrivano richieste pertinenti?", document: "Fonte delle richieste, periodo e criteri di qualificazione.", href: "/ecosistema/marketing-edile" },
  { name: "Vendita", question: "In quale fase si fermano i preventivi?", document: "Offerte inviate, fase, prossimo riscontro e motivi dell’esito.", href: "/ecosistema/vendita-edile" },
];
export function MethodWorkbook() {
  return <section className="container-fa py-12" aria-labelledby="scheda-quattro-leve" data-method-workbook>
    <div className="rounded-2xl border border-line bg-bg-soft p-6 sm:p-8">
      <h2 id="scheda-quattro-leve" className="text-2xl font-bold text-navy-900">Da quale problema partire: una scheda per le quattro leve</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted">Scegli una domanda concreta e raccogli un riferimento verificabile prima di decidere lo strumento. La scheda aiuta a preparare il confronto: non assegna un punteggio automatico all’impresa e non promette un risultato economico.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">{steps.map(s=><div key={s.name} className="rounded-xl border border-line bg-white p-5"><h3 className="font-bold text-navy-900">{s.name}: {s.question}</h3><p className="mt-3 leading-relaxed text-muted">{s.document}</p><Link href={s.href} className="mt-4 inline-block font-semibold text-brand-700 underline underline-offset-4">Approfondisci il progetto</Link></div>)}</div>
      <div className="mt-6 flex flex-wrap gap-4"><a href="/risorse/scheda-quattro-leve.csv" download className="btn btn-dark">Scarica la scheda CSV</a><Link href="/consulenza" className="btn btn-ghost">Prepara il confronto sul tuo caso</Link></div>
      <p className="mt-4 text-sm leading-relaxed text-muted">Il modello è vuoto: usa informazioni pertinenti e mantieni nei tuoi sistemi i documenti riservati. Per iniziare basta descrivere il passaggio da chiarire e la fonte del dato disponibile.</p>
    </div>
  </section>;
}
