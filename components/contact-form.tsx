"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { trackLead } from "./analytics";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const field =
  "w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3.5 text-[0.95rem] text-white placeholder:text-white/35 outline-none transition-all focus:border-brand-500 focus:bg-ink-950 focus:ring-4 focus:ring-brand-500/15";

/** Formu doldurunca hazır bir WhatsApp mesajına dönüştürür — sunucu / veritabanı gerekmez. */
export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const service = String(f.get("service") ?? "");
    const place = String(f.get("place") ?? "").trim();
    const detail = String(f.get("detail") ?? "").trim();

    const text = [
      `Merhaba, ben ${name || "—"}.`,
      `${service} için teklif almak istiyorum.`,
      place && `📍 Şantiye konumu: ${place}`,
      detail && `📝 İş detayı: ${detail}`,
    ]
      .filter(Boolean)
      .join("\n");

    trackLead("form");
    window.open(`https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Teklif formu">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/80">Adınız</span>
          <input name="name" required autoComplete="name" placeholder="Ad Soyad" className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/80">Hizmet</span>
          <select name="service" defaultValue={defaultService ?? services[0].name} className={`${field} appearance-none`}>
            {services.map((s) => (
              <option key={s.slug} value={s.name} className="bg-ink-900">
                {s.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-white/80">Şantiye konumu</span>
        <input name="place" autoComplete="off" placeholder="Örn. Beşiktaş, Levent" className={field} />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-white/80">İş detayı</span>
        <textarea
          name="detail"
          rows={4}
          placeholder="Yükün cinsi, yaklaşık ağırlığı, ulaşılacak yükseklik, tarih..."
          className={`${field} resize-none`}
        />
      </label>

      <button type="submit" className="btn btn-wa w-full !min-h-14 text-base sm:text-lg">
        <WhatsAppIcon className="size-6" />
        WhatsApp ile Teklif İste
        <Send className="size-4 opacity-70" />
      </button>
      <p className="text-center text-xs text-white/45" role="status" aria-live="polite">
        {sent
          ? "WhatsApp açıldı — mesajı göndermeniz yeterli. Kısa sürede dönüş yapacağız."
          : "Gönder dediğinizde bilgileriniz hazır bir WhatsApp mesajı olarak açılır."}
      </p>
    </form>
  );
}
