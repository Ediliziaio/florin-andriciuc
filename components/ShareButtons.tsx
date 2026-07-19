"use client";

import { useState } from "react";

function Ico({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
      {children}
    </svg>
  );
}

const icons = {
  whatsapp: (
    <Ico>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-5.7c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.1-.5 0a6.6 6.6 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 5 9.7a5 5 0 0 0 1 2.6 11 11 0 0 0 4.4 3.9c2 .8 2 .5 2.4.5a2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3z" />
    </Ico>
  ),
  facebook: (
    <Ico>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </Ico>
  ),
  linkedin: (
    <Ico>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2c4 0 4.8 2.7 4.8 6.1V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z" />
    </Ico>
  ),
  x: (
    <Ico>
      <path d="M18.9 2H22l-7.1 8.1L23 22h-6.6l-5.1-6.7L5.4 22H2.3l7.6-8.7L1.6 2h6.8l4.6 6.1zm-1.2 18h1.9L7.1 4H5z" />
    </Ico>
  ),
  link: (
    <Ico>
      <path d="M10.6 13.4a1 1 0 0 0 1.4 0l4-4a3 3 0 1 0-4.2-4.2l-1.6 1.6 1.4 1.4 1.6-1.6a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4-1.4l.3-.3-1.4-1.4-.3.3a3 3 0 0 0 2.8 5zm2.8-2.8a1 1 0 0 0-1.4 0l-4 4a3 3 0 1 0 4.2 4.2l1.6-1.6-1.4-1.4-1.6 1.6a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 1.4l-.3.3 1.4 1.4.3-.3a3 3 0 0 0-2.8-5z" />
    </Ico>
  ),
};

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const t = encodeURIComponent(title);
  const u = encodeURIComponent(url);

  const links: { key: keyof typeof icons; label: string; href: string; cls: string }[] = [
    { key: "whatsapp", label: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}`, cls: "hover:bg-[#25D366] hover:border-[#25D366]" },
    { key: "facebook", label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, cls: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
    { key: "linkedin", label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, cls: "hover:bg-[#0A66C2] hover:border-[#0A66C2]" },
    { key: "x", label: "X", href: `https://twitter.com/intent/tweet?text=${t}&url=${u}`, cls: "hover:bg-black hover:border-black" },
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  async function nativeShare() {
    const nav = navigator as Navigator & { share?: (d: { title: string; url: string }) => Promise<void> };
    if (nav.share) {
      try {
        await nav.share({ title, url });
      } catch {
        /* annullato */
      }
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-navy-900">Condividi:</span>
      {links.map((l) => (
        <a
          key={l.key}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Condividi su ${l.label}`}
          title={`Condividi su ${l.label}`}
          className={`grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy-700 transition hover:text-white ${l.cls}`}
        >
          {icons[l.key]}
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copia il link"
        title="Copia il link"
        className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy-700 transition hover:border-brand-400 hover:text-brand-600"
      >
        {icons.link}
      </button>
      {copied && <span className="text-sm font-semibold text-green-600">Link copiato!</span>}
      <button
        type="button"
        onClick={nativeShare}
        className="ml-1 hidden rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-700 transition hover:border-brand-400 hover:text-brand-600 max-[520px]:inline-flex"
      >
        Altro…
      </button>
    </div>
  );
}
