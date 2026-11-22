import type { WorkflowAction, WorkflowGraph } from "@/components/ui/interactive-workflow-blueprint";

/**
 * I flussi raccontati nella vetrina che gira da sola: in home il percorso di un
 * cliente attraverso i quattro strumenti, nelle pagine prodotto il flusso dello
 * strumento. Nomi e cifre sono d'esempio, niente prezzi.
 */
export const SILVIO = "/images/silvio-busto.png";

type Passo = Pick<WorkflowAction, "label" | "detail" | "kind"> & { tool: string; live: string; silvio?: boolean };
export type Flusso = { eyebrow: string; titolo: string; testo: string; lavagna: string; oraInizio: string; passi: Passo[] };

/** Fino a 4 passaggi a zig-zag; oltre, due file da tre. */
export function grafoDa(passi: Passo[]): WorkflowGraph {
  const tre = passi.length > 4;
  return {
    nodes: passi.map(({ silvio, ...p }, i) => ({
      id: `p${i}`,
      type: "blueprint" as const,
      position: tre ? { x: (i % 3) * 300, y: Math.floor(i / 3) * 260 + (i % 3 === 1 ? 40 : 0) } : { x: i * 290, y: i % 2 ? 200 : 40 },
      data: { ...p, avatar: silvio ? SILVIO : undefined } as WorkflowAction,
    })),
    edges: passi.slice(1).map((_, i) => ({ id: `e${i}`, source: `p${i}`, target: `p${i + 1}` })),
  };
}

