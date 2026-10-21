import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./icons";
import { ContactForm } from "./contact-form";
import { mapsDirections, mapsEmbed, mapsPlace, site, telLink, telLink2, waLink } from "@/lib/site";

export function ContactSection({ defaultService }: { defaultService?: string }) {
  const cards = [
    {
      icon: Phone,
      label: "Hemen arayın",
      value: site.phone.display,
      href: telLink,
      tone: "text-brand-400 bg-brand-500/15 ring-brand-500/30",
    },
    {
      icon: Phone,
      label: "İkinci hat",
      value: site.phone2.display,
      href: telLink2,
      tone: "text-brand-400 bg-brand-500/15 ring-brand-500/30",
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp hattı",
      value: "Mesaj gönderin",
      href: waLink(),
      tone: "text-wa bg-wa/15 ring-wa/30",
      external: true,
    },
    {
      icon: Clock,
      label: "Çalışma saatleri",
      value: site.hours,
      tone: "text-signal bg-signal/15 ring-signal/30",
    },
  ];

  return (
    <section id="iletisim" className="section-y relative overflow-x-clip">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">İletişim</span>
          <h2 className="h-section mt-4">
            Teklif almak <span className="text-gradient-brand">1 dakika</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/60">
            Aramak, WhatsApp&apos;tan yazmak ya da formu doldurmak — hangisi size kolaysa. Hemen dönüş yapıyoruz.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* Sol: kartlar + form */}
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {cards.map(({ icon: Icon, label, value, href, tone, external }, i) => {
                const inner = (
                  <>
                    <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ring-1 ${tone}`}>
                      <Icon className="size-6" />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-white/45">{label}</span>
                      <span className="mt-1 block text-[0.98rem] font-bold text-white">{value}</span>
                    </span>
                  </>
                );
                const cls =
                  "card-surface flex items-center gap-3.5 rounded-2xl p-4 transition-all duration-300 " +
                  (href ? "hover:-translate-y-1 hover:border-white/20" : "");
                return (
                  <Reveal key={label} delay={i * 80}>
                    {href ? (
                      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={120}>
              <div className="card-surface rounded-3xl p-6 sm:p-8">
                <h3 className="font-display text-3xl font-extrabold uppercase text-white">Hızlı teklif formu</h3>
                <p className="mb-6 mt-1.5 text-sm text-white/55">Birkaç bilgi yeter; geri kalanını WhatsApp&apos;ta konuşuruz.</p>
                <ContactForm defaultService={defaultService} />
              </div>
            </Reveal>
          </div>

          {/* Sağ: harita */}
          <Reveal variant="right" className="h-full">
            <div className="card-surface relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-3xl lg:min-h-[40rem]">
              <div className="map-dark relative flex-1">
                <iframe
                  title={`${site.name} konumu — Google Harita`}
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 size-full border-0"
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgb(7_7_10/0.55)]" />
              </div>
              <div className="relative z-10 flex flex-col gap-4 border-t border-white/10 bg-ink-850 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex items-start gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30">
                    <MapPin className="size-5" />
                  </span>
                  <address className="not-italic leading-snug">
                    <span className="block text-sm font-bold text-white">{site.legalName}</span>
                    <span className="mt-0.5 block text-sm text-white/60">{site.address.full}</span>
                  </address>
                </div>
                <div className="flex gap-2.5">
                  <a
                    href={mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-brand !min-h-11 flex-1 !px-5 text-sm sm:flex-none"
                  >
                    <Navigation className="size-4" /> Yol Tarifi
                  </a>
                  <a
                    href={mapsPlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost !min-h-11 flex-1 !px-5 text-sm sm:flex-none"
                  >
                    Haritada Aç
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
