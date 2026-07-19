"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = { analytics: boolean; marketing: boolean };
const STORAGE_KEY = "fa_consent";

function updateGtag(c: Consent) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: c.analytics ? "granted" : "denied",
      ad_storage: c.marketing ? "granted" : "denied",
      ad_user_data: c.marketing ? "granted" : "denied",
      ad_personalization: c.marketing ? "granted" : "denied",
    });
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let hasChoice = false;
    try {
      hasChoice = !!localStorage.getItem(STORAGE_KEY);
    } catch {
      hasChoice = false;
    }
    if (!hasChoice) setOpen(true);

    const reopen = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (saved) {
          setAnalytics(!!saved.analytics);
          setMarketing(!!saved.marketing);
        }
      } catch {
        /* ignore */
      }
      setShowPrefs(true);
      setOpen(true);
    };
    window.addEventListener("fa:cookie-settings", reopen);
    return () => window.removeEventListener("fa:cookie-settings", reopen);
  }, []);

  function save(c: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch {
      /* ignore */
    }
    updateGtag(c);
    // Notifica gli altri script (es. Meta Pixel) del consenso aggiornato.
    window.dispatchEvent(new CustomEvent("fa:consent-updated", { detail: c }));
    setOpen(false);
    setShowPrefs(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferenze cookie"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-white p-6 shadow-[0_10px_40px_rgba(13,31,60,0.18)]">
        <p className="font-display text-lg font-bold text-navy-900">🍪 Rispetto la tua privacy</p>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Uso cookie tecnici per far funzionare il sito e, solo con il tuo consenso, cookie di
          analisi per capire come viene usato. Puoi accettare, rifiutare o scegliere. Dettagli nella{" "}
          <Link href="/cookie" className="text-brand-600 underline">cookie policy</Link> e nella{" "}
          <Link href="/privacy" className="text-brand-600 underline">privacy policy</Link>.
        </p>

        {showPrefs && (
          <div className="mt-5 space-y-3 rounded-xl border border-line bg-bg-soft p-4">
            <label className="flex items-start gap-3 opacity-70">
              <input type="checkbox" checked disabled className="mt-1" />
              <span className="text-sm">
                <span className="font-semibold text-navy-900">Necessari</span> — sempre attivi.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1" />
              <span className="text-sm">
                <span className="font-semibold text-navy-900">Analitici</span> — statistiche anonime di utilizzo.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1" />
              <span className="text-sm">
                <span className="font-semibold text-navy-900">Marketing</span> — misurazione campagne e retargeting.
              </span>
            </label>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={() => save({ analytics: true, marketing: true })} className="btn btn-primary sm:flex-1">
            Accetta tutti
          </button>
          <button type="button" onClick={() => save({ analytics: false, marketing: false })} className="btn btn-ghost sm:flex-1">
            Rifiuta
          </button>
          {showPrefs ? (
            <button type="button" onClick={() => save({ analytics, marketing })} className="btn btn-dark sm:flex-1">
              Salva preferenze
            </button>
          ) : (
            <button type="button" onClick={() => setShowPrefs(true)} className="text-sm font-semibold text-brand-600 hover:underline sm:self-center sm:px-2">
              Preferenze
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
