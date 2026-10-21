"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Google Analytics 4 + Google Ads dönüşüm takibi.
 * Ortam değişkenleri tanımlı değilse HİÇBİR ŞEY yüklenmez (site hızlı kalır).
 *
 *  NEXT_PUBLIC_GA_ID             → G-XXXXXXXXXX
 *  NEXT_PUBLIC_GADS_ID           → AW-XXXXXXXXX
 *  NEXT_PUBLIC_GADS_WA_LABEL     → WhatsApp tıklaması dönüşüm etiketi
 *  NEXT_PUBLIC_GADS_CALL_LABEL   → Telefon tıklaması dönüşüm etiketi
 *  NEXT_PUBLIC_GADS_FORM_LABEL   → Form gönderimi dönüşüm etiketi
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID;
const LABELS: Record<string, string | undefined> = {
  whatsapp: process.env.NEXT_PUBLIC_GADS_WA_LABEL,
  call: process.env.NEXT_PUBLIC_GADS_CALL_LABEL,
  form: process.env.NEXT_PUBLIC_GADS_FORM_LABEL,
};

type Gtag = (...args: unknown[]) => void;

export function trackLead(method: "whatsapp" | "call" | "form") {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (!gtag) return;
  gtag("event", "generate_lead", { method });
  const label = LABELS[method];
  if (ADS_ID && label) gtag("event", "conversion", { send_to: `${ADS_ID}/${label}` });
}

export function Analytics() {
  // Sayfadaki tüm WhatsApp ve telefon bağlantılarını tek yerden dinler.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      const href = a?.getAttribute("href");
      if (!href) return;
      if (href.startsWith("tel:")) trackLead("call");
      else if (href.includes("wa.me")) trackLead("whatsapp");
    };
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  const primary = GA_ID ?? ADS_ID;
  if (!primary) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${primary}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${
          GA_ID ? `gtag('config','${GA_ID}');` : ""
        }${ADS_ID ? `gtag('config','${ADS_ID}');` : ""}`}
      </Script>
    </>
  );
}
