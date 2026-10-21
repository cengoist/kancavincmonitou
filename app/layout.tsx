import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const body = Geist({
  variable: "--f-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const display = Barlow_Condensed({
  variable: "--f-display",
  subsets: ["latin", "latin-ext"],
  weight: ["800"],
  display: "swap",
});

const title = `${site.city} Manitou Kiralama & Vinç Kiralama | Operatörlü — ${site.name}`;
const description = `${site.city} operatörlü Manitou (teleskopik yükleyici), vinç ve JCB kepçe kiralama. 35 metreye varan erişim, döner platformlu Manitou MRT, JCB kepçe, hızlı sevk, net fiyat. WhatsApp'tan hemen teklif alın: ${site.phone.display}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  applicationName: site.name,
  keywords: [
    "manitou kiralama",
    "kiralık manitou",
    "vinç kiralama",
    "kiralık vinç",
    "operatörlü manitou",
    "operatörlü vinç kiralama",
    "teleskopik yükleyici kiralama",
    "jcb kepçe kiralama",
    "kiralık jcb",
    "beko loder kiralama",
    "monito kiralama",
    "manito kiralama",
    "mobil vinç",
    "şantiye yük kaldırma",
    "inşaat vinci kiralama",
    `${site.city.toLowerCase()} manitou kiralama`,
    `${site.city.toLowerCase()} vinç kiralama`,
    site.name,
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "construction equipment rental",
  other: {
    "geo.region": "TR-34",
    "geo.placename": site.city,
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
  // Google Search Console doğrulaması: kodu alıp aşağıya yazın.
  // verification: { google: "XXXXXXXX" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070a",
  colorScheme: "dark",
};

const businessId = `${site.url}/#business`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": businessId,
      name: site.legalName,
      alternateName: [site.name, "Kanca Manitou", "Kanca Vinç"],
      description,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: [`${site.url}/media/manitou-teleskopik-yukleyici-filosu.jpg`, `${site.url}/media/manitou-mrt-3570-doner-platformlu.jpg`],
      telephone: [site.phone.tel, site.phone2.tel],
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.district,
        addressRegion: site.address.city,
        postalCode: site.address.postalCode,
        addressCountry: site.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.hoursSpec.days,
        opens: site.hoursSpec.opens,
        closes: site.hoursSpec.closes,
      },
      areaServed: [
        { "@type": "City", name: site.city },
        ...site.areas.map((a) => ({ "@type": "AdministrativeArea", name: `${a}, ${site.city}` })),
      ],
      knowsAbout: ["Manitou kiralama", "Vinç kiralama", "JCB kepçe kiralama", "Teleskopik yükleyici", "Şantiye yük kaldırma"],
      contactPoint: [site.phone.tel, site.phone2.tel].map((tel) => ({
        "@type": "ContactPoint",
        telephone: tel,
        contactType: "customer service",
        availableLanguage: "Turkish",
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Manitou, Vinç ve JCB Kepçe Kiralama Hizmetleri",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/hizmetler/${s.slug}` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "tr-TR",
      publisher: { "@id": businessId },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" suppressHydrationWarning className={`${body.variable} ${display.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <a
          href="#icerik"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-brand-500 px-5 py-3 font-bold text-white transition-transform focus:translate-y-0"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCta />
        <Analytics />
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
