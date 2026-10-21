import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  Construction,
  Forklift,
  HardHat,
  MapPin,
  MessageSquareText,
  Package,
  Phone,
  RotateCw,
  Ruler,
  ShieldCheck,
  Shovel,
  Snowflake,
  Truck,
  Wallet,
} from "lucide-react";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./icons";
import { services, type Service } from "@/lib/services";
import { photos, site, telLink, waLink } from "@/lib/site";

export const serviceIcons = {
  forklift: Forklift,
  crane: Construction,
  hardhat: HardHat,
  package: Package,
  shovel: Shovel,
} as const;

/* ------------------------------------------------------------------ */
/*  İstatistik çubuğu                                                  */
/* ------------------------------------------------------------------ */

export function StatsBar() {
  const stats = [
    { icon: Ruler, value: "35 m", label: "Erişim yüksekliği" },
    { icon: RotateCw, value: "360°", label: "Dönen platform (MRT)" },
    { icon: Forklift, value: "Çatal & Kova", label: "Ataşman seçenekleri" },
    { icon: MessageSquareText, value: "Hızlı Teklif", label: "WhatsApp'tan dakikalar içinde" },
  ];
  return (
    <div className="container-x relative z-10 -mt-16 sm:-mt-20 lg:-mt-24">
      <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.9)] lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="group relative flex items-center gap-3.5 bg-ink-900 p-4 sm:p-6 lg:p-7">
            <span className="hidden size-12 shrink-0 place-items-center rounded-2xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 sm:grid">
              <Icon className="size-6" />
            </span>
            <div className="min-w-0">
              <div className="font-display text-[1.65rem] font-extrabold uppercase leading-none text-white sm:text-4xl">{value}</div>
              <div className="mt-1.5 text-xs leading-snug text-white/55 sm:text-sm">{label}</div>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Anahtar kelime şeridi                                              */
/* ------------------------------------------------------------------ */

const marqueeWords = [
  "Manitou Kiralama",
  "Vinç Kiralama",
  "JCB Kepçe Kiralama",
  "Operatörlü Hizmet",
  "Teleskopik Yükleyici",
  "Şantiye Yük Kaldırma",
  "Döner Platformlu Manitou",
  "Malzeme Taşıma",
  "Çatal & Kova",
];

