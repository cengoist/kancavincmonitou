import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { site, telLink, waLink } from "@/lib/site";

/** Mobilde alt sabit çubuk, masaüstünde yüzen WhatsApp butonu. */
export function FloatingCta() {
  return (
    <>
      {/* Masaüstü */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
        className="group fixed bottom-6 right-6 z-40 hidden md:block"
      >
        <span className="absolute inset-0 rounded-full bg-wa/50 animate-ping-soft" aria-hidden="true" />
        <span className="relative flex items-center gap-3 rounded-full bg-gradient-to-b from-[#2fe074] to-wa-dark py-3 pl-3 pr-5 text-[#04210f] shadow-[0_14px_40px_-8px_rgb(37_211_102/0.7)] ring-1 ring-white/30 transition-transform duration-300 group-hover:-translate-y-1">
          <span className="grid size-11 place-items-center rounded-full bg-white/90">
            <WhatsAppIcon className="size-7 text-wa-dark" />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.7rem] font-semibold uppercase tracking-wider opacity-70">Hemen yazın</span>
            <span className="block text-base font-extrabold">Ücretsiz Teklif</span>
          </span>
        </span>
      </a>

      {/* Mobil */}
      <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/85 px-3 pt-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-[1fr_1.35fr] gap-2.5">
          <a href={telLink} className="btn btn-ghost !min-h-12 !px-3 text-[0.95rem]" aria-label={`Ara: ${site.phone.display}`}>
            <Phone className="size-5 text-brand-400" /> Ara
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa !min-h-12 !px-3 text-[0.95rem]"
          >
            <WhatsAppIcon className="size-6" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
