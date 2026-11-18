"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";
import { SITE_ANALYTICS_CONFIG } from "@/lib/analytics-config";

type Choice = { analytics: boolean; marketing: boolean };
type Runtime = {
  configure: (config: typeof SITE_ANALYTICS_CONFIG) => unknown;
  updateConsent: (choice: Choice) => unknown;
};

const STORAGE_KEY = "fa_consent";
const CONSENT_EVENT = "fa:consent-updated";

function decodeConsent(value: unknown): Choice | null {
  if (!value || typeof value !== "object") return null;
  const choice = value as Record<string, unknown>;
  if (typeof choice.analytics !== "boolean" || typeof choice.marketing !== "boolean") return null;
  return { analytics: choice.analytics, marketing: choice.marketing };
}

function persistedConsent(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return decodeConsent(raw ? JSON.parse(raw) : null);
  } catch {
    return null;
  }
}

function storedConsent(): Choice {
  return persistedConsent() ?? { analytics: false, marketing: false };
}

/** Google is owned by one consent-gated GTM runtime. No route/page_view calls. */
export function SiteAnalytics() {
  const pendingChoice = useRef<Choice | null>(null);
  const failedRevocation = useRef(false);
  const sync = useCallback((choice?: Choice) => {
    if (!SITE_ANALYTICS_CONFIG.enabled) return;
    pendingChoice.current = failedRevocation.current ? { analytics: false, marketing: false } : choice ?? pendingChoice.current ?? storedConsent();
    const runtime = (window as unknown as { EICAnalytics?: Runtime }).EICAnalytics;
    runtime?.configure({ ...SITE_ANALYTICS_CONFIG, reloadOnRevoke: !failedRevocation.current && SITE_ANALYTICS_CONFIG.reloadOnRevoke });
    runtime?.updateConsent(pendingChoice.current);
  }, []);

  useEffect(() => {
    if (!SITE_ANALYTICS_CONFIG.enabled) return;
    sync(storedConsent());
    const changed = (event: Event) => {
      const detail = decodeConsent((event as CustomEvent<unknown>).detail);
      // Never reload into an older grant when the CMP could not persist denial.
      if (detail?.analytics === false && persistedConsent()?.analytics !== false) failedRevocation.current = true;
      sync(detail ?? storedConsent());
    };
    const storage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) sync(storedConsent());
    };
    window.addEventListener(CONSENT_EVENT, changed);
    window.addEventListener("storage", storage);
    return () => {
      window.removeEventListener(CONSENT_EVENT, changed);
      window.removeEventListener("storage", storage);
    };
  }, [sync]);

  if (!SITE_ANALYTICS_CONFIG.enabled) return null;
  return <Script src="/analytics-loader.js" strategy="afterInteractive" onReady={() => sync()} />;
}
