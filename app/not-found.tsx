import Link from "next/link";
import { IconArrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-fa py-28 sm:py-36 text-center">
      <p className="stat-num text-[5rem] sm:text-[7rem] leading-none">404</p>
      <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-navy-900">Questa pagina non c&apos;è (più)</h1>
      <p className="mx-auto mt-4 max-w-md text-muted leading-relaxed">
        Come un preventivo perso tra le mail: succede. Torniamo su qualcosa di utile.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Link href="/" className="btn btn-primary">Torna alla home<IconArrow className="arrow h-4 w-4" /></Link>
        <Link href="/ecosistema" className="btn btn-ghost">Scopri l&apos;ecosistema</Link>
      </div>
    </section>
  );
}
