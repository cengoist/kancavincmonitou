"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Play, X } from "lucide-react";
import { AutoVideo } from "./auto-video";
import { Reveal } from "./reveal";
import { photos, videos } from "@/lib/site";

type Item =
  | { kind: "photo"; src: string; alt: string; w: number; h: number; caption: string; tag: string }
  | { kind: "video"; src: string; poster: string; alt: string; w: number; h: number; caption: string; tag: string };

const items: Item[] = [
  { kind: "video", ...videos.rotating, caption: "Döner platformlu Manitou ile palet kaldırma", tag: "Video" },
  { kind: "photo", ...photos.tallest, caption: "Apartman önünde ayakları açık, çalışmaya hazır", tag: "Döner Platform" },
  { kind: "video", ...videos.facade, caption: "Bina cephesinde üst kata yük kaldırma", tag: "Video" },
  { kind: "photo", ...photos.mrt, caption: "Manitou MRT 3570 — 35 m erişim", tag: "Döner Platform" },
  { kind: "photo", ...photos.fleet, caption: "Kanca Manitou filosu sahada", tag: "Filo" },
  { kind: "video", ...videos.handling, caption: "Yüksekten malzeme taşıma", tag: "Video" },
  { kind: "photo", ...photos.site, caption: "Kule vinç yanında yük ikmali", tag: "Şantiye" },
  { kind: "photo", ...photos.night, caption: "Gece vardiyasında kova ile çalışma", tag: "Gece" },
  { kind: "video", ...videos.fleet, caption: "Manitou filosu — saha görüntüsü", tag: "Video" },
  { kind: "photo", ...photos.snow, caption: "Karlı havada şantiye çalışması", tag: "Kış" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = (i: number) => {
    setActive(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);
  const go = useCallback((dir: 1 | -1) => {
    setActive((a) => (a === null ? a : (a + dir + items.length) % items.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div className="columns-2 gap-3.5 sm:gap-5 lg:columns-4 [&>*]:mb-3.5 sm:[&>*]:mb-5">
        {items.map((it, i) => (
          <Reveal key={it.src} delay={(i % 4) * 80} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`${it.caption} — büyüt`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-800 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-[0_30px_60px_-20px_rgb(238_37_54/0.5)] sm:rounded-3xl"
              style={{ aspectRatio: `${it.w} / ${it.h}` }}
            >
              {it.kind === "photo" ? (
                <Image
                  src={it.src}
                  alt={it.alt}
                  width={it.w}
                  height={it.h}
                  sizes="(min-width: 1024px) 300px, 46vw"
                  className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
              ) : (
                <AutoVideo
                  src={it.src}
                  poster={it.poster}
                  width={it.w}
                  height={it.h}
                  label={it.alt}
                  className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/25" />

              <span className="glass absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider">
                {it.kind === "video" && <Play className="size-3 fill-current text-brand-400" />}
                {it.tag}
              </span>
              <span className="glass absolute right-3 top-3 grid size-9 place-items-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="size-4" />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-3.5 text-sm font-semibold leading-snug text-white sm:p-4 sm:text-[0.95rem]">
                {it.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Medya görüntüleyici"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        {current && (
          <div className="relative grid size-full place-items-center p-4 pb-24 pt-20 sm:p-10" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex max-h-full max-w-full flex-col items-center gap-4">
              {current.kind === "photo" ? (
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  width={current.w}
                  height={current.h}
                  sizes="100vw"
                  quality={85}
                  className="max-h-[72svh] w-auto max-w-full rounded-2xl object-contain sm:max-h-[78svh] shadow-2xl"
                />
              ) : (
                <video
                  key={current.src}
                  src={current.src}
                  poster={current.poster}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="max-h-[72svh] w-auto max-w-full rounded-2xl bg-black shadow-2xl sm:max-h-[78svh]"
                  aria-label={current.alt}
                />
              )}
              <p className="text-center text-sm font-medium text-white/80 sm:text-base">
                {current.caption} <span className="ml-2 text-white/40">{(active ?? 0) + 1} / {items.length}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="glass absolute right-4 top-4 grid size-12 place-items-center rounded-full transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Önceki"
              className="glass absolute bottom-5 left-4 grid size-12 place-items-center rounded-full transition-colors hover:bg-white/20 sm:bottom-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Sonraki"
              className="glass absolute bottom-5 right-4 grid size-12 place-items-center rounded-full transition-colors hover:bg-white/20 sm:bottom-auto sm:right-8 sm:top-1/2 sm:-translate-y-1/2"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
