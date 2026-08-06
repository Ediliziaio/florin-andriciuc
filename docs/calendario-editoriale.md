# Calendario editoriale — florinandriciuc.com

Gli articoli con data futura sono già scritti nel repo ed **escono da soli** alla
loro data: le pagine usano `publishedArticles()` (filtro per data) e hanno
ISR attivo (`revalidate = 3600`), quindi entro un'ora dalla mezzanotte UTC
l'articolo compare in blog, home, sitemap e schema — senza deploy manuale.

Regole editoriali (vedi anche il commento in `lib/articles.ts`):
- Solo pezzi in prima persona (storia / opinione / metodo). NIENTE guide how-to:
  quelle vivono sui siti dei brand (anti-cannibalizzazione).
- Cadenza: 3 articoli a settimana (lun / mer / ven circa).
- Ogni articolo: seoTitle ≤60 char (se il titolo sfora), seoDescription ≤155,
  2-3 link interni, FAQ, categoria e relatedProject quando pertinente.

## Programmazione attuale

| Data | Slug | Categoria | Leva |
|---|---|---|---|
| 2026-08-01 | vendere-senza-svendere | Vendita | ✅ uscito |
| 2026-08-03 | marketing-edile-come-riconoscere-la-fuffa | Marketing | ✅ uscito |
| 2026-08-06 | da-quale-leva-partire | Metodo | ✅ uscito |
| 2026-08-10 | prezzo-giusto-in-edilizia | Numeri | programmato |
| 2026-08-12 | impresa-che-dipende-da-te | Gestione | programmato |
| 2026-08-14 | scegliere-i-clienti | Marketing | programmato |
| 2026-08-17 | sopralluogo-e-vendita | Vendita | programmato |
| 2026-08-19 | cosa-non-farei-fare-all-ai | AI | programmato |
| 2026-08-21 | quanto-costa-un-ora-di-squadra | Numeri | programmato |
| 2026-08-24 | primo-dipendente | Storia | programmato |
| 2026-08-26 | passaparola-non-strategia | Marketing | programmato |
| 2026-08-28 | cosa-guardo-prima-della-crescita | Metodo | programmato |
| 2026-08-31 | come-far-crescere-impresa-edile | Metodo | programmato — LUNGO, kw "come far crescere un'impresa edile" |
| 2026-09-02 | quanto-guadagna-impresa-edile | Numeri | programmato — LUNGO, kw "quanto guadagna un'impresa edile" |
| 2026-09-04 | digitalizzare-impresa-edile-da-dove-iniziare | Gestione | programmato — LUNGO, kw "digitalizzare impresa edile" |
| 2026-09-07 | quanto-spendevo-in-pubblicita | Marketing | programmato — ponte → Marketing Edile |
| 2026-09-09 | follow-up-che-non-facevo | Vendita | programmato — ponte → Vendita Edile |
| 2026-09-11 | incassare-non-e-guadagnare | Numeri | programmato — ponte → Numeri in Edilizia |
| 2026-09-14 | errore-di-marketing-imprese-edili | Marketing | programmato — ponte → Marketing Edile |
| 2026-09-16 | cantiere-perso-di-vista | Gestione | programmato — ponte → EdiliziaInCloud |
| 2026-09-18 | foto-dei-cantieri | Marketing | programmato — ponte → Marketing Edile |
| 2026-09-21 | subappalto-patti-chiari | Storia | programmato — ponte → EdiliziaInCloud |
| 2026-09-23 | burocrazia-edile-e-ai | AI | programmato — ponte → edilizia.io |
| 2026-09-25 | perche-dico-di-no | Metodo | programmato — CTA /consulenza |

## Come aggiungere la prossima infornata

1. Scrivere i nuovi articoli in `lib/articles/<slug>.ts` con `date` future
   (3 a settimana, distribuite lun/mer/ven).
2. Registrarli in `lib/articles.ts` (import + array `articles`).
3. Aggiornare questa tabella.
4. Build + push: usciranno da soli alla loro data.

Idee a scorta per la prossima infornata (settembre):
- (Gestione) Il cantiere che ho perso di vista: cosa succede senza avanzamento lavori
- (Numeri) Incassare non è guadagnare: la prima nota che non tenevo
- (Vendita) Il follow-up che non facevo: quanti lavori muoiono nel silenzio
- (Marketing) Le foto dei cantieri valgono più del logo
- (Storia) Il subappalto che mi ha insegnato a scrivere i patti chiari
- (AI) La burocrazia edile è il miglior cliente dell'AI
