import type { Article } from "../article-types";

export const articleQuantoCostaUnOra: Article = {
  slug: "quanto-costa-un-ora-di-squadra",
  title: "Quanto costa un'ora della tua squadra (e perché non lo sai)",
  excerpt:
    "Quando mi chiedevano quanto costava un'ora dei miei operai, rispondevo con la paga oraria. Sbagliato di brutto: la paga è meno di metà della storia. E chi preventiva con quel numero regala margine a ogni riga.",
  seoDescription:
    "Rispondevo con la paga oraria: sbagliato di brutto. La paga è meno di metà del costo vero di un'ora di squadra. E chi preventiva così regala margine.",
  date: "2026-08-21",
  readingTime: "6 min",
  category: "Numeri",
  relatedProject: "numeri-in-edilizia",
  body: [
    {
      type: "p",
      text: "Te la faccio semplice: per anni, quando calcolavo la manodopera nei preventivi, usavo la paga oraria degli operai più «qualcosa». Quel «qualcosa» era a sensazione. E siccome la sensazione, quando hai fretta e vuoi prendere il lavoro, tende sempre al ribasso, stavo sistematicamente regalando ore. Non lo vedevo, perché il regalo era spalmato su ogni riga di ogni preventivo.",
    },
    { type: "h2", text: "Cosa c'è dentro un'ora vera di squadra" },
    {
      type: "p",
      text: "La paga in busta è solo l'inizio. Sopra ci vanno i contributi e il TFR, le ferie e i permessi che paghi anche se non si lavora, la tredicesima, la formazione e i dispositivi di sicurezza, i giorni di pioggia e i tempi morti tra un cantiere e l'altro. E poi la parte che quasi nessuno conta: il viaggio. Un'ora di furgone all'andata e una al ritorno, per una squadra di tre persone, sono sei ore pagate al giorno che non producono un mattone.",
    },
    {
      type: "quote",
      text: "Non esiste il costo orario «da contratto». Esiste quanto ti costa un'ora in cui la squadra produce davvero. Ed è sempre più alto di quello che pensi.",
    },
    {
      type: "p",
      text: "Il conto onesto si fa così: tutto quello che la squadra ti costa in un anno, diviso per le ore in cui effettivamente costruisce. Non le ore teoriche del contratto: quelle produttive. Quando l'ho fatto la prima volta, il mio costo orario reale era parecchio sopra quello che usavo nei preventivi. Ogni lavoro «preso bene» degli ultimi anni mi è passato davanti agli occhi con un'altra faccia.",
    },
    { type: "h2", text: "Perché questo numero cambia tutto" },
    {
      type: "ul",
      items: [
        "I preventivi smettono di perdere alla partenza: se il costo orario è giusto, il margine che scrivi è margine vero. È il primo mattone del [prezzo giusto](/blog/prezzo-giusto-in-edilizia).",
        "Capisci quali lavori convengono: quelli pieni di viaggi e tempi morti hanno un costo orario effettivo più alto — e magari smettono di sembrarti affari.",
        "Le decisioni su assunzioni e subappalti diventano conti, non sensazioni: sai cosa ti costa un'ora tua contro un'ora comprata fuori.",
      ],
    },
    { type: "h2", text: "Da dove partire" },
    {
      type: "p",
      text: "Non serve il commercialista: servono i tuoi numeri degli ultimi dodici mesi e un pomeriggio sincero. È uno dei primi esercizi del metodo [Numeri in Edilizia](/ecosistema/numeri-in-edilizia), perché da questo numero discende tutto il resto — preventivi, margini, punto di pareggio. E se vuoi che il conto lo guardiamo insieme, [scrivimi](/consulenza): è una delle prime cose che faccio vedere a ogni imprenditore edile.",
    },
  ],
  faq: [
    {
      q: "Come si calcola il costo orario reale di un operaio edile?",
      a: "Si somma tutto il costo annuo aziendale (retribuzione, contributi, TFR, ferie, tredicesima, formazione, sicurezza) e lo si divide per le ore effettivamente produttive dell'anno, escludendo viaggi, tempi morti e giornate perse. Il risultato è sempre più alto della paga oraria.",
    },
    {
      q: "Che errore si fa più spesso nei preventivi sulla manodopera?",
      a: "Usare la paga oraria di contratto più un ricarico a sensazione. Così le ore di viaggio, i tempi morti e i costi indiretti della squadra escono dal preventivo — e rientrano a fine anno, come margine mancante.",
    },
  ],
};