export function Marquee() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {marqueeWords.map((w) => (
        <li key={w} className="flex items-center gap-8">
          <span className="font-display text-3xl font-extrabold uppercase tracking-wide text-white/90 sm:text-4xl">{w}</span>
          <span className="size-2.5 rotate-45 bg-brand-500" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-ink-900 py-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="animate-marquee flex w-max">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hizmetler                                                          */
/* ------------------------------------------------------------------ */

function ServiceCard({ s, i, className = "" }: { s: Service; i: number; className?: string }) {
  const Icon = serviceIcons[s.icon];
  return (
    <Reveal delay={i * 90} className={`h-full ${className}`}>
      <Link
        href={`/hizmetler/${s.slug}`}
        className="group relative flex h-full min-h-[27rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-ink-850 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/60 hover:shadow-[0_30px_70px_-25px_rgb(238_37_54/0.55)] sm:min-h-[32rem]"
      >
        {s.photo ? (
          <Image
            src={s.photo.src}
            alt={s.photo.alt}
            width={s.photo.w}
            height={s.photo.h}
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 92vw"
            className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-ink-800 via-ink-850 to-ink-950" aria-hidden="true">
            <div className="bg-grid absolute inset-0 opacity-70" />
            <div
              className="absolute -right-16 -top-16 size-80 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              style={{ background: "radial-gradient(circle, rgb(238 37 54 / .45), transparent 65%)", opacity: 0.7 }}
            />
            <Icon
              className="absolute left-1/2 top-[34%] size-44 -translate-x-1/2 -translate-y-1/2 text-white/[0.08] transition-all duration-700 group-hover:scale-110 group-hover:text-brand-500/25"
              strokeWidth={1.2}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 from-5% via-ink-950/55 via-40% to-transparent transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-700/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="font-display absolute left-5 top-5 text-6xl font-extrabold leading-none text-white/15 transition-colors duration-500 group-hover:text-white/30">
          0{i + 1}
        </span>
        <span className="glass absolute right-5 top-5 grid size-12 place-items-center rounded-2xl text-white transition-all duration-500 group-hover:bg-brand-500 group-hover:ring-brand-400">
          <Icon className="size-6" />
        </span>

        <div className="relative p-6 sm:p-7">
          <h3 className="font-display text-[2rem] font-extrabold uppercase leading-none text-white">{s.name}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-white/70">{s.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-300 transition-all duration-300 group-hover:gap-3.5 group-hover:text-white">
            Detaylı bilgi <ArrowRight className="size-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServicesSection() {
  return (
    <section id="hizmetler" className="section-y relative">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <span className="eyebrow">Hizmetlerimiz</span>
            <h2 className="h-section mt-4 max-w-3xl">
              Her yük, her yükseklik için <span className="text-gradient-brand">doğru makine</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-white/60">
              Şantiyenizin ihtiyacına göre Manitou teleskopik yükleyici, döner platformlu vinç veya JCB kepçe çözümü sunuyoruz.
              Hepsi operatörlü, hepsi sahaya hazır.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.slug}
              s={s}
              i={i}
              className={
                i < 2
                  ? "lg:col-span-3"
                  : i === services.length - 1 && services.length % 2 === 1
                    ? "sm:col-span-2 lg:col-span-2"
                    : "lg:col-span-2"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Neden biz                                                          */
/* ------------------------------------------------------------------ */

const reasons = [
  { icon: HardHat, title: "Deneyimli operatör", text: "Şantiye düzenine, yük bağlamaya ve işaretleşmeye hâkim ekiple çalışırsınız." },
  { icon: Ruler, title: "35 metreye varan erişim", text: "Çok katlı yapılarda yükü doğrudan çalışılan kata, tam yerine bırakırız." },
  { icon: Truck, title: "Hızlı sevkiyat", text: "Müsaitliğe göre en kısa sürede sahada, çalışmaya hazır olarak buluşuruz." },
  { icon: Snowflake, title: "Her havada sahada", text: "Çamur, kar, yağmur ve gece vardiyasında çalışma deneyimimiz var." },
  { icon: ShieldCheck, title: "Güvenlik önceliği", text: "Zemin ve yük değerlendirmesi yapar, riskli durumda güvenli alternatifi öneririz." },
  { icon: Wallet, title: "Şeffaf teklif", text: "İş başlamadan net fiyat. Saatlik, günlük veya proje bazlı esnek planlama." },
];

export function WhySection() {
  return (
    <section id="neden-biz" className="section-y relative overflow-hidden bg-ink-900">
      <div
        className="absolute left-1/2 top-0 -z-0 h-px w-2/3 -translate-x-1/2"
        style={{ background: "linear-gradient(90deg, transparent, rgb(238 37 54 / .6), transparent)" }}
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Neden Kanca Vinç</span>
          <h2 className="h-section mt-4">
            İşiniz bizde <span className="text-gradient-brand">güvende</span>, zamanında yerinde
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            Bir şantiyede her saat para demek. Bu yüzden doğru makineyi, deneyimli operatörü ve net bir planı baştan
            ayarlıyoruz; siz yalnızca işinizin ilerlemesini izliyorsunuz.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-white/10">
            <Image
              src={photos.snow.src}
              alt={photos.snow.alt}
              width={photos.snow.w}
              height={photos.snow.h}
              sizes="(min-width: 1024px) 460px, 92vw"
              className="aspect-[4/3] w-full object-cover object-[50%_60%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-2xl font-extrabold uppercase leading-tight text-white">
                Kar da olsa, gece de olsa —<br />
                <span className="text-brand-400">işiniz durmasın.</span>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 2) * 90 + Math.floor(i / 2) * 60} className="h-full">
              <div className="card-surface group relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 sm:p-7">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-brand-500/10 blur-2xl transition-all duration-500 group-hover:size-40 group-hover:bg-brand-500/25" />
                <span className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_10px_30px_-8px_rgb(238_37_54/0.7)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="size-7" />
                </span>
                <h3 className="font-display relative mt-6 text-[1.7rem] font-extrabold uppercase leading-none text-white">{title}</h3>
                <p className="relative mt-3 leading-relaxed text-white/60">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Süreç                                                              */
/* ------------------------------------------------------------------ */

const steps = [
  { icon: MessageSquareText, title: "Bize ulaşın", text: "WhatsApp'tan yazın veya arayın. Konum ve işin türünü kısaca anlatın." },
  { icon: ClipboardList, title: "Net teklif alın", text: "İhtiyaca uygun makineyi seçer, süre ve fiyatı açıkça iletiriz." },
  { icon: Truck, title: "Sahaya sevk", text: "Makine ve operatör planlanan saatte şantiyenizde hazır olur." },
  { icon: CalendarCheck, title: "İş tamam", text: "Yükleriniz güvenle yerine ulaşır, şantiyeniz akmaya devam eder." },
];

export function ProcessSection() {
  return (
    <section id="surec" className="section-y">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">Nasıl Çalışırız</span>
          <h2 className="h-section mt-4">
            4 adımda <span className="text-gradient-brand">sahada</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">Süreç basit ve hızlı. Telefonunuzdan birkaç mesajla başlıyor.</p>
        </Reveal>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-[12%] right-[12%] top-[3.1rem] hidden h-px lg:block"
            style={{ background: "repeating-linear-gradient(90deg, rgb(238 37 54 / .7) 0 8px, transparent 8px 18px)" }}
            aria-hidden="true"
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 110}>
              <div className="relative text-center lg:px-2">
                <div className="relative mx-auto grid size-[6.2rem] place-items-center rounded-[1.75rem] border border-white/10 bg-ink-800 shadow-[0_20px_50px_-15px_rgb(0_0_0/0.8)]">
                  <Icon className="size-9 text-brand-400" />
                  <span className="font-display absolute -right-3 -top-3 grid size-9 place-items-center rounded-full bg-brand-500 text-lg font-extrabold text-white ring-4 ring-ink-950">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-3xl font-extrabold uppercase text-white">{title}</h3>
                <p className="mx-auto mt-2.5 max-w-[17rem] leading-relaxed text-white/60">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Hizmet bölgeleri                                                   */
/* ------------------------------------------------------------------ */

export function AreasSection() {
  return (
    <section aria-labelledby="bolgeler" className="border-y border-white/[0.07] bg-ink-900 py-16 sm:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">Hizmet Bölgeleri</span>
          <h2 id="bolgeler" className="h-section mt-4 !text-[clamp(2rem,4.5vw,3.2rem)]">
            {site.cityGen} <span className="text-gradient-brand">tüm semtlerine</span> hizmet veriyoruz
          </h2>
          <p className="mt-4 max-w-md text-white/60">
            Avrupa ve Anadolu yakasının her semtindeki şantiyeye makine ve operatör gönderiyoruz. Aşağıdakiler örnek bölgelerdir; semtiniz listede olmasa da bizi arayın.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-wrap gap-2.5">
            {site.areas.map((a) => (
              <li
                key={a}
                className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:border-brand-500/60 hover:bg-brand-500/15 hover:text-white"
              >
                <MapPin className="size-3.5 text-brand-400" />
                {a}<span className="hidden text-white/40 sm:inline"> manitou &amp; vinç</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA bandı                                                          */
/* ------------------------------------------------------------------ */

export function CtaBand({ title = "Projenizi anlatın, teklifi hemen gönderelim." }: { title?: string }) {
  return (
    <section className="section-y !pb-0">
      <div className="container-x">
        <Reveal variant="scale">
          <div className="noise relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 -z-10 size-96 rounded-full bg-signal/25 blur-3xl" />
            <div className="hazard-stripe absolute inset-x-0 top-0 h-2 opacity-90" aria-hidden="true" />
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold uppercase leading-[0.92] text-white text-balance">
                  {title}
                </h2>
                <p className="mt-4 max-w-xl text-lg text-white/85">
                  Konumu ve işin türünü yazmanız yeterli. Dakikalar içinde geri dönüş yapıyoruz.
                </p>
              </div>
              <div className="flex flex-col gap-3.5">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa !min-h-16 text-lg">
                  <WhatsAppIcon className="size-7" /> WhatsApp&apos;tan Yaz
                </a>
                <a
                  href={telLink}
                  className="btn !min-h-16 border border-white/30 bg-black/25 text-lg text-white backdrop-blur hover:bg-black/40"
                >
                  <Phone className="size-5" /> <span className="tabular-nums">{site.phone.display}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
