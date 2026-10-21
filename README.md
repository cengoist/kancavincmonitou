# Kanca Vinç & Manitou — Web Sitesi

Next.js 16 (App Router) + Tailwind CSS 4. Türkçe, mobil öncelikli, SEO ve Google Ads odaklı vitrin sitesi.

## Çalıştırma

```bash
npm install
npm run dev      # geliştirme  → http://localhost:3000
npm run build    # üretim derlemesi
npm run start    # üretim sunucusu
```

## Her şey tek yerden değişir

Telefon, WhatsApp, adres, harita konumu, alan adı, hizmet bölgeleri → **`lib/site.ts`**

| Ne değişecek | Nerede |
| --- | --- |
| Telefon / WhatsApp numarası | `lib/site.ts` → `phone` |
| Adres ve harita konumu (şu an Yerebatan Sarnıcı — test) | `lib/site.ts` → `address`, `geo` |
| Şehir (başlıklar ve SEO metinleri buradan beslenir) | `lib/site.ts` → `city` |
| Alan adı | `lib/site.ts` → `url` veya `NEXT_PUBLIC_SITE_URL` ortam değişkeni |
| Hizmet sayfaları ve SEO metinleri | `lib/services.ts` |
| Ana sayfa SSS | `lib/services.ts` → `homeFaqs` |
| Fotoğraf / video listesi | `lib/site.ts` → `photos`, `videos` (dosyalar `public/media/`) |

## Google Ads / Analytics (isteğe bağlı)

Ortam değişkenleri tanımlanmazsa hiçbir takip kodu yüklenmez. Tanımlanırsa WhatsApp, telefon ve form tıklamaları otomatik dönüşüm olarak gönderilir.

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GADS_WA_LABEL=...     # WhatsApp tıklaması dönüşüm etiketi
NEXT_PUBLIC_GADS_CALL_LABEL=...   # Telefon tıklaması dönüşüm etiketi
NEXT_PUBLIC_GADS_FORM_LABEL=...   # Form gönderimi dönüşüm etiketi
```

Search Console doğrulama kodu: `app/layout.tsx` içindeki `verification` satırı.

## Yeni medya eklemek

Ham dosyalar `app/assests/` içinde. Web için sıkıştırılmış kopyalar `public/media/` içinde kullanılır
(fotoğraflar max 1600px JPEG, videolar sessiz H.264 + `faststart`). Yeni video eklerken 24 saniyeyi geçmemesi
ve ~1.5 MB civarı olması hız için idealdir.
