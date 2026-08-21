# Indicizzazione su Google — stato e piano

Verificato il 6 agosto 2026: **`site:florinandriciuc.com` restituisce ZERO pagine**.
Il sito non è indicizzato da Google. Tutto il lavoro SEO/AEO resta invisibile
su Google finché questo non si sblocca.

## Perché non basta aspettare

- Il ping della sitemap a Google è stato dismesso (giugno 2023): non esiste più
  un modo programmatico "gratuito" per chiedere l'indicizzazione, se non GSC.
- IndexNow copre Bing/Copilot (già fatto: 26 URL inviate, status 200) ma NON Google.
- I link esterni aiutano il crawl (marketingedile.com già linka il dominio da
  125 pagine prerenderizzate), ma senza GSC non c'è né garanzia né diagnosi.

## La procedura (10 minuti, serve l'account Google del proprietario)

1. Vai su https://search.google.com/search-console e accedi.
2. "Aggiungi proprietà" → scegli **Dominio** (consigliato: copre www e non-www)
   → inserisci `florinandriciuc.com`.
3. Google fornisce un **record TXT** da aggiungere al DNS:
   - Vercel → progetto → Settings → Domains → DNS records → Add → TXT con il
     valore fornito (oppure dal pannello del registrar se il DNS è altrove).
4. Torna su GSC → "Verifica" (la propagazione DNS può richiedere qualche minuto).
5. In GSC → Sitemap → invia `https://www.florinandriciuc.com/sitemap.xml`.
6. In GSC → Controllo URL → incolla `https://www.florinandriciuc.com/` →
   "Richiedi indicizzazione". Ripeti per /chi-sono, /consulenza, /metodo,
   /ecosistema e 2-3 articoli chiave (c'è un limite giornaliero: bastano questi).

In alternativa (metodo tag HTML): GSC → verifica "Tag HTML" → copia SOLO il
valore di content="..." → incollalo in `lib/site.ts` → `googleVerification`
→ commit e deploy → torna su GSC e premi Verifica.

## Cosa succede dopo (e cosa farà Claude)

- Appena GSC è attiva: monitoraggio copertura, invio sitemap, richiesta di
  indicizzazione per le pagine nuove a ogni infornata, diagnosi di eventuali
  esclusioni ("scansionata ma non indicizzata", ecc.).
- Nel frattempo, gli acceleratori già attivi: sitemap pulita con lastmod reali,
  link entranti dai domini dell'ecosistema, IndexNow per Bing/Copilot.

## Bing Webmaster Tools (bonus, 2 minuti)

Su https://www.bing.com/webmasters si può importare la proprietà direttamente
da GSC una volta verificata — un solo passaggio per entrambi i motori.