export const FLUSSI: Record<string, Flusso> = {
  ecosistema: {
    eyebrow: "Le quattro leve, al lavoro",
    titolo: "Un cliente, dal primo contatto al margine.",
    testo: "Ecco come lavorano insieme gli strumenti che ho costruito: Marketing Edile porta il contatto, Vendita Edile lo trasforma in contratto, Edilizia in Cloud gestisce il cantiere con Silvio, Numeri in Edilizia ti dice quanto ti è rimasto in tasca.",
    lavagna: "Il percorso di un cliente nell'ecosistema",
    oraInizio: "09:40",
    passi: [
      { label: "Il contatto arriva", detail: "Annunci nella tua zona e richiamata in pochi minuti.", kind: "trigger", tool: "Marketing Edile", live: "Marco chiede 6 finestre nuove: richiamato dopo 4 minuti" },
      { label: "La trattativa si chiude", detail: "Sopralluogo con chi decide, preventivo spiegato al tavolo.", kind: "review", tool: "Vendita Edile", live: "Contratto firmato senza sconto, acconto incassato" },
      { label: "La commessa parte", detail: "Fasi, squadra, materiali e documenti nello stesso posto.", kind: "integration", tool: "Edilizia in Cloud", live: "Commessa aperta: posa lunedì, materiali ordinati" },
      { label: "Silvio guarda il cantiere", detail: "DDT, ore e costi sulla commessa, con l'avviso quando qualcosa sfora.", kind: "agent", tool: "Silvio AI", silvio: true, live: "Ore di posa +6% sul previsto: avviso al titolare" },
      { label: "Il margine si misura", detail: "Quanto è rimasto davvero, commessa per commessa.", kind: "delivery", tool: "Numeri in Edilizia", live: "Margine a fine lavori: 19%, sopra il preventivo" },
      { label: "Tu decidi", detail: "Più budget dove arrivano i lavori che rendono di più.", kind: "review", tool: "Il titolare", live: "Campagne spostate sui lavori con più margine" },
    ],
  },
  "edilizia-in-cloud": {
    eyebrow: "Edilizia in Cloud, al lavoro",
    titolo: "Dal cantiere al margine, con Silvio accanto.",
    testo: "Rilievo, computo, preventivo, commessa, costi veri: ogni passaggio alimenta il successivo e Silvio tiene d'occhio il margine mentre lavori.",
    lavagna: "Dal rilievo al margine della commessa",
    oraInizio: "08:30",
    passi: [
      { label: "Rilievo in cantiere", detail: "Foto e misure prese dal telefono.", kind: "trigger", tool: "App cantiere", live: "Bagno e cucina rilevati: 14 foto e misure salvate" },
      { label: "Computo metrico", detail: "Silvio legge la planimetria e prepara le voci.", kind: "agent", tool: "Silvio AI", silvio: true, live: "Planimetria letta: 23 voci, 86 mq di pavimenti" },
      { label: "Preventivo dal listino", detail: "Prezzi e costi dal tuo listino: il margine previsto si vede subito.", kind: "integration", tool: "Preventivi", live: "Preventivo pronto: margine previsto 22%" },
      { label: "Commessa aperta", detail: "Alla firma nasce la commessa con fasi e budget.", kind: "delivery", tool: "Commesse", live: "6 fasi e budget per voce" },
      { label: "Costi veri dal cantiere", detail: "DDT, ore e fatture sulla commessa quando arrivano.", kind: "integration", tool: "DDT e rapportini", live: "Ore di oggi e DDT del cemento caricati" },
      { label: "Silvio sul margine", detail: "Avvisa quando una voce sfora e calcola come finire.", kind: "agent", tool: "Silvio AI", silvio: true, live: "Manodopera +12%: ecco come recuperare" },
    ],
  },
  "marketing-edile": {
    eyebrow: "Marketing Edile, al lavoro",
    titolo: "Guarda un contatto diventare un appuntamento.",
    testo: "Annuncio, modulo con le domande giuste, richiamata in pochi minuti, appuntamento in agenda: i passaggi si accendono uno dopo l'altro.",
    lavagna: "Il percorso di un contatto",
    oraInizio: "09:41",
    passi: [
      { label: "Annuncio in zona", detail: "Le foto dei tuoi lavori, solo dove lavori.", kind: "trigger", tool: "Facebook e Google", live: "Annuncio visto da 1.240 persone in zona" },
      { label: "Modulo con 3 domande", detail: "Arriva chi è pronto, non i curiosi.", kind: "integration", tool: "Pagina dedicata", live: "Casa di proprietà, 6 finestre, entro 3 mesi" },
      { label: "Richiamata in 5 minuti", detail: "Finché ha in testa il suo problema.", kind: "review", tool: "Telefono", live: "Richiamato dopo 4 minuti: contatto buono" },
      { label: "Appuntamento in agenda", detail: "Con promemoria su WhatsApp il giorno prima.", kind: "delivery", tool: "Agenda", live: "Sopralluogo giovedì 17:30" },
    ],
  },
  "vendita-edile": {
    eyebrow: "Vendita Edile, al lavoro",
    titolo: "Guarda una trattativa arrivare alla firma.",
    testo: "Telefonata, sopralluogo, preventivo, firma: i passaggi del metodo si accendono uno dopo l'altro.",
    lavagna: "La trattativa, passo per passo",
    oraInizio: "09:15",
    passi: [
      { label: "Prima telefonata", detail: "Domande sul problema, non sul listino.", kind: "trigger", tool: "Telefono", live: "Spifferi e rumore, decidono in due" },
      { label: "Sopralluogo guidato", detail: "Bisogni scritti nero su bianco.", kind: "review", tool: "Scheda cliente", live: "4 bisogni scritti, misure prese" },
      { label: "Preventivo al tavolo", detail: "Ogni voce legata a un bisogno detto dal cliente.", kind: "integration", tool: "Preventivo", live: "Ogni voce spiegata di persona" },
      { label: "Firma senza sconto", detail: "Obiezione gestita, acconto incassato.", kind: "delivery", tool: "Contratto", live: "«Ci pensiamo» gestito: firmato" },
    ],
  },
  "numeri-in-edilizia": {
    eyebrow: "Numeri in Edilizia, al lavoro",
    titolo: "Guarda un DDT diventare margine.",
    testo: "Il materiale arriva, il costo va sulla commessa giusta, si confronta col preventivo e il margine si aggiorna mentre lavori.",
    lavagna: "Da dove passa il margine",
    oraInizio: "08:12",
    passi: [
      { label: "Arriva il DDT", detail: "La bolla viene fotografata e letta.", kind: "trigger", tool: "Foto del DDT", live: "DDT n. 418: 40 sacchi di cemento" },
      { label: "Costo sulla commessa", detail: "Sulla commessa e sulla voce giusta.", kind: "integration", tool: "Commessa", live: "Commessa Via dei Mille, voce Materiali" },
      { label: "Confronto col preventivo", detail: "Speso contro previsto, voce per voce.", kind: "review", tool: "Scostamenti", live: "Materiali +4%: ancora sotto controllo" },
      { label: "Margine a finire", detail: "Si aggiorna mentre lavori, non a fine anno.", kind: "delivery", tool: "Cruscotto", live: "Margine a finire: 14,6%" },
    ],
  },
};
