"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconArrow } from "./Icons";
import { mpTrack } from "@/lib/meta-pixel";

// [DA CONFERMARE] — endpoint reale del form (Formspree, EdiliziaInCloud Form Builder,
// o edge function). Finché è vuoto, il form simula l'invio e porta alla pagina "Grazie".
const FORM_ENDPOINT = "";

const interessi = [
  "Gestionale (EdiliziaInCloud)",
  "Marketing e acquisizione clienti",
  "Vendita e chiusura preventivi",
  "Controllo di gestione e numeri",
  "Altro / non lo so ancora",
];

export function ContactForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("bad response");
      } else {
        // Nessun endpoint configurato: piccola pausa per simulare l'invio.
        await new Promise((r) => setTimeout(r, 500));
      }
      // Conversione Meta: Lead (solo se c'è consenso marketing).
      mpTrack("Lead", {
        content_name: "Richiesta contatto",
        content_category: String(data.interesse ?? ""),
      });
      router.push("/grazie");
    } catch {
      setError("Qualcosa è andato storto. Riprova o scrivimi direttamente via email.");
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome e cognome" name="nome" required placeholder="Mario Rossi" />
        <Field label="Impresa" name="impresa" placeholder="Rossi Costruzioni srl" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required placeholder="mario@rossicostruzioni.it" />
        <Field label="Telefono" name="telefono" type="tel" placeholder="+39 333 1234567" />
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-navy-900">Di cosa vuoi parlare?</span>
        <select
          name="interesse"
          className="rounded-xl border border-line bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          defaultValue={interessi[0]}
        >
          {interessi.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-navy-900">Raccontami la tua situazione</span>
        <textarea
          name="messaggio"
          rows={4}
          placeholder="Es. Fatturo bene ma a fine anno non mi resta niente…"
          className="rounded-xl border border-line bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>
          Ho letto la <a href="/privacy" className="text-brand-600 underline">privacy policy</a> e acconsento
          al trattamento dei dati per essere ricontattato.
        </span>
      </label>

      {error && <p className="text-sm font-medium text-accent-700">{error}</p>}

      <button type="submit" disabled={sending} className="btn btn-primary justify-center disabled:opacity-70">
        {sending ? "Invio in corso…" : "Invia la richiesta"}
        {!sending && <IconArrow className="arrow h-4 w-4" />}
      </button>
      <p className="text-center text-xs text-muted">Ti rispondo di persona, di solito entro 24 ore lavorative.</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-navy-900">
        {label} {required && <span className="text-accent-600">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-line bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}
