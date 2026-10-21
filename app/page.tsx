import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import {
  AreasSection,
  CtaBand,
  Marquee,
  ProcessSection,
  ServicesSection,
  StatsBar,
  WhySection,
} from "@/components/sections";
import { Gallery } from "@/components/gallery";
import { FaqList } from "@/components/faq";
import { ContactSection } from "@/components/contact";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { homeFaqs } from "@/lib/services";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <Marquee />
      <WhySection />

      <section id="projeler" className="section-y">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="eyebrow">Projeler &amp; Sahadan Kareler</span>
              <h2 className="h-section mt-4 max-w-3xl">
                Yaptığımız işler <span className="text-gradient-brand">kendini anlatır</span>
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-white/60">
              Gerçek şantiyelerden, gerçek makinelerimizle çekilmiş fotoğraf ve videolar. Büyütmek için dokunun.
            </p>
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
          <Reveal className="mt-12 flex justify-center">
            <a href={waLink("Merhaba, yaptığınız işleri görüp teklif almak istiyorum.")} target="_blank" rel="noopener noreferrer" className="btn btn-wa !min-h-14 text-base">
              <WhatsAppIcon className="size-6" /> Daha fazla örnek için bize yazın
            </a>
          </Reveal>
        </div>
      </section>

      <ProcessSection />
      <CtaBand />

      <section id="sss" className="section-y bg-ink-900">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Sık Sorulan Sorular</span>
            <h2 className="h-section mt-4">
              Aklınıza takılanlar <span className="text-gradient-brand">burada</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
              Cevabını bulamadığınız bir soru mu var? Doğrudan WhatsApp&apos;tan yazın, hemen yanıtlayalım.
            </p>
            <a href={waLink("Merhaba, bir sorum var.")} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-7">
              <WhatsAppIcon className="size-5 text-wa" /> Soru sor
            </a>
          </Reveal>
          <Reveal delay={100}>
            <FaqList faqs={homeFaqs} name="home-faq" />
          </Reveal>
        </div>
      </section>

      <AreasSection />
      <ContactSection />
      <JsonLd data={faqSchema} />
    </>
  );
}
