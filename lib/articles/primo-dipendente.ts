import type { Article } from "../article-types";

export const articlePrimoDipendente: Article = {
  slug: "primo-dipendente",
  title: "Il primo dipendente mi ha insegnato a fare i conti",
  excerpt:
    "Ho assunto il primo operaio quando «c'era tanto lavoro». Non avevo fatto un solo conto: né quanto mi costava, né quanto doveva rendere. È andata bene per fortuna, non per bravura. Ecco cosa rifarei diversamente.",
  seoDescription:
    "Ho assunto il primo operaio perché «c'era tanto lavoro», senza un conto: né quanto costava né quanto doveva rendere. Cosa rifarei diversamente oggi.",
  date: "2026-08-24",
  readingTime: "6 min",
  category: "Storia",
  relatedProject: "numeri-in-edilizia",
  body: [
    {
      type: "p",
      text: "Il mio primo dipendente l'ho assunto per stanchezza. Non è una battuta: ero pieno di lavoro, facevo le giornate in cantiere e le serate sui preventivi, e a un certo punto la domanda non era più «me lo posso permettere?» ma «non ce la faccio più da solo». Così ho assunto. Senza un conto che fosse uno.",
    },
    {
      type: "p",
      text: "Non sapevo quanto mi sarebbe costato davvero all'anno — la storia della differenza tra paga e costo vero l'ho capita solo dopo, e l'ho raccontata in [quanto costa un'ora della tua squadra](/blog/quanto-costa-un-ora-di-squadra). Non sapevo quanto fatturato in più doveva portare per ripagarsi. Non sapevo nemmeno se il «tanto lavoro» che avevo sarebbe durato sei mesi o sei anni.",
    },
    { type: "h2", text: "È andata bene. Ed era il problema" },
    {
      type: "p",
      text: "Il lavoro tenne, il ragazzo era in gamba, l'impresa crebbe. E io imparai la lezione sbagliata: che assumere «a sensazione» funziona. Così il secondo e il terzo li ho presi con lo stesso metodo, cioè nessuno. Solo che ogni dipendente in più alzava l'asticella del fatturato minimo per non andare sotto — il punto di pareggio, avrei scoperto poi che si chiamava così — e io quell'asticella non la vedevo nemmeno.",
    },
    {
      type: "quote",
      text: "Ogni assunzione sposta in alto il fatturato che ti serve solo per non perdere soldi. Se non sai di quanto, non stai decidendo: stai sperando.",
    },
    { type: "h2", text: "I conti che farei oggi, prima di firmare" },
    {
      type: "ul",
      items: [
        "Il costo aziendale vero del primo anno: busta, contributi, TFR, attrezzatura, formazione. Non la paga: il totale.",
        "Quanto fatturato in più deve generare per coprirsi, dato il mio margine reale. Se il margine è basso, il numero fa paura — ed è giusto vederlo prima.",
        "Il lavoro c'è per i prossimi sei mesi o c'è questo mese? Un'assunzione si regge su un flusso di richieste, non su un picco. È il motivo per cui [il passaparola da solo non basta](/blog/come-trovavo-i-clienti) a sostenere una squadra che cresce.",
        "Il piano B: se il lavoro cala, cosa faccio? Saperlo prima toglie il panico dopo.",
      ],
    },
    { type: "h2", text: "Assumere resta la mossa giusta (fatta coi numeri)" },
    {
      type: "p",
      text: "Non ti sto dicendo di non assumere: la squadra è l'unico modo di crescere in edilizia. Ti sto dicendo di farlo come si versa un getto: con le casseforme già montate. I conti di cui sopra sono esattamente quelli che il metodo [Numeri in Edilizia](/ecosistema/numeri-in-edilizia) ti insegna a tenere in ordine. E se stai valutando un'assunzione adesso e vuoi guardare i numeri insieme, [scrivimi](/consulenza).",
    },
  ],
  faq: [
    {
      q: "Quando conviene assumere il primo dipendente in un'impresa edile?",
      a: "Quando il flusso di lavoro è stabile da mesi (non un picco), il margine reale copre il costo aziendale totale della persona e sai di quanto sale il tuo punto di pareggio. Se uno di questi tre numeri manca, prima si sistema quello.",
    },
    {
      q: "Quanto costa davvero un dipendente edile all'anno?",
      a: "Molto più della paga in busta: contributi, TFR, tredicesima, ferie, formazione, sicurezza e attrezzatura portano il costo aziendale ben oltre il lordo. Il conto va fatto sul totale annuo, diviso per le ore realmente produttive.",
    },
  ],
};
