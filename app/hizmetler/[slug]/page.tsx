import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, Phone } from "lucide-react";
import { CtaBand, serviceIcons } from "@/components/sections";
import { ContactSection } from "@/components/contact";
import { FaqList } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { getService, services } from "@/lib/services";
import { site, telLink, waLink } from "@/lib/site";

// Hizmet slug'ları sabit ve hepsi build sırasında tam HTML olarak üretilir (○).
// Bilinmeyen slug zaten notFound() ile 404 döner; bu yüzden anlık-gezinme doğrulamasını kapatıyoruz.
export const instant = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const url = `/hizmetler/${s.slug}`;
  return {
    title: { absolute: `${s.seoTitle} | ${site.shortName}` },
    description: s.seoDescription,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: s.seoTitle,
      description: s.seoDescription,
      locale: "tr_TR",
      siteName: site.name,
      ...(s.photo ? { images: [{ url: s.photo.src, width: s.photo.w, height: s.photo.h, alt: s.photo.alt }] } : {}),
    },
    twitter: { card: "summary_large_image", title: s.seoTitle, description: s.seoDescription, ...(s.photo ? { images: [s.photo.src] } : {}) },
  };
}

export default async function ServicePage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const Icon = serviceIcons[s.icon];
  const others = services.filter((x) => x.slug !== s.slug);
  const pageUrl = `${site.url}/hizmetler/${s.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: s.h1,
        serviceType: s.name,
        description: s.seoDescription,
        url: pageUrl,
        image: s.photo ? `${site.url}${s.photo.src}` : `${site.url}/opengraph-image.jpg`,
        provider: { "@id": `${site.url}/#business` },
        areaServed: { "@type": "City", name: site.city },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.url },
          { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${site.url}/#hizmetler` },
          { "@type": "ListItem", position: 3, name: s.name, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      {/* Üst bölüm */}
      <section className="relative isolate overflow-hidden pt-[var(--header-h)]">
        <div
          className="absolute -right-40 -top-40 -z-10 size-[40rem] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgb(238 37 54 / .35), transparent 62%)" }}
        />
        <div className="bg-grid absolute inset-0 -z-10" />

        <div className="container-x grid items-center gap-12 pb-20 pt-8 sm:pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
          <div>
            <nav aria-label="Sayfa yolu" className="hero-in flex flex-wrap items-center gap-1.5 text-sm text-white/50">
              <Link href="/" className="transition-colors hover:text-white">
                Ana Sayfa
              </Link>
              <ChevronRight className="size-4" />
              <Link href="/#hizmetler" className="transition-colors hover:text-white">
                Hizmetler
              </Link>
              <ChevronRight className="size-4" />
              <span aria-current="page" className="font-semibold text-white/80">
                {s.name}
              </span>
            </nav>

            <div className="hero-in mt-7 flex items-center gap-3" style={{ "--d": "80ms" } as React.CSSProperties}>
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30">
                <Icon className="size-6" />
              </span>
              <span className="eyebrow !tracking-[0.2em]">{s.name}</span>
            </div>

            <h1
              className="font-display hero-rise mt-5 text-[clamp(2.8rem,8.5vw,6rem)] font-extrabold uppercase leading-[0.9] text-white text-balance"
              style={{ "--d": "160ms" } as React.CSSProperties}
            >
              {s.h1}
            </h1>
            <p className="hero-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl" style={{ "--d": "260ms" } as React.CSSProperties}>
              {s.lead}
            </p>
            <div className="hero-rise mt-9 flex flex-col gap-3.5 sm:flex-row" style={{ "--d": "360ms" } as React.CSSProperties}>
              <a
                href={waLink(`Merhaba, ${s.name} için teklif almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa !min-h-14 text-base sm:text-lg"
              >
                <WhatsAppIcon className="size-6" /> WhatsApp&apos;tan Teklif Al
              </a>
              <a href={telLink} className="btn btn-ghost !min-h-14 text-base sm:text-lg">
                <Phone className="size-5 text-brand-400" /> <span className="tabular-nums">{site.phone.display}</span>
              </a>
            </div>
          </div>

          <div className="hero-in relative mx-auto w-full max-w-sm lg:max-w-none" style={{ "--d": "240ms" } as React.CSSProperties}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-20px_rgb(0_0_0/0.9),0_0_0_1px_rgb(255_255_255/0.12)]">
              {s.photo ? (
                <>
                  <Image
                    src={s.photo.src}
                    alt={s.photo.alt}
                    width={s.photo.w}
                    height={s.photo.h}
                    priority
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                </>
              ) : (
                <div className="relative grid aspect-[4/5] w-full place-items-center bg-gradient-to-br from-ink-800 via-ink-850 to-ink-950" aria-hidden="true">
                  <div className="bg-grid absolute inset-0" />
                  <div
                    className="absolute -right-20 -top-20 size-96 rounded-full blur-3xl"
                    style={{ background: "radial-gradient(circle, rgb(238 37 54 / .5), transparent 65%)" }}
                  />
                  <Icon className="relative size-40 text-brand-500/70 drop-shadow-[0_0_40px_rgb(238_37_54/0.6)]" strokeWidth={1.1} />
                </div>
              )}
            </div>
            <div className="hazard-stripe absolute -bottom-3 left-8 right-8 -z-10 h-6 rounded-full opacity-80 blur-[1px]" aria-hidden="true" />
          </div>
        </div>
        <div className="hazard-stripe absolute inset-x-0 bottom-0 h-2 opacity-90" aria-hidden="true" />
      </section>

      {/* İçerik */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <article>
            <Reveal>
              <span className="eyebrow">Hizmet Detayı</span>
              <h2 className="h-section mt-4 !text-[clamp(2rem,4.8vw,3.4rem)]">
                {s.name} hakkında <span className="text-gradient-brand">bilmeniz gerekenler</span>
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6 text-[1.06rem] leading-[1.8] text-white/70">
              {s.body.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <h3 className="font-display text-3xl font-extrabold uppercase text-white">Kullanım alanları</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.uses.map((u) => (
                  <li key={u} className="card-surface flex items-start gap-3 rounded-2xl p-4">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    <span className="font-medium text-white/85">{u}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            {s.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} variant="right">
                <div className="card-surface rounded-3xl p-6 transition-colors hover:border-brand-500/40">
                  <h3 className="font-display text-[1.7rem] font-extrabold uppercase leading-none text-white">{b.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </aside>
        </div>
      </section>

      <section className="section-y bg-ink-900 !pt-16">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">SSS</span>
            <h2 className="h-section mt-4 !text-[clamp(2rem,4.8vw,3.4rem)]">
              {s.name} <span className="text-gradient-brand">sık sorulanlar</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <FaqList faqs={s.faqs} name={`faq-${s.slug}`} />
          </Reveal>
        </div>
      </section>

      <CtaBand title={`${s.name} için hemen teklif alın.`} />

      {/* Diğer hizmetler */}
      <section className="section-y !pb-0">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white">Diğer hizmetlerimiz</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((o, i) => {
              const OIcon = serviceIcons[o.icon];
              return (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link
                    href={`/hizmetler/${o.slug}`}
                    className="card-surface group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30">
                      <OIcon className="size-6" />
                    </span>
                    <span className="flex-1 font-display text-2xl font-extrabold uppercase leading-none text-white">{o.name}</span>
                    <ArrowRight className="size-5 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-brand-400" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection defaultService={s.name} />
      <JsonLd data={schema} />
    </>
  );
}
