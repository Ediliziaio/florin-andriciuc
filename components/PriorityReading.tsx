import Link from "next/link";
import data from "@/lib/priority-reading.json";
export function PriorityReading({current}:{current:string}) {
 if (!data.pages.includes(current)) return null;
 const contexts: Record<string, string[]> = data.contexts;
 const wanted = contexts[current] ?? [];
 const links = wanted.map(href=>data.cards.find(card=>card.href===href)).filter((card): card is typeof data.cards[number]=>Boolean(card)).filter(card=>card.href!==current);
 return <section data-priority-reading className="container-fa py-10" aria-label="Percorsi di approfondimento">
  <h2 className="text-2xl font-bold text-navy-900">Dalla riflessione al progetto</h2>
  <p className="mt-3 max-w-3xl leading-relaxed text-muted">Il metodo, le riflessioni e i progetti hanno perimetri distinti. Scegli il collegamento che completa la domanda che stai affrontando.</p>
  <div className="mt-6 grid gap-4 md:grid-cols-3">{links.map(link=><Link key={link.href} href={link.href} className="rounded-2xl border border-line bg-white p-5 transition hover:border-brand-400 focus-visible:outline focus-visible:outline-2"><h3 className="font-bold text-navy-900">{link.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{link.text}</p><span className="mt-4 inline-block text-sm font-semibold text-brand-700">Approfondisci →</span></Link>)}</div>
 </section>;
}
