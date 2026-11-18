"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { initMetaPixel, mpPageView, setMetaMarketingConsent } from "@/lib/meta-pixel";

/**
 * Inizializza il Meta Pixel quando c'è consenso marketing e traccia il
 * PageView a ogni cambio rotta (SPA). Va montato una volta nel layout.
 */
export function MetaPixel() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useEffect(() => {
    // Prova a inizializzare (parte solo se il consenso marketing è già dato).
    initMetaPixel();
    // Reagisce al consenso dato/aggiornato dal CookieBanner.
    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ marketing?: unknown }>).detail;
      if (typeof detail?.marketing === "boolean") setMetaMarketingConsent(detail.marketing);
    };
    window.addEventListener("fa:consent-updated", onConsent);
    const stored = (event: StorageEvent) => {
      if (event.key !== "fa_consent" && event.key !== null) return;
      try { setMetaMarketingConsent(JSON.parse(localStorage.getItem("fa_consent") || "null")?.marketing === true); }
      catch { setMetaMarketingConsent(false); }
    };
    window.addEventListener("storage", stored);
    return () => { window.removeEventListener("fa:consent-updated", onConsent); window.removeEventListener("storage", stored); };
  }, []);

  useEffect(() => {
    // L'init iniziale traccia già il primo PageView: salta il primo effetto.
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    mpPageView();
  }, [pathname]);

  return null;
}
