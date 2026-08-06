import type { Article } from "../article-types";

export const articleBurocraziaEdileEAi: Article = {
  slug: "burocrazia-edile-e-ai",
  title: "La burocrazia edile è il miglior cliente dell'AI",
  excerpt:
    "DURC, DDT, POS, verbali, comunicazioni: la parte del mestiere che nessuno ha scelto di fare. È anche la parte che l'AI fa meglio — perché è ripetitiva, documentale e senza decisioni. Ecco da dove partire.",
  seoDescription:
    "DURC, DDT, POS, verbali: la parte del mestiere che nessuno ha scelto. È anche quella che l'AI fa meglio, perché è ripetitiva e senza decisioni da prendere.",
  date: "2026-09-23",
  readingTime: "6 min",
  category: "AI",
  relatedProject: "edilizia-io",
  body: [
    {
      type: "p",
      text: "Nessuno ha aperto un'impresa edile per compilare documenti. Eppure chiedi a qualsiasi titolare dove finiscono le sue serate, e la risposta è sempre la stessa lista: il DDT da sistemare, la comunicazione da mandare, il verbale da scrivere, i documenti del subappaltatore da controllare, la scadenza del corso di formazione da ricordare. La burocrazia è la tassa occulta del settore — ore rubate al cantiere e alla famiglia da lavoro che non produce un mattone. Ed è esattamente per questo che è il posto migliore da cui far entrare l'intelligenza artificiale in un'impresa edile.",
    },
    { type: "h2", text: "Perché proprio la burocrazia" },
    {
      type: "p",
      text: "Ho scritto altrove [cosa non farei mai fare all'AI](/blog/cosa-non-farei-fare-all-ai): i prezzi, la sicurezza valutata sul campo, i rapporti con i clienti nei momenti che contano. La burocrazia è l'opposto perfetto di quella lista: è ripetitiva (le stesse operazioni, ogni settimana), è documentale (testo, moduli, scadenze — il pane dell'AI), e soprattutto non contiene decisioni imprenditoriali. Trascrivere una bolla non richiede giudizio: richiede pazienza. E la pazienza è l'unica materia in cui la macchina batte l'uomo dieci a zero, alle undici di sera come alle otto di mattina.",
    },
    {
      type: "quote",
      text: "Regola semplice: le decisioni restano a chi rischia. La trafila va alle macchine. La burocrazia è trafila al 95%.",
    },
    { type: "h2", text: "Cosa può fare l'AI, concretamente, già oggi" },
    {
      type: "ul",
      items: [
        "Leggere i documenti al posto tuo: la bolla fotografata in cantiere diventa righe di materiali con quantità e prezzi, senza ricopiatura. La fattura del fornitore si abbina all'ordine e segnala le differenze.",
        "Tenere le scadenze che oggi vivono nella tua testa: DURC dei subappaltatori, formazione della squadra, revisioni dei mezzi, documenti di cantiere in scadenza — con l'avviso che arriva prima del problema, non dopo.",
        "Preparare le bozze: il verbale di riunione dal vocale registrato, la comunicazione al condominio, la risposta alla richiesta documentale. Tu correggi e firmi in due minuti invece di scrivere in venti.",
        "Rispondere alle domande ripetitive: «a che punto è il mio cantiere?», «mi rimanda il certificato?» — le richieste che interrompono la giornata e hanno risposte che esistono già, da qualche parte, nei tuoi documenti.",
      ],
    },
    { type: "h2", text: "Il prerequisito che nessuno ti dice" },
    {
      type: "p",
      text: "C'è però una condizione, e chi vende AI miracolosa la tace: l'AI lavora sui tuoi dati, e se i tuoi dati sono sparsi tra WhatsApp, cassetti e cruscotti del furgone, non c'è intelligenza che tenga. La bolla può essere letta automaticamente solo se esiste un posto dove finisce; la scadenza può essere sorvegliata solo se è registrata da qualche parte. È il percorso che ho descritto in [digitalizzare un'impresa edile](/blog/digitalizzare-impresa-edile-da-dove-iniziare): prima l'ordine, poi il sistema, poi — solo poi — l'automazione. Chi salta le tappe compra un cervello elettronico e gli dà in pasto il caos: ottiene caos più veloce.",
    },
    { type: "h2", text: "Da dove partire: il censimento delle ore perse" },
    {
      type: "p",
      text: "L'esercizio che consiglio è semplice: per una settimana, segna ogni attività burocratica che fai e quanto ci metti. Alla fine avrai la classifica delle tue ore perse — e quasi sempre in cima ci sono le stesse tre voci: documenti da ricopiare, scadenze da inseguire, comunicazioni da scrivere. Quella classifica è il tuo piano di automazione, già ordinato per priorità: si parte dalla voce più grossa e ripetitiva, si automatizza, si misura il tempo recuperato, si passa alla seconda. È l'approccio con cui costruiamo gli strumenti di [edilizia.io](/ecosistema/edilizia-io): l'AI al servizio del cantiere parte sempre da un'ora vera restituita a qualcuno, mai da una demo che stupisce.",
    },
    {
      type: "p",
      text: "Se vuoi capire quali delle tue ore burocratiche sono automatizzabili da subito — e quali invece richiedono prima un po' d'ordine nei dati — [scrivimi](/consulenza): il censimento delle ore perse lo facciamo insieme in una chiamata.",
    },
  ],
  faq: [
    {
      q: "Cosa può automatizzare l'AI nella burocrazia di un'impresa edile?",
      a: "Le attività ripetitive e documentali: lettura di bolle e fatture, controllo e scadenzario dei documenti (DURC, formazione, mezzi), bozze di verbali e comunicazioni, risposte alle richieste ripetitive di clienti e fornitori. Restano all'imprenditore le decisioni: prezzi, sicurezza sul campo, rapporti nei momenti critici.",
    },
    {
      q: "Serve essere digitalizzati per usare l'AI in edilizia?",
      a: "Sì, almeno al livello base: l'AI lavora sui dati che trova, quindi documenti e informazioni devono vivere in un sistema, non sparsi tra chat e cassetti. L'ordine dei passi è: dati in ordine, gestionale come base, poi automazione.",
    },
    {
      q: "Da dove iniziare ad automatizzare la burocrazia edile?",
      a: "Dal censimento: una settimana segnando ogni attività burocratica e il tempo che richiede. La classifica che ne esce è il piano di automazione già ordinato per priorità — si parte dalla voce più ripetitiva e costosa in ore.",
    },
  ],
};
