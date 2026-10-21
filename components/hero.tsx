import Image from "next/image";
import { BadgeCheck, Clock, HardHat, Phone, RotateCw, Ruler } from "lucide-react";
import type { CSSProperties } from "react";
import { WhatsAppIcon } from "./icons";
import { AutoVideo } from "./auto-video";
import { photos, site, telLink, videos, waLink } from "@/lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-[var(--header-h)]" aria-labelledby="hero-title">
      {/* Arka plan katmanları */}
      <div className="absolute inset-0 -z-10 bg-ink-950" />
      <div
        className="absolute -right-40 -top-40 -z-10 size-[44rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(238 37 54 / .38), transparent 62%)" }}
      />
      <div
        className="absolute -bottom-60 -left-40 -z-10 size-[40rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(255 183 3 / .16), transparent 60%)" }}
      />
      <div className="bg-grid absolute inset-0 -z-10" />

      <div className="container-x grid items-center gap-10 pb-28 pt-10 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-36 lg:pt-16 xl:gap-16">
        {/* Metin */}
        <div>
          <div className="hero-in inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.05] py-1.5 pl-2 pr-4 text-[0.82rem] font-semibold tracking-wide text-white/85 backdrop-blur" style={d(0)}>
            <span className="relative grid size-5 place-items-center">
              <span className="absolute inset-0 rounded-full bg-wa/70 animate-ping-slow" />
              <span className="relative size-2.5 rounded-full bg-wa" />
            </span>
            {site.city} · Operatörlü Hizmet · Hızlı Sevk
          </div>

          <h1
            id="hero-title"
            className="font-display hero-rise mt-6 text-[clamp(2.9rem,13vw,4.4rem)] sm:text-[clamp(4rem,7.4vw,6.4rem)] font-extrabold uppercase leading-[0.86] tracking-[0.005em] text-white"
            style={d(110)}
          >
            <span className="block">{site.city}</span>
            <span className="text-gradient-brand block">Manitou &amp; Vinç</span>
            <span className="block">Kiralama</span>
          </h1>

          <p className="hero-rise mt-7 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl" style={d(240)}>
            Teleskopik yükleyici ve <strong className="font-semibold text-white">35 metreye varan erişimli döner platformlu Manitou</strong> ile
            şantiyenizde yükü istediğiniz kata, güvenle ve hızla çıkarıyoruz. Makine + deneyimli operatör, tek pakette.
          </p>

          <div className="hero-rise mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center" style={d(360)}>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa !min-h-14 text-base sm:text-lg">
              <WhatsAppIcon className="size-6" />
              WhatsApp&apos;tan Teklif Al
            </a>
            <a href={telLink} className="btn btn-ghost !min-h-14 text-base sm:text-lg">
              <Phone className="size-5 text-brand-400" />
              <span className="tabular-nums">{site.phone.display}</span>
            </a>
          </div>

          <ul className="hero-rise mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/75 sm:grid-cols-3" style={d(480)}>
            {[
              { i: HardHat, t: "Deneyimli operatör" },
              { i: Clock, t: "Hızlı teklif & sevk" },
              { i: BadgeCheck, t: "Bakımlı Manitou filosu" },
            ].map(({ i: Icon, t }) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30">
                  <Icon className="size-4" />
                </span>
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Görsel kompozisyon */}
        <div className="hero-in relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none" style={d(300)}>
          <div className="relative mx-auto aspect-[9/14] w-[82%] max-w-[26rem] sm:aspect-[9/13.5] lg:ml-auto lg:mr-6 lg:w-[78%]">
            {/* ana video kartı */}
            <div className="animate-float absolute inset-0 overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-20px_rgb(0_0_0/0.9),0_0_0_1px_rgb(255_255_255/0.12)]">
              <AutoVideo
                src={videos.fleet.src}
                poster={videos.fleet.poster}
                width={videos.fleet.w}
                height={videos.fleet.h}
                label={videos.fleet.alt}
                className="size-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-end p-4">
                <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold">
                  <span className="size-2 rounded-full bg-brand-500 shadow-[0_0_10px_2px_rgb(238_37_54/0.9)]" />
                  Sahadan canlı görüntü
                </span>
              </div>
            </div>

            {/* ikinci foto kartı */}
            <div className="absolute -bottom-8 -left-8 hidden w-[46%] rotate-[-5deg] overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgb(0_0_0/0.9),0_0_0_1px_rgb(255_255_255/0.15)] sm:block lg:-left-14">
              <Image
                src={photos.night.src}
                alt={photos.night.alt}
                width={photos.night.w}
                height={photos.night.h}
                sizes="(min-width: 1024px) 190px, 150px"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            {/* rozetler */}
            <div className="glass absolute -right-3 top-8 z-10 rounded-2xl px-4 py-3 shadow-2xl sm:-right-8">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-500/20 text-brand-400">
                  <Ruler className="size-5" />
                </span>
                <div className="leading-tight">
                  <div className="font-display text-3xl font-extrabold text-white">35 m</div>
                  <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/60">Erişim yüksekliği</div>
                </div>
              </div>
            </div>
            <div className="glass absolute -left-3 top-1/2 z-10 hidden rounded-2xl px-4 py-3 shadow-2xl sm:block lg:-left-10">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-signal/20 text-signal">
                  <RotateCw className="size-5" />
                </span>
                <div className="leading-tight">
                  <div className="font-display text-3xl font-extrabold text-white">360°</div>
                  <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/60">Dönen platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt uyarı şeridi */}
      <div className="hazard-stripe absolute inset-x-0 bottom-0 h-2 opacity-90" aria-hidden="true" />
    </section>
  );
}
