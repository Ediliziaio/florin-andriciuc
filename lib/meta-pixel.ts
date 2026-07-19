import { site } from "./site";

// Meta Pixel — attivato SOLO con consenso "marketing" (GDPR).
// Il consenso è gestito dal CookieBanner (localStorage "fa_consent").

const PIXEL_ID = site.analytics.metaPixel;

// Il pixel è condiviso tra più siti: etichettiamo OGNI evento con la sorgente,
// così nell'Events Manager si riconosce da dove arriva (breakdown / custom conversion).
const SITE_TAG = site.domain.replace(/^https?:\/\//, "").replace(/\/$/, ""); // es. "florinandriciuc.com"
const SOURCE_PARAMS = { source_site: SITE_TAG, source_url: site.domain } as const;

// Evento custom dedicato a questo sito, emesso su OGNI pagina (oltre al PageView standard).
// Utile per isolare le visualizzazioni di florinandriciuc.com sul pixel condiviso.
const SITE_PV_EVENT = "PV_florinandriciuc";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    __faPixelReady?: boolean;
  }
}

export function hasMarketingConsent(): boolean {
  try {
    const c = JSON.parse(localStorage.getItem("fa_consent") || "null");
    return !!(c && c.marketing);
  } catch {
    return false;
  }
}

function loadPixelLibrary() {
  if (typeof window === "undefined" || window.fbq) return;
  /* Snippet ufficiale Meta (carica fbevents.js) */
  (function (f: Window, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: unknown = (f.fbq = function (...args: unknown[]) {
      const fn = n as { callMethod?: (...a: unknown[]) => void; queue: unknown[] };
      fn.callMethod ? fn.callMethod.apply(fn, args) : fn.queue.push(args);
    });
    if (!f._fbq) f._fbq = n;
    const fn = n as { push: unknown; loaded: boolean; version: string; queue: unknown[] };
    fn.push = n;
    fn.loaded = true;
    fn.version = "2.0";
    fn.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
}

/** Inizializza il pixel (una sola volta) se c'è consenso marketing. */
export function initMetaPixel() {
  if (!PIXEL_ID || typeof window === "undefined") return;
  if (window.__faPixelReady) return;
  if (!hasMarketingConsent()) return;
  loadPixelLibrary();
  window.fbq?.("init", PIXEL_ID);
  window.__faPixelReady = true;
  // PageView standard + evento custom del sito (entrambi etichettati con la sorgente).
  mpPageView();
}

/** Traccia un evento standard, solo se il pixel è attivo (consenso dato).
 *  Ogni evento viene etichettato con source_site così, sul pixel condiviso,
 *  si distingue da quale sito è arrivato. */
export function mpTrack(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.__faPixelReady || !window.fbq) return;
  window.fbq("track", event, { ...SOURCE_PARAMS, ...(params || {}) });
}

/** Traccia un evento CUSTOM (fbq trackCustom), solo se il pixel è attivo. */
export function mpTrackCustom(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.__faPixelReady || !window.fbq) return;
  window.fbq("trackCustom", event, { ...SOURCE_PARAMS, ...(params || {}) });
}

/** Su ogni pagina: PageView standard + evento custom PV_florinandriciuc. */
export function mpPageView() {
  mpTrack("PageView");
  mpTrackCustom(SITE_PV_EVENT);
}
