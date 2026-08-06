import type { Article } from "../article-types";

export const articleEdiliziaInCloud: Article = {
  slug: "perche-ho-costruito-un-gestionale",
  title: "Perché ho costruito un gestionale invece di comprarne uno",
  excerpt:
    "Ho provato Excel, i gestionali generici e i software pensati per i contabili. Nessuno sapeva dirmi se su quel cantiere ci stavo guadagnando. Così ho smesso di cercare e ho iniziato a costruire.",
  seoDescription:
    "Excel, gestionali generici, software per contabili: nessuno mi diceva se sul cantiere ci guadagnavo. Così ho iniziato a costruire EdiliziaInCloud.",
  date: "2026-07-19",
  readingTime: "8 min",
  category: "Storia",
  relatedProject: "edilizia-in-cloud",
  body: [
    {
      type: "p",
      text: "Non volevo fare software. Volevo fare cantieri. Per anni ho mandato avanti l'impresa con Excel, WhatsApp e un blocco note nel furgone. Ha funzionato finché ha funzionato.",
    },
    {
      type: "p",
      text: "Poi i cantieri aperti sono diventati sette. E io ho smesso di sapere come andavano i conti. Sapevo quanto incassavo. Non sapevo quanto mi restava.",
    },
    {
      type: "p",
      text: "Questa è la storia di come sono finito a costruirmi il gestionale da solo. Se non sai chi sono, parto da qui: [la mia storia](/chi-sono) è quella di un impresario edile, non di un informatico. E questo cambia tutto quello che leggerai sotto.",
    },
    { type: "h2", text: "Il venerdì sera che non passava mai" },
    {
      type: "p",
      text: "Il ricordo più preciso che ho è un venerdì di novembre. Ore 20. Tre preventivi da consegnare entro lunedì.",
    },
    {
      type: "p",
      text: "Aprivo il file del mese prima. Cambiavo le quantità. Speravo che i prezzi fossero ancora buoni. Il fornitore aveva ritoccato il listino due volte, io lo scoprivo solo alla consegna.",
    },
    {
      type: "p",
      text: "Ogni venerdì sera passavo circa 3 ore a rifare preventivi. Dodici ore al mese. Centoquaranta ore all'anno buttate a copiare celle. Il tempo però non era il danno peggiore.",
    },
    {
      type: "p",
      text: "Il danno peggiore era che firmavo lavori senza sapere il margine. Su un cantiere da 90.000 euro scoprii a fine anno di aver guadagnato meno che su uno da 40.000. Nessuno me l'aveva detto prima. Nemmeno io.",
    },
    { type: "h2", text: "Cosa avevo provato prima di costruire" },
    {
      type: "p",
      text: "Prima di scrivere una riga di codice ho comprato. Tanto. Ho provato tre strade e sono tornato indietro da tutte e tre.",
    },
    { type: "h3", text: "Excel, il primo amore che ti frega" },
    {
      type: "p",
      text: "Excel non ti tradisce mai apertamente. Ti tradisce piano. Un file per i preventivi, uno per le ore, uno per i fornitori.",
    },
    {
      type: "p",
      text: "Poi arriva la versione «definitivo_2_ok». Poi quella sul portatile di mia moglie. Poi la formula che qualcuno ha rotto senza accorgersene. A quel punto i numeri li hai, ma non ti puoi più fidare.",
    },
    { type: "h3", text: "I gestionali generici" },
    {
      type: "p",
      text: "Ne ho provati diversi. Belli, puliti, pieni di grafici colorati. Fatti per chi vende scatole o ore d'ufficio.",
    },
    {
      type: "p",
      text: "Nessuno sapeva cosa fosse un SAL. Nessuno capiva la ritenuta a garanzia. La parola commessa non esisteva nel menu. Dovevo piegare il mio mestiere alla forma del programma.",
    },
    { type: "h3", text: "I software fatti per i contabili" },
    {
      type: "p",
      text: "Qui è andata peggio. Erano software bravissimi a raccontare il passato. Ti dicevano com'era andata sei mesi dopo, a cantiere chiuso e soldi spesi.",
    },
    {
      type: "p",
      text: "A me serviva il presente. Serviva sapere martedì mattina, con la gru ancora in piedi, se quel lavoro stava marginando o mi stava mangiando i soldi.",
    },
    {
      type: "ul",
      items: [
        "Excel: veloce da iniziare, impossibile da tenere in ordine in tre persone.",
        "Gestionali generici: non conoscevano commesse, SAL, DDT e subappalti.",
        "Software per contabili: raccontavano il passato, non il cantiere aperto.",
        "Tutti quanti: nessuno li avrebbe aperti un capocantiere dal telefono.",
      ],
    },
    {
      type: "quote",
      text: "Il problema non era che quei programmi fossero brutti. Era che erano stati pensati da qualcuno che in cantiere non ci aveva mai messo piede.",
    },
    { type: "h2", text: "Il giorno in cui ho deciso" },
    {
      type: "p",
      text: "La decisione non è arrivata davanti a un computer. È arrivata su un cantiere, sotto la pioggia, con un DDT bagnato in mano.",
    },
    {
      type: "p",
      text: "Era il terzo documento perso in un mese. Materiale consegnato, scaricato, montato. E mai addebitato al cliente, perché il foglio era finito nel cruscotto del furgone.",
    },
    {
      type: "p",
      text: "Quel giorno ho fatto due conti in cabina. Tra DDT persi, ore non registrate e preventivi fatti a memoria, stavo regalando margine ogni mese. Non per pigrizia. Per mancanza di strumenti.",
    },
    {
      type: "p",
      text: "La sera ho scritto su un foglio a quadretti cosa mi serviva davvero. Non funzionalità: domande. Quanto ci guadagno su questo cantiere? Chi mi deve dei soldi adesso? Quale preventivo devo richiamare domani?",
    },
    {
      type: "p",
      text: "Nessun software che avevo provato rispondeva a quelle tre domande insieme. Così ho smesso di cercarne uno e ho iniziato a costruire [EdiliziaInCloud](/ecosistema/edilizia-in-cloud).",
    },
    { type: "h2", text: "Cosa ho imparato costruendolo" },
    {
      type: "p",
      text: "Costruire un gestionale mi ha insegnato più sulla mia impresa che dieci anni di cantieri. Perché per far funzionare il software devi prima capire come lavori davvero.",
    },
    {
      type: "p",
      text: "E scopri cose scomode. Scopri che il processo che credevi solido è pieno di buchi. Che due operai fanno la stessa cosa in due modi diversi. Che il prezzo del listino te lo eri inventato tre anni fa.",
    },
    {
      type: "ul",
      items: [
        "Se una cosa non si registra dal telefono in cantiere, non verrà mai registrata.",
        "Il dato che arriva tardi non è un dato: è un ricordo. E i ricordi non fanno decidere.",
        "Ogni campo obbligatorio in più è una persona in meno che userà il programma.",
        "Il margine vero si costruisce nel preventivo, non si recupera alla fattura.",
        "Un software che nessuno apre costa più di uno che non hai mai comprato.",
      ],
    },
    {
      type: "p",
      text: "La lezione più dura è stata sull'abitudine. Il codice si cambia in un giorno. Le abitudini di una squadra no. Ho dovuto riscrivere schermate intere solo perché i miei operai non le aprivano.",
    },
    { type: "h2", text: "Cosa è cambiato per me" },
    {
      type: "p",
      text: "Non ti vendo il lieto fine perfetto. Ti dico cosa è cambiato in concreto, con i numeri che ho.",
    },
    {
      type: "p",
      text: "I venerdì sera li ho ripresi. Un preventivo che mi portava via un'ora adesso esce in venti minuti, perché parte da un listino vero e non dalla memoria.",
    },
    {
      type: "p",
      text: "I DDT non li perdo più: si registrano dalla foto, in cantiere, prima che il camion riparta. E quando un cliente discute la fattura, ho il documento, la data e la firma.",
    },
    {
      type: "p",
      text: "Ma la cosa più importante è un'altra. Oggi so dire di no. Se un lavoro non margina, lo capisco prima di firmare, non a fine anno dal commercialista.",
    },
    {
      type: "quote",
      text: "Non ho costruito un gestionale per essere più ordinato. L'ho costruito per smettere di lavorare al buio e scoprire i disastri a cantiere chiuso.",
    },
    { type: "h2", text: "Cosa direi oggi a un imprenditore edile" },
    {
      type: "p",
      text: "Se stai valutando un gestionale, non ti serve la mia storia. Ti serve una decisione. Ecco cosa direi a un collega davanti a un caffè.",
    },
    {
      type: "p",
      text: "Primo: non costruirtelo. Io l'ho fatto perché nel 2019 non trovavo niente di adatto, e perché il problema mi bruciava abbastanza da starci dentro per anni. Non è una scelta furba, è stata una scelta obbligata.",
    },
    {
      type: "p",
      text: "Secondo: prima di guardare i programmi, scrivi le tue tre domande. Le mie erano margine, incassi e preventivi da richiamare. Le tue possono essere altre. Ma se non le hai scritte, comprerai la brochure più bella.",
    },
    {
      type: "p",
      text: "Terzo: fai la prova del capocantiere. Dai il telefono al tuo uomo più bravo e meno tecnologico. Se in cinque minuti non registra un'ora e una foto, quel software in cantiere non entrerà mai.",
    },
    {
      type: "ul",
      items: [
        "Scrivi le tre domande a cui il software deve rispondere ogni settimana.",
        "Prova il programma su un cantiere vero, non sulla demo del venditore.",
        "Guarda se parla di commesse, SAL, DDT e subappalti con le tue parole.",
        "Chiedi chi lo ha progettato: un tecnico o qualcuno che ha fatto cantieri.",
        "Conta il tempo che ti restituisce, non solo il canone che ti costa.",
      ],
    },
    {
      type: "p",
      text: "Se poi vuoi vedere com'è venuto fuori il mio, è tutto qui: [EdiliziaInCloud](https://www.ediliziaincloud.com/). Ma il punto non è il mio prodotto. Il punto è che nessuno dovrebbe firmare un lavoro senza sapere se ci guadagna.",
    },
    {
      type: "p",
      text: "Io ci ho messo un DDT bagnato e centoquaranta ore l'anno per capirlo. Tu magari puoi cavartela con un caffè e tre domande scritte su un foglio a quadretti.",
    },
    {
      type: "links",
      title: "Continua a leggere",
      items: [
        {
          label: "EdiliziaInCloud: come l'ho messo insieme",
          href: "/ecosistema/edilizia-in-cloud",
        },
        { label: "Chi sono e da dove vengo", href: "/chi-sono" },
        { label: "Tutti i progetti che porto avanti", href: "/ecosistema" },
        { label: "Scrivimi due righe", href: "/contatti" },
      ],
    },
  ],
  faq: [
    {
      q: "Consiglieresti a tutti di costruirsi il software?",
      a: "No, e lo dico con convinzione. Costruire costa anni, soldi e nervi. Io l'ho fatto perché non trovavo niente che parlasse la lingua del cantiere e perché quel problema mi teneva sveglio la notte. Se oggi trovi un programma che risponde alle tue tre domande, compralo e torna a fare cantieri.",
    },
    {
      q: "Quanto ci hai messo prima di avere qualcosa di usabile?",
      a: "La prima versione usabile in azienda è arrivata dopo mesi, non dopo settimane. E la usavo solo io. Il vero collaudo è stato farla accettare alla squadra: lì ho buttato via e rifatto intere schermate, perché un capocantiere non apre due volte un programma che gli chiede dieci campi.",
    },
    {
      q: "Non è un conflitto di interessi che tu venda il software che usi?",
      a: "È il contrario, secondo me. Lo uso ogni giorno sulla mia impresa, quindi i difetti li pago per primo. Quando qualcosa non funziona in cantiere lo scopro io, sotto la pioggia, non da un ticket. È la garanzia più onesta che posso darti.",
    },
    {
      q: "Da dove parte un imprenditore edile che oggi è ancora su Excel?",
      a: "Non dal software. Parte dal listino: prezzi veri di materiali e manodopera, aggiornati. Con quello in mano, il primo preventivo fatto in modo serio ti dice già se stavi lavorando sotto costo. Poi scegli lo strumento, e non prima.",
    },
  ],
};
