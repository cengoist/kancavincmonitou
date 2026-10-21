import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { site, telLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80svh] place-items-center overflow-hidden px-6 pt-[var(--header-h)] text-center">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div>
        <p className="font-display text-[clamp(7rem,28vw,16rem)] font-extrabold leading-none text-gradient-brand">404</p>
        <h1 className="font-display -mt-2 text-4xl font-extrabold uppercase text-white sm:text-5xl">Bu sayfa şantiyede kayıp</h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-brand">
            <Home className="size-5" /> Ana sayfaya dön
          </Link>
          <a href={telLink} className="btn btn-ghost">
            <Phone className="size-5 text-brand-400" /> {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
