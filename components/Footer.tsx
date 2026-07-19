import Link from "next/link";
import { Logo } from "./Logo";
import { CookiePrefsButton } from "./CookiePrefsButton";
import { IconExternal } from "./Icons";
import { TextHoverEffect, FooterBackgroundGradient } from "./ui/hover-footer";
import { nav, site } from "@/lib/site";
import { projects } from "@/lib/projects";

// Mostra i social solo se configurati (esclude i placeholder [DA CONFERMARE])
const socials = (
  [
    ["LinkedIn", site.social.linkedin],
    ["Instagram", site.social.instagram],
    ["YouTube", site.social.youtube],
    ["TikTok", site.social.tiktok],
  ] as const
).filter(([, url]) => url.startsWith("http"));

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white mt-24">
      <FooterBackgroundGradient />
      <div className="container-fa relative z-10 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-brand-100/80 text-[0.975rem] leading-relaxed">
              Costruisco software e metodi per far crescere le imprese edili. Da imprenditore, per
              gli imprenditori: strumenti pensati per chi il cantiere lo vive davvero.
            </p>
            <Link href="/contatti" className="btn btn-primary mt-7">
              {site.cta.primaryLabel}
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Naviga</h4>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-100/80 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="text-brand-100/80 hover:text-white transition-colors">Home</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Ecosistema</h4>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-100/80 hover:text-white transition-colors"
                  >
                    {p.name}
                    <IconExternal className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Contatti</h4>
            <ul className="space-y-3 text-brand-100/80">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors break-all">
                  {site.email}
                </a>
              </li>
              {socials.length > 0 ? (
                <li className="flex flex-wrap gap-4 pt-2">
                  {socials.map(([label, url]) => (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {label}
                    </a>
                  ))}
                </li>
              ) : (
                <li className="pt-2 text-xs text-brand-100/40">Social in arrivo</li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-100/60">
          <p>© {new Date().getFullYear()} {site.legalName}. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookie" className="hover:text-white transition-colors">Cookie</Link>
            <CookiePrefsButton className="hover:text-white transition-colors">Preferenze cookie</CookiePrefsButton>
          </div>
        </div>
      </div>

      {/* Wordmark gigante — si accende passandoci sopra */}
      <div className="relative z-10 hidden h-[20rem] -mt-24 -mb-24 lg:block">
        <TextHoverEffect text="Florin" />
      </div>

      {/* Wordmark statico per mobile */}
      <div className="relative z-10 pb-10 text-center lg:hidden">
        <span className="font-display text-5xl font-extrabold uppercase tracking-tight text-white/10">Florin</span>
      </div>
    </footer>
  );
}
