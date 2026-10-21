"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { LogoMark, WhatsAppIcon } from "./icons";
import { site, telLink, waLink } from "@/lib/site";

const nav = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#projeler", label: "Projeler" },
  { href: "/#surec", label: "Nasıl Çalışırız" },
  { href: "/#sss", label: "SSS" },
  { href: "/#iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-white/[0.07] bg-ink-950/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
        style={{ height: "var(--header-h)" }}
      >
        <div className="container-x flex h-full items-center justify-between gap-4">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label={`${site.name} — Ana sayfa`}>
            <LogoMark className="size-10 shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105 sm:size-11" />
            <span className="whitespace-nowrap leading-none">
              <span className="font-display block text-[1.45rem] font-extrabold uppercase tracking-wide text-white sm:text-[1.75rem]">
                Kanca <span className="text-brand-400">Vinç</span>
              </span>
              <span className="mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-white/55">
                &amp; Manitou
              </span>
            </span>
          </Link>

          <nav aria-label="Ana menü" className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="group relative rounded-full px-4 py-2 text-[0.95rem] font-medium text-white/75 transition-colors hover:text-white"
              >
                {n.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={telLink}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-white md:flex"
              aria-label={`Ara: ${site.phone.display}`}
            >
              <span className="grid size-8 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
                <Phone className="size-4 text-brand-400" />
              </span>
              <span className="tabular-nums">{site.phone.display}</span>
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa !min-h-11 !px-4 text-sm sm:!px-5"
            >
              <WhatsAppIcon className="size-5" />
              <span className="hidden sm:inline">WhatsApp Teklif</span>
              <span className="sm:hidden">Teklif Al</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full bg-white/[0.07] ring-1 ring-white/15 transition-colors hover:bg-white/15 lg:hidden"
              aria-expanded={open}
              aria-controls="mobil-menu"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobil menü */}
      <div
        id="mobil-menu"
        className={`fixed inset-0 z-[45] bg-ink-950/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="container-x flex h-full flex-col justify-between pb-10 pt-[calc(var(--header-h)+1.5rem)]">
          <nav aria-label="Mobil menü" className="flex flex-col">
            {nav.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="font-display flex items-center justify-between border-b border-white/[0.08] py-5 text-4xl font-extrabold uppercase text-white transition-all duration-500"
                style={{
                  transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(18px)",
                }}
              >
                {n.label}
                <span className="text-lg text-brand-400">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a href={telLink} className="btn btn-ghost w-full" tabIndex={open ? 0 : -1}>
              <Phone className="size-5 text-brand-400" /> {site.phone.display}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa w-full"
              tabIndex={open ? 0 : -1}
            >
              <WhatsAppIcon className="size-6" /> WhatsApp&apos;tan Teklif Al
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
