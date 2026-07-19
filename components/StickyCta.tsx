"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { mpTrack } from "@/lib/meta-pixel";
import { IconArrow, IconPhone, IconGrid } from "./Icons";

// Non mostrarla dove sarebbe ridondante.
const HIDDEN_ON = ["/contatti", "/grazie"];

export function StickyCta() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [choiceMade, setChoiceMade] = useState(false); // niente barra finché il cookie banner è aperto

  useEffect(() => {
    const check = () => {
      try {
        setChoiceMade(!!localStorage.getItem("fa_consent"));
      } catch {
        setChoiceMade(false);
      }
    };
    check();
    window.addEventListener("fa:consent-updated", check);
    return () => window.removeEventListener("fa:consent-updated", check);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 460);
      const doc = document.documentElement;
      setNearFooter(window.innerHeight + window.scrollY > doc.scrollHeight - 340);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (HIDDEN_ON.includes(pathname)) return null;

  const show = scrolled && choiceMade && !nearFooter;
  const phoneOk = !site.phone.includes("[");
  const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="border-t border-white/10 bg-navy-900/95 shadow-[0_-10px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur">
        <div className="container-fa flex items-center justify-between gap-3 py-3">
          {/* CTA principale */}
          <Link
            href="/contatti"
            className="btn btn-primary flex-1 justify-center sm:flex-none sm:px-6"
          >
            <IconArrow className="h-4 w-4" />
            Consulenza gratuita
          </Link>

          {/* Link secondario (solo desktop) */}
          <Link
            href="/ecosistema"
            className="hidden items-center gap-2 px-4 text-sm font-semibold text-brand-100/90 transition hover:text-white sm:inline-flex"
          >
            <IconGrid className="h-5 w-5 text-gold-400" />
            Scopri cosa faccio
          </Link>

          {/* Telefono */}
          {phoneOk ? (
            <a
              href={telHref}
              onClick={() => mpTrack("Contact", { method: "phone" })}
              className="inline-flex items-center gap-2 px-2 text-sm font-bold text-white transition hover:text-gold-400 sm:px-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 sm:h-auto sm:w-auto sm:bg-transparent">
                <IconPhone className="h-5 w-5 text-gold-400" />
              </span>
              <span className="hidden sm:inline">{site.phone}</span>
            </a>
          ) : (
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-2 text-sm font-bold text-white transition hover:text-gold-400 sm:px-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 sm:h-auto sm:w-auto sm:bg-transparent">
                <IconPhone className="h-5 w-5 text-gold-400" />
              </span>
              <span className="hidden sm:inline">Chiamami</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
