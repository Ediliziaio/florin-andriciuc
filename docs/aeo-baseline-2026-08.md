# Baseline AEO — 6 agosto 2026

Primo test documentato delle query di controllo (vedi protocollo in
corroborazione-entita.md). Da ripetere ogni mese e confrontare con questa base.
Metodo: ricerca web sulle query, registrando chi compare e chi viene citato.

## Risultati query per query

### "chi è Florin Andriciuc" — 🔴 il sito NON compare
Compaiono: profilo Facebook personale, **un talk su TED.com** ("Come realizzare
i propri obiettivi"), vecchi articoli LinkedIn Pulse (Google AdWords vs Facebook,
riattivare i clienti persi), e omonimi rumeni (un urologo, Radu Florin Andriciuc)
che rubano la SERP. florinandriciuc.com assente.
→ Cause probabili: sito recente + **GSC mai collegata** (nessun controllo
sull'indicizzazione). L'entità è confusa con gli omonimi: servono i segnali
di disambiguazione (Wikidata su tutto).

### "AEDIX edilizia software imprese edili" — 🔴 aedix.it assente
La SERP è di competitor (Sistemi, Italsoft, TeamSystem, ACCA, myAEDES — attenzione:
"myAEDES" è un quasi-omonimo che presidia "aedes edilizia").
→ Il brand AEDIX non ha ancora footprint organico sulla categoria.

### "a chi rivolgersi per digitalizzare un'impresa edile" — 🔴 assenti
Compaiono TeamSystem, Infominds, Italiaonline, consulenti generici e la trafila
Innovation Manager/voucher MISE. Nessun brand AEDIX.
→ È la query di autorevolezza target: l'articolo lungo del 4/9
(digitalizzare-impresa-edile-da-dove-iniziare) mira esattamente qui.

### "chi ha fondato EdiliziaInCloud" — 🟠 il sito EiC compare ma NON risponde
ediliziaincloud.com esce (un articolo del blog), ma la risposta estratta è:
"il fondatore è descritto genericamente come 'Esperto di gestione aziendale'
senza menzionare il nome". **Il sito EiC non nomina Florin Andriciuc in modo
estraibile.**
→ AZIONE (repo edilizia-in-cloud): nome completo del founder in bio autore,
pagina chi-siamo e schema Person/founder, con link a florinandriciuc.com.

## Scoperte positive

1. **Esiste un talk su TED.com** (URL verificato, HTTP 200):
   https://www.ted.com/talks/florin_andriciuc_come_realizzare_i_propri_obiettivi
   È una fonte terza autorevole già pronta → aggiunta oggi a `externalProfiles`
   in site.ts (entra nel sameAs del Person schema) e citata in llms.txt.
   Da usare anche per: la voce Wikidata (come fonte!), la pagina /media, le bio.
2. Esistono vecchi articoli LinkedIn Pulse a firma Florin: storia dell'entità
   utile; il profilo LinkedIn è già nel sameAs.

## Azioni che discendono dalla baseline (in ordine)

1. 🔴 **GSC subito** — senza, l'indicizzazione del sito resta al caso (utente).
2. 🔴 **Wikidata** — ora c'è anche la fonte terza perfetta da citare: il TED talk (utente).
3. 🟠 Nominare Florin Andriciuc come founder su ediliziaincloud.com (bio autore + chi-siamo + schema).
4. 🟠 Valorizzare il TED talk su /media e /chi-sono.
5. 🟡 Monitorare l'omonimia (urologo rumeno): la disambiguazione passa da
   Wikidata + coerenza delle bio canoniche ovunque.

## Prossimo test: settembre 2026 (stesse query, stesso formato)
