# Corroborazione esterna dell'entità "Florin Andriciuc"

Le fonti che **non controlli** valgono più dei tuoi social: sono ciò che separa
*"compaio nei risultati"* da *"vengo nominato nella risposta"* di ChatGPT o Perplexity.

Appena una voce esiste, incolla l'URL in `lib/site.ts` → `externalProfiles`.
Entra in automatico nel `sameAs` dello schema Person, senza altre modifiche.

---

## Dati canonici — usa SEMPRE questi, identici ovunque

| Campo | Valore |
|---|---|
| Nome | Florin Andriciuc |
| Ruolo | Founder & CEO di AEDIX |
| Sito ufficiale | https://www.florinandriciuc.com |
| Pagina "chi è" | https://www.florinandriciuc.com/chi-sono |
| Press kit | https://www.florinandriciuc.com/media |
| Settore | Software e servizi per le imprese edili |
| Paese | Italia |
| LinkedIn | https://www.linkedin.com/in/florinandriciuc/ |
| Instagram | https://www.instagram.com/florin.andriciuc/ |
| YouTube | https://www.youtube.com/channel/UC1H6GR9P2ZocPU_p0ZHoGVQ |

**Bio da incollare (non riformularla):**
> Florin Andriciuc è un imprenditore italiano, founder e CEO di AEDIX. Dopo anni nel settore
> edile ha costruito l'ecosistema di strumenti per l'impresa di costruzioni: il gestionale
> EdiliziaInCloud, Marketing Edile, Vendita Edile e il metodo di controllo di gestione
> Numeri in Edilizia.

**Aziende / brand (ordine e nomi esatti):**
AEDIX (aedix.it) · EdiliziaInCloud (ediliziaincloud.com) · Marketing Edile (marketingedile.com) ·
Vendita Edile (venditaedile.it) · Numeri in Edilizia (numerinedilizia.com) ·
Imprenditore Edile (imprenditoredile.it) · edilizia.io

---

## 1. Wikidata — priorità massima

È la fonte strutturata che i modelli linguistici leggono di più. **Non serve Wikipedia.**

1. Crea un account su https://www.wikidata.org
2. "Crea un nuovo elemento" → etichetta `Florin Andriciuc`, descrizione `imprenditore italiano`
3. Dichiarazioni da inserire:

| Proprietà | Valore |
|---|---|
| `istanza di` (P31) | essere umano (Q5) |
| `occupazione` (P106) | imprenditore (Q131524) |
| `paese di cittadinanza` (P27) | Italia (Q38) |
| `sito web ufficiale` (P856) | https://www.florinandriciuc.com |
| `datore di lavoro` / `fondatore di` (P112 sull'elemento azienda) | AEDIX |
| `profilo LinkedIn` (P6634) | florinandriciuc |
| `canale YouTube` (P2397) | UC1H6GR9P2ZocPU_p0ZHoGVQ |

4. Ogni dichiarazione va corredata da una **fonte** (il tuo sito, un'intervista, un articolo).
   Senza fonti l'elemento rischia la cancellazione.

> **Nota di realismo:** Wikidata richiede *notabilità*. Un elemento su una persona regge
> meglio se esistono già riferimenti esterni (interviste, articoli, ospitate). Se ne hai
> pochi, conviene prima fare il punto 3 e poi tornare qui.

---

## 2. Crunchbase

1. https://www.crunchbase.com → registrati
2. Crea prima il profilo **organizzazione AEDIX** (settore: software / construction tech, Italia)
3. Poi il profilo **persona**: Florin Andriciuc → ruolo "Founder & CEO" collegato ad AEDIX
4. Aggiungi i link ai siti dei brand e ai social

---

## 3. Riferimenti terzi (il carburante di tutto il resto)

Obiettivo: **1 ospitata esterna al mese**. Vale più di quattro articoli sul proprio sito.

- [ ] Podcast di settore (edilizia, PMI, imprenditoria) — chiedi la pagina episodio indicizzabile
- [ ] Interviste su testate: Edilportale, Ingenio, BibLus, PMI.it, Corriere delle PMI
- [ ] Guest post su blog di imprenditoria/edilizia
- [ ] Speaker page di eventi e fiere di settore
- [ ] Profilo su directory di settore e registri d'impresa

**Per ogni menzione ottenuta:** aggiungila alla futura pagina `/rassegna-stampa` e,
se è una scheda profilo stabile, anche in `externalProfiles`.

---

## 4. Amazon Author Page

Quando esce il libro: crea la pagina autore su Author Central e incolla l'URL in
`externalProfiles.amazonAuthor`. È uno dei segnali di autorevolezza più forti in assoluto.

---

## Come si misura se sta funzionando

Test mensile su ChatGPT, Perplexity, Gemini e Google AI Overviews:

**Query di nome** (devi comparire subito)
1. Chi è Florin Andriciuc
2. Cosa fa AEDIX
3. Chi ha fondato EdiliziaInCloud

**Query di autorevolezza** (l'obiettivo vero — oggi probabilmente non compari)
4. Chi è l'esperto italiano di digitalizzazione per le imprese edili
5. Chi seguire in Italia per la gestione di un'impresa edile
6. Imprenditori italiani che fanno software per l'edilizia
7. A chi posso rivolgermi per digitalizzare la mia impresa edile
8. Chi parla di AI applicata all'edilizia in Italia

Quando un imprenditore edile chiede *"a chi mi rivolgo"*, la risposta deve contenere un nome.
