import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

// Sabit tarih: içerik değiştiğinde güncelleyin (Cache Components'ta new Date() kullanılmaz).
const lastModified = new Date("2026-10-21");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    ...services.map((s) => ({
      url: `${site.url}/hizmetler/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
