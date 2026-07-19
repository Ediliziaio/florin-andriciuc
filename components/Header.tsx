"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { IconArrow } from "./Icons";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-fa flex items-center justify-between h-[72px]">
        <Link href="/" className="shrink-0" aria-label="Florin Andriciuc — home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link px-3 py-2 text-[0.92rem] font-medium text-navy-900 rounded-full transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contatti" className="btn btn-primary text-[0.9rem] px-4 py-2.5">
            {site.cta.primaryLabel}
            <IconArrow className="arrow h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex flex-col justify-center gap-1.5 w-11 h-11 rounded-xl border border-line"
        >
          <span className={`mx-auto block h-0.5 w-5 bg-navy-900 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`mx-auto block h-0.5 w-5 bg-navy-900 transition ${open ? "opacity-0" : ""}`} />
          <span className={`mx-auto block h-0.5 w-5 bg-navy-900 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="container-fa py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-navy-900 rounded-xl hover:bg-bg-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contatti" onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">
              {site.cta.primaryLabel}
              <IconArrow className="arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
