import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { LinkedInIcon, LogoMark, WhatsAppIcon } from "./icons";
import { services } from "@/lib/services";
import { site, telLink, telLink2, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-950 pb-28 pt-16 md:pb-10">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <LogoMark className="size-12" />
              <span className="font-display text-3xl font-extrabold uppercase leading-none text-white">
                Kanca <span className="text-brand-400">Vinç</span>
                <span className="mt-1 block text-[0.65rem] font-semibold tracking-[0.34em] text-white/50">&amp; MANİTOU</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-white/55">
              {site.city} genelinde operatörlü Manitou teleskopik yükleyici, döner platformlu vinç ve JCB kepçe kiralama. Şantiyenizin
              güvenilir yük kaldırma ortağı.
            </p>
          </div>

          <nav aria-label="Hizmetler">
            <h2 className="font-display text-xl font-extrabold uppercase tracking-wider text-white">Hizmetler</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}`} className="text-white/60 transition-colors hover:text-brand-400">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Sayfa bağlantıları">
            <h2 className="font-display text-xl font-extrabold uppercase tracking-wider text-white">Sayfalar</h2>
            <ul className="mt-5 space-y-3">
              {[
                ["/#projeler", "Projeler"],
                ["/#surec", "Nasıl Çalışırız"],
                ["/#sss", "Sık Sorulan Sorular"],
                ["/#iletisim", "İletişim"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 transition-colors hover:text-brand-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xl font-extrabold uppercase tracking-wider text-white">İletişim</h2>
            <ul className="mt-5 space-y-4 text-white/65">
              <li>
                <a href={telLink} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="size-5 text-brand-400" /> <span className="tabular-nums">{site.phone.display}</span>
                </a>
              </li>
              <li>
                <a href={telLink2} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="size-5 text-brand-400" /> <span className="tabular-nums">{site.phone2.display}</span>
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-white">
                  <WhatsAppIcon className="size-5 text-wa" /> WhatsApp ile yazın
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-400" /> {site.address.full}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-6 text-sm text-white/60 sm:flex-row">
          <p>© 2026 {site.legalName}. Tüm hakları saklıdır.</p>
          <p>
            {site.city} Manitou Kiralama · Vinç Kiralama · JCB Kepçe · Operatörlü Hizmet
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.linkedin.com/in/cengizsenfe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bu site Cengiz Şen tarafından yapılmıştır — LinkedIn profili"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] py-2 pl-2 pr-5 text-sm text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0a66c2] hover:bg-[#0a66c2]/15 hover:text-white"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#0a66c2] text-white shadow-[0_6px_18px_-4px_rgb(10_102_194/0.7)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <LinkedInIcon className="size-4.5" />
            </span>
            <span>
              Bu site <strong className="font-bold text-white">Cengiz Şen</strong> tarafından yapılmıştır
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
