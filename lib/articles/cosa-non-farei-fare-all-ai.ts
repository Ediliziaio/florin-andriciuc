import type { Article } from "../article-types";

export const articleCosaNonFareiFareAllAi: Article = {
  slug: "cosa-non-farei-fare-all-ai",
  title: "Cosa non farei mai fare all'AI in un'impresa edile",
  excerpt:
    "Costruisco strumenti AI per l'edilizia, quindi potrei dirti che l'AI fa tutto. Ti dico il contrario: ci sono cose che in un'impresa edile non le farei mai decidere a una macchina. Ecco dove passa il confine.",
  seoDescription:
    "Costruisco strumenti AI per l'edilizia, ma ci sono cose che non farei mai decidere a una macchina. Dove passa il confine tra AI utile e guai in cantiere.",
  date: "2026-08-19",
  readingTime: "6 min",
  category: "AI",
  relatedProject: "edilizia-io",
  body: [
    {
      type: "p",
      text: "Chi costruisce strumenti di intelligenza artificiale di solito ti racconta cosa l'AI può fare. Io oggi voglio farti l'elenco opposto. Non perché sono diventato scettico — con [edilizia.io](/ecosistema/edilizia-io) l'AI la costruisco, e in [cosa serve davvero in cantiere](/blog/ai-in-cantiere-cosa-serve) ho già detto come la uso — ma perché il modo più veloce per bruciarsi con uno strumento è usarlo dove non deve stare.",
    },
    { type: "h2", text: "Le tre cose che non le farei mai decidere" },
    {
      type: "ul",
      items: [
        "Il prezzo finale di un preventivo. L'AI può prepararti le voci, aggiornare i listini, pescare i costi dallo storico: oro. Ma la firma sul prezzo — quanto margine vuoi, quanto vale quel cliente, quanto ti serve quel cantiere — è una decisione da imprenditore. Chi delega il prezzo a una formula ha già deciso di non decidere.",
        "La sicurezza. Nessun algoritmo si prende la responsabilità di un ponteggio. L'AI può aiutarti a tenere in ordine documenti e scadenze formative, ma la valutazione di cosa è sicuro in QUEL cantiere, con QUELLA squadra, quel giorno, è tua e del tuo responsabile. Punto.",
        "Il rapporto col cliente nei momenti che contano. Una mail di conferma la può scrivere l'AI. La telefonata dopo un problema in cantiere no: il cliente sente la differenza tra chi ci mette la faccia e chi manda un testo generato. E se ne ricorda al preventivo successivo.",
      ],
    },
    {
      type: "quote",
      text: "L'AI deve toglierti il lavoro che ti ruba tempo, non le decisioni che fanno di te l'imprenditore.",
    },
    { type: "h2", text: "Dove invece l'AI è sprecata a non usarla" },
    {
      type: "p",
      text: "Tutto quello che è ripetitivo, documentale e senza decisioni: trascrivere la bolla, riordinare le foto del cantiere, preparare la bozza del report settimanale, cercare nello storico quanto avevi pagato quel materiale. Sono le due ore al giorno che nessuno rimpiange. È il criterio che uso anche per decidere cosa costruire: se toglie lavoro, si fa; se aggiunge un'app da controllare, no.",
    },
    {
      type: "p",
      text: "E c'è un prerequisito di cui nessuno parla: l'AI lavora bene solo se i dati sono in ordine. Se preventivi, commesse e fatture stanno sparsi tra Excel e WhatsApp, non c'è intelligenza che tenga: prima serve il sistema — è il motivo per cui in [EdiliziaInCloud](/ecosistema/edilizia-in-cloud) l'AI sta dentro il gestionale, non in un'app a parte.",
    },
    { type: "h2", text: "Il criterio, in una frase" },
    {
      type: "p",
      text: "Prima di attivare qualsiasi strumento AI, chiediti: questa cosa mi toglie ore o mi toglie una decisione? Se ti toglie ore, provala. Se ti toglie una decisione, tienila per te. E se non sai da dove partire con la digitalizzazione della tua impresa, [parliamone](/consulenza): ti dico io se il tuo primo passo è l'AI o qualcosa di molto più terra terra.",
    },
  ],
  faq: [
    {
      q: "L'AI può fare i preventivi per un'impresa edile?",
      a: "Può prepararli: voci, quantità, costi dallo storico e listini aggiornati. La decisione finale sul prezzo — margine, sconto, opportunità — deve restare all'imprenditore, perché dipende da fattori che solo lui conosce.",
    },
    {
      q: "Da dove dovrebbe partire un'impresa edile con l'AI?",
      a: "Dal lavoro ripetitivo senza decisioni: documenti, trascrizioni, ricerche nello storico, bozze di comunicazioni. E prima ancora, dai dati in ordine: l'AI rende solo se preventivi, commesse e costi vivono in un sistema unico.",
    },
  ],
};
