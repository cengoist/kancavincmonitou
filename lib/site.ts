/**
 * ============================================================
 *  KANCA VİNÇ & MANİTOU — MERKEZİ SİTE AYARLARI
 *  Telefon, adres, konum, alan adı gibi her şey BURADAN değişir.
 * ============================================================
 */

export const site = {
  name: "Kanca Vinç & Manitou",
  legalName: "Kanca Vinç Manitou Hizmetleri",
  shortName: "Kanca Vinç",
  tagline: "Operatörlü Manitou & Vinç Kiralama",

  /** Canlı alan adı. Vercel vb. ortamda NEXT_PUBLIC_SITE_URL ile ezilebilir. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kancavincmonito.com").replace(/\/$/, ""),

  /** Hizmet verilen ana şehir (başlıklarda ve SEO metinlerinde kullanılır). */
  city: "İstanbul",
  /** İyelik ekli hali (başlıklarda kullanılır) */
  cityGen: "İstanbul'un",
  region: "İstanbul",
  country: "TR",

  /** Birincil hat: WhatsApp ve tüm "Ara" butonları bunu kullanır. */
  phone: {
    display: "0538 786 65 13",
    tel: "+905387866513",
    /** wa.me için ülke kodlu, + ve boşluksuz */
    whatsapp: "905387866513",
  },
  /** İkinci hat: iletişim bölümü ve footer'da ayrıca gösterilir. */
  phone2: {
    display: "0552 669 39 65",
    tel: "+905526693965",
  },

  /** TEST KONUMU: Yerebatan Sarnıcı. Gerçek adres hazır olunca güncelleyin. */
  address: {
    street: "Alemdar Mah. Yerebatan Cd. No:1/3",
    district: "Fatih",
    city: "İstanbul",
    postalCode: "34110",
    full: "Alemdar Mah. Yerebatan Cd. No:1/3, Fatih / İstanbul",
  },
  geo: { lat: 41.0084, lng: 28.9779 },

  hours: "Her gün 07:00 – 22:00",
  /** schema.org openingHoursSpecification için */
  hoursSpec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:00", closes: "22:00" },

  /** İstanbul'un tüm semtlerine hizmet veriliyor. Aşağıdaki liste yerel SEO için örnek ilçelerdir. */
  areas: [
    "Fatih", "Beşiktaş", "Şişli", "Kağıthane", "Sarıyer", "Eyüpsultan",
    "Başakşehir", "Esenyurt", "Beylikdüzü", "Avcılar", "Bahçeşehir", "Arnavutköy",
    "Kadıköy", "Ataşehir", "Ümraniye", "Maltepe", "Kartal", "Pendik",
    "Sancaktepe", "Çekmeköy", "Sultanbeyli", "Tuzla",
  ],

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
} as const;

export const waLink = (text = "Merhaba, Manitou / vinç kiralama için teklif almak istiyorum.") =>
  `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${site.phone.tel}`;
export const telLink2 = `tel:${site.phone2.tel}`;

export const mapsEmbed = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=16&hl=tr&output=embed`;
export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`;
export const mapsPlace = `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`;

/* ------------------------------------------------------------------ */
/*  MEDYA                                                              */
/* ------------------------------------------------------------------ */

export type Photo = { src: string; alt: string; w: number; h: number };

export const photos = {
  fleet: {
    src: "/media/manitou-teleskopik-yukleyici-filosu.jpg",
    alt: "Kanca Manitou teleskopik yükleyici filosu şantiyede dizilmiş halde, çatallar yukarıda",
    w: 1200,
    h: 1600,
  },
  snow: {
    src: "/media/karli-havada-manitou-santiye.jpg",
    alt: "Karlı havada inşaat şantiyesinde çalışan Kanca İnşaat Manitou teleskopik yükleyici",
    w: 1200,
    h: 1600,
  },
  site: {
    src: "/media/insaat-santiyesi-manitou-calismasi.jpg",
    alt: "İnşaat şantiyesinde kule vinç yanında yük kaldırmaya hazır Manitou teleskopik yükleyici",
    w: 1200,
    h: 1600,
  },
  mrt: {
    src: "/media/manitou-mrt-3570-doner-platformlu.jpg",
    alt: "Manitou MRT 3570 döner platformlu teleskopik yükleyici, Kanca Vinç — 35 metreye varan erişim",
    w: 1200,
    h: 1600,
  },
  tallest: {
    src: "/media/istanbulun-en-uzun-doner-platformlu-manitou.jpg",
    alt: "Kanca Vinç döner platformlu Manitou MRT apartman önünde ayakları açılmış, bom uzatılmış halde çalışmaya hazır",
    w: 1200,
    h: 1600,
  },
  night: {
    src: "/media/gece-manitou-kova-ile-calisma.jpg",
    alt: "Gece şantiyede kova ataşmanıyla çalışan kırmızı Manitou teleskopik yükleyici",
    w: 1200,
    h: 1600,
  },
} satisfies Record<string, Photo>;

export type Video = {
  src: string;
  poster: string;
  alt: string;
  w: number;
  h: number;
};

export const videos = {
  fleet: {
    src: "/media/manitou-filosu-video.mp4",
    poster: "/media/manitou-filosu-video-poster.jpg",
    alt: "Kanca Manitou teleskopik yükleyici filosu video",
    w: 464,
    h: 824,
  },
  rotating: {
    src: "/media/santiye-doner-manitou-yuk-kaldirma.mp4",
    poster: "/media/santiye-doner-manitou-yuk-kaldirma-poster.jpg",
    alt: "Döner platformlu Manitou ile şantiyede palet ve inşaat malzemesi kaldırma videosu",
    w: 540,
    h: 960,
  },
  facade: {
    src: "/media/manitou-bina-cephesi-yuk-kaldirma.mp4",
    poster: "/media/manitou-bina-cephesi-yuk-kaldirma-poster.jpg",
    alt: "Döner platformlu Manitou ile inşaat halindeki binanın üst katlarına yük kaldırma videosu",
    w: 540,
    h: 720,
  },
  handling: {
    src: "/media/santiye-malzeme-tasima-manitou.mp4",
    poster: "/media/santiye-malzeme-tasima-manitou-poster.jpg",
    alt: "Manitou ile şantiyede yüksekten blok ve malzeme taşıma videosu",
    w: 464,
    h: 832,
  },
} satisfies Record<string, Video>;
