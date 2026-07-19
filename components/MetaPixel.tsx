"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { initMetaPixel, mpPageView } from "@/lib/meta-pixel";

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
    const onConsent = () => initMetaPixel();
    window.addEventListener("fa:consent-updated", onConsent);
    return () => window.removeEventListener("fa:consent-updated", onConsent);
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
