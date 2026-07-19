import type { Article } from "./article-types";
import { articleEdiliziaInCloud } from "./articles/edilizia-in-cloud";
import { articleMarketingEdile } from "./articles/marketing-edile";
import { articleVenditaEdile } from "./articles/vendita-edile";
import { articleNumeriInEdilizia } from "./articles/numeri-in-edilizia";

export type { Article, Block } from "./article-types";

// Articoli "brevi" storici + 4 articoli SEO lunghi (uno per prodotto).
const baseArticles: Article[] = [
  {
    slug: "preventivo-edile-excel-perche-ho-smesso",
    title: "Perché ho smesso di fare il preventivo su Excel (e cosa uso oggi)",
    excerpt:
      "Per anni ho preventivato di notte su fogli Excel che si rompevano da soli. Ecco cosa mi è costato davvero e come ho risolto il problema alla radice.",
    date: "2026-07-14",
    readingTime: "6 min",
    category: "Gestione",
    relatedProject: "edilizia-in-cloud",
    body: [
      {
        type: "p",
        text: "Te lo dico da imprenditore, non da venditore di software: per anni ho fatto i preventivi come li fai tu adesso. La sera, dopo il cantiere, aprivo un file Excel copiato dal preventivo del mese prima. Cambiavo due numeri, dimenticavo di aggiornare i prezzi dei materiali, salvavo con un nome tipo \"preventivo_Rossi_DEF_2_vero.xlsx\" e speravo di aver fatto bene i conti.",
      },
      {
        type: "p",
        text: "Non era un problema di ordine. Era un problema di soldi. E ci ho messo troppo tempo a capirlo.",
      },
      { type: "h2", text: "Quanto costa davvero un preventivo su Excel" },
      {
        type: "p",
        text: "Il costo vero non è il tempo che ci passi la sera. Quello lo vedi. Il costo che non vedi è tutto il resto:",
      },
      {
        type: "ul",
        items: [
          "I prezzi dei materiali fermi a sei mesi fa, mentre il fornitore ha ritoccato tutto tre volte.",
          "Le voci di manodopera messe \"a occhio\", che ti mangiano il margine senza che tu te ne accorga.",
          "Il preventivo che parte senza sapere se su quella commessa ci guadagni o ci rimetti.",
          "Zero storico: ogni preventivo è un'isola, non impari niente da quelli vecchi.",
        ],
      },
      {
        type: "quote",
        text: "Un preventivo non serve a farti prendere il lavoro. Serve a farti prendere il lavoro giusto, al prezzo giusto.",
      },
      { type: "h2", text: "Il punto non è Excel. È che non hai un sistema" },
      {
        type: "p",
        text: "Il foglio di calcolo è solo il sintomo. Il problema è che preventivo, commessa, materiali, fatture e incassi vivono in posti diversi — un file qui, un blocco note lì, WhatsApp per il resto. Così non hai mai il quadro. E se non hai il quadro, non decidi: tiri a indovinare.",
      },
      {
        type: "p",
        text: "Quando ho smesso di rattoppare e ho deciso di costruire un sistema unico, è nato EdiliziaInCloud. Non perché mancasse \"un altro gestionale\", ma perché quelli che c'erano erano fatti per i contabili, non per chi la mattina è in cantiere con gli stivali infangati.",
      },
      { type: "h2", text: "Cosa uso oggi (e cosa cambia)" },
      {
        type: "p",
        text: "Oggi il preventivo parte da un listino aggiornato, con manodopera e materiali reali. Quando il cliente firma, quel preventivo diventa una commessa: da lì vedo avanzamento, costi veri contro preventivati, DDT, magazzino e fattura. In un posto solo. E soprattutto: so, prima di firmare, se su quel lavoro ci guadagno.",
      },
      {
        type: "p",
        text: "Non ti sto dicendo di comprare un software. Ti sto dicendo di smettere di lavorare al buio. Che tu lo faccia con EdiliziaInCloud o in un altro modo, il salto è quello: passare dal foglio che ti dice \"quanto costa\" al sistema che ti dice \"quanto ci guadagni\".",
      },
    ],
    faq: [
      {
        q: "Excel va bene per iniziare?",
        a: "Per il primissimo preventivo sì. Ma nel momento in cui gestisci più commesse insieme, Excel smette di proteggerti: non ti dice se stai marginando e non tiene lo storico. Da lì in poi ti costa più di quanto ti fa risparmiare.",
      },
      {
        q: "Cambiare gestionale non è complicato?",
        a: "La parte difficile non è il software: è decidere di avere un metodo. Un buon gestionale per l'edilizia deve partire da come lavori tu — preventivo, cantiere, fattura — non costringerti a diventare un ragioniere.",
      },
    ],
  },
  {
    slug: "impresa-edile-problema-di-margine-non-di-lavoro",
    title: "L'impresa edile non ha un problema di lavoro. Ha un problema di margine",
    excerpt:
      "Fatturi tanto ma a fine anno non resta niente? Non ti serve più lavoro. Ti serve capire dove si perde l'utile. Ecco come guardo i numeri di un'impresa edile.",
    date: "2026-07-09",
    readingTime: "7 min",
    category: "Numeri",
    relatedProject: "numeri-in-edilizia",
    body: [
      {
        type: "p",
        text: "C'è una frase che sento in ogni cantiere d'Italia: \"Lavoro, lavoro, lavoro… ma alla fine dell'anno non mi resta niente\". La reazione istintiva è una sola: prendere altro lavoro. È esattamente la mossa sbagliata.",
      },
      {
        type: "p",
        text: "Se prendi altro lavoro senza sapere quanto margini, stai solo aumentando la velocità con cui perdi soldi. Più commesse, più caos, stesso utile — o peggio.",
      },
      { type: "h2", text: "Fatturato è vanità. Utile è realtà" },
      {
        type: "p",
        text: "L'imprenditore edile è quasi sempre orgoglioso del fatturato. \"Quest'anno ho fatto un milione e due\". Bello. Ma il fatturato è la cifra più inutile che esista se non sai cosa c'è sotto. Un milione di fatturato con l'8% di margine ti lascia in tasca meno di 500.000 di fatturato al 25%. Lavori il doppio per guadagnare la metà.",
      },
      {
        type: "quote",
        text: "Non è ricca l'impresa che fattura di più. È ricca l'impresa che, su ogni commessa, sa quanto le resta.",
      },
      { type: "h2", text: "I tre numeri che nessuno guarda (e dovrebbe)" },
      {
        type: "ul",
        items: [
          "Margine di commessa: quanto resta su ogni singolo cantiere, dopo materiali, manodopera e subappalti reali. Non stimati: reali.",
          "Costi di struttura: quanto ti costa tenere aperta l'impresa ogni mese, anche se non apri un cantiere. Ufficio, mezzi, amministrazione, tu.",
          "Punto di pareggio: quanto devi fatturare, con il tuo margine medio, solo per non rimetterci.",
        ],
      },
      {
        type: "p",
        text: "Se non conosci questi tre numeri, stai guidando un camion di notte senza fari. Magari arrivi. Magari finisci nel fosso. Ma non lo stai decidendo tu.",
      },
      { type: "h2", text: "Il controllo di gestione non è roba da grandi imprese" },
      {
        type: "p",
        text: "C'è questa idea che il controllo di gestione sia una cosa da multinazionali, con l'ufficio pieno di analisti. Falso. Il controllo di gestione è semplicemente rispondere a una domanda: \"Su questo lavoro, ci guadagno o ci rimetto?\". E rispondere prima di firmare, non a fattura pagata.",
      },
      {
        type: "p",
        text: "È per questo che ho costruito Numeri in Edilizia: per dare all'imprenditore edile un metodo pratico — non un corso di ragioneria — per leggere i propri numeri e trasformare il lavoro in utile. Perché lavorare tanto lo sai già fare. Il problema è farlo rendere.",
      },
    ],
    faq: [
      {
        q: "Da dove parto se non ho mai fatto controllo di gestione?",
        a: "Da una commessa sola. Prendi l'ultimo cantiere chiuso e ricostruisci i costi veri: materiali, manodopera, subappalti. Confrontali con quello che avevi preventivato. La differenza tra i due numeri è la tua prima, vera lezione.",
      },
      {
        q: "Mi serve un commercialista o un software?",
        a: "Il commercialista ti dice cos'è successo l'anno scorso ai fini fiscali. Il controllo di gestione ti dice cosa sta succedendo adesso, commessa per commessa, per decidere oggi. Sono due cose diverse: ti serve la seconda.",
      },
    ],
  },
  {
    slug: "impresa-edile-trovare-clienti-2026",
    title: "Il passaparola non basta più: come l'impresa edile trova clienti nel 2026",
    excerpt:
      "Il passaparola è un ottimo canale. Ma è un canale che non controlli. Ecco come costruire un flusso di richieste prevedibile senza svilire il tuo lavoro.",
    date: "2026-07-02",
    readingTime: "6 min",
    category: "Marketing",
    relatedProject: "marketing-edile",
    body: [
      {
        type: "p",
        text: "\"Io i clienti li ho sempre presi col passaparola\". Verissimo. E il passaparola è oro: chi arriva raccomandato si fida già. Il problema è un altro: non lo controlli. Va bene per due mesi, poi si ferma, e tu resti con gli operai in cassa e nessun cantiere all'orizzonte.",
      },
      {
        type: "p",
        text: "Un'impresa che dipende solo dal passaparola non ha un canale di acquisizione. Ha la fortuna. E la fortuna, come strategia, è terribile.",
      },
      { type: "h2", text: "Il problema non è farti trovare. È farti scegliere" },
      {
        type: "p",
        text: "Oggi chi deve ristrutturare o costruire cerca online prima ancora di chiedere in giro. Guarda, confronta, si fa un'idea. Se tu online non ci sei — o ci sei con una pagina Facebook ferma al 2019 — hai già perso il confronto prima di parlargli.",
      },
      {
        type: "quote",
        text: "Non ti serve piacere a tutti. Ti serve farti trovare dalle poche persone della tua zona che, in questo momento, hanno un lavoro da farti fare.",
      },
      { type: "h2", text: "I tre pezzi di un sistema di acquisizione che funziona" },
      {
        type: "ul",
        items: [
          "Un'offerta chiara: cosa fai, per chi, e perché con te invece che con l'impresa a due paesi di distanza.",
          "Un modo per farti trovare: campagne locali su Meta e Google, non post a caso sperando nel like.",
          "Un modo per raccogliere e richiamare i contatti: una landing e un CRM, non i messaggi persi tra WhatsApp e le mail.",
        ],
      },
      { type: "h2", text: "Attenzione: più richieste ≠ più lavoro buono" },
      {
        type: "p",
        text: "Qui casca l'imprenditore. Fa due campagne, arrivano venti richieste, ma sono tutte gente che vuole \"solo un preventivo gratis\" o lavori da 300 euro. Il marketing senza filtro ti riempie l'agenda di perditempo. Serve qualificare: parlare solo a chi ha il lavoro e il budget che vuoi tu.",
      },
      {
        type: "p",
        text: "È il motivo per cui ho creato Marketing Edile: portare all'impresa edile richieste di clienti reali e in target, non numeri di vanità. Perché venti lead spazzatura non valgono un solo cliente giusto. E soprattutto: un flusso di richieste che decidi tu, non che ti capita.",
      },
    ],
    faq: [
      {
        q: "Quanto devo investire per iniziare?",
        a: "Meno di quanto pensi, ma con un patto: parti piccolo, misura, e reinvesti solo su ciò che porta richieste vere. Il budget non è il problema — buttare soldi su campagne senza offerta chiara e senza qualificare i contatti, quello sì.",
      },
      {
        q: "Il passaparola va abbandonato?",
        a: "Mai. Va tenuto e potenziato. L'obiettivo non è sostituirlo, è smettere di dipenderne al 100%: aggiungere un canale che controlli tu, così quando il passaparola rallenta non ti fermi.",
      },
    ],
  },
];

// Articoli lunghi SEO (uno per prodotto) + storici, ordinati per data (più recenti prima).
export const articles: Article[] = [
  articleEdiliziaInCloud,
  articleMarketingEdile,
  articleVenditaEdile,
  articleNumeriInEdilizia,
  ...baseArticles,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
