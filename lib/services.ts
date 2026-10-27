import { photos, site, type Photo } from "./site";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Kart / menü başlığı */
  name: string;
  /** <title> için (site adı otomatik eklenir) */
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  /** Kartta görünen kısa metin */
  summary: string;
  /** Sayfa H1 */
  h1: string;
  lead: string;
  icon: "forklift" | "crane" | "hardhat" | "package" | "shovel";
  /** Fotoğraf hazır olunca ekleyin; yoksa kartta ikonlu tasarım gösterilir. */
  photo?: Photo;
  /** Hizmet sayfasında "Sahadan kareler" olarak gösterilecek ek fotoğraflar. */
  gallery?: Photo[];
  /** Uzun SEO metni (paragraflar) */
  body: string[];
  uses: string[];
  benefits: { title: string; text: string }[];
  faqs: Faq[];
};

const c = site.city;

export const services: Service[] = [
  {
    slug: "manitou-kiralama",
    name: "Manitou Kiralama",
    seoTitle: `${c} Manitou Kiralama | Operatörlü Teleskopik Yükleyici`,
    seoDescription: `${c} içinde operatörlü Manitou (teleskopik yükleyici) kiralama. Şantiye malzeme kaldırma, çatal ve kova ataşmanı, 35 metreye varan erişim. WhatsApp'tan hızlı teklif alın.`,
    keywords: [
      "manitou kiralama",
      "kiralık manitou",
      "operatörlü manitou kiralama",
      "manitou kiralama fiyatları",
      "teleskopik yükleyici kiralama",
      "monito kiralama",
      "manito kiralama",
      `${c.toLowerCase()} manitou kiralama`,
    ],
    summary:
      "Teleskopik yükleyici ile şantiyenizin her noktasına güvenle yük çıkarın. Çatal ve kova ataşmanı, deneyimli operatör.",
    h1: `${c} Manitou Kiralama`,
    lead: "Operatörlü Manitou teleskopik yükleyicilerimizle yükünüzü istediğiniz kata, istediğiniz noktaya güvenle ulaştırıyoruz.",
    icon: "forklift",
    photo: photos.fleet,
    body: [
      `Manitou, halk arasında "manitou", "manito" ya da "monito" olarak bilinen teleskopik yükleyicinin dünya çapındaki en bilinen markasıdır. Uzayabilen bom yapısı sayesinde yükü yalnızca kaldırmakla kalmaz, bina cephesinin, iskelenin ya da engebeli arazinin ötesine kadar uzatıp tam yerine bırakır. Kanca Vinç & Manitou olarak ${c} genelindeki şantiyelere operatörlü Manitou kiralama hizmeti veriyoruz.`,
      "Filomuzdaki makineler palet çatalı ve kova ataşmanlarıyla çalışır. Tuğla, briket, demir, kalıp, çimento, kum ve benzeri malzemeleri zeminden katlara, depodan çatıya kadar hızla taşırız. Operatörlerimiz şantiye düzenine ve zemin koşullarına alışkın olduğu için işiniz yavaşlamaz, ekipman ve çalışanlar güvende kalır.",
      "Doğru makine seçimi; kaldırılacak yükün ağırlığına, erişilecek yüksekliğe ve zemin durumuna bağlıdır. Bize WhatsApp'tan şantiyenin konumunu ve yapılacak işi yazmanız yeterli; ihtiyacınıza uygun Manitou'yu birlikte belirleyip net bir teklif sunuyoruz.",
    ],
    uses: [
      "Tuğla, briket ve gazbeton kaldırma",
      "Demir, profil ve kalıp malzemesi taşıma",
      "Çatı ve cephe işlerinde malzeme ikmali",
      "Palet ve big-bag yükleme / boşaltma",
      "Kova ile kum, çakıl ve moloz taşıma",
      "Fabrika ve depo yükleme-boşaltma işleri",
    ],
    benefits: [
      { title: "Uzayan bom, geniş erişim", text: "Bom yapısı sayesinde iskele ve bina önünden geçerek yükü tam yerine bırakır." },
      { title: "Çatal & kova ataşmanı", text: "Aynı makine ile hem palet hem dökme malzeme işleri tek seferde çözülür." },
      { title: "Deneyimli operatör", text: "Şantiye şartlarına hâkim operatörle güvenli ve hızlı çalışma." },
      { title: "Esnek kiralama", text: "Saatlik, günlük veya proje bazlı çalışma planı oluşturulur." },
    ],
    faqs: [
      {
        q: "Manitou, manito ve monito aynı şey mi?",
        a: "Evet. Teleskopik yükleyici, halk arasında markasından dolayı manitou, manito veya monito olarak anılır. Hepsi uzayabilen bomuyla yük kaldıran aynı makine tipini ifade eder.",
      },
      {
        q: "Manitou kiralama operatörlü mü yapılıyor?",
        a: "Evet, makinelerimiz deneyimli operatörleriyle birlikte hizmet verir. Böylece ayrıca operatör arama derdiniz olmaz.",
      },
      {
        q: "Manitou kiralama fiyatı neye göre belirlenir?",
        a: "Fiyat; çalışma süresine, makinenin kapasitesine, erişim yüksekliğine ve şantiyenin konumuna göre değişir. Bize WhatsApp'tan yazdığınızda iş detaylarına göre net teklif veriyoruz.",
      },
    ],
  },
  {
    slug: "vinc-kiralama",
    name: "Vinç Kiralama",
    seoTitle: `${c} Vinç Kiralama | Döner Platformlu Manitou MRT`,
    seoDescription: `${c} vinç kiralama: 360° dönebilen platformlu Manitou MRT ile 35 metreye varan erişim. Operatörlü, hızlı sevk, güvenli yük kaldırma. Hemen WhatsApp'tan teklif alın.`,
    keywords: [
      "vinç kiralama",
      "kiralık vinç",
      "mobil vinç kiralama",
      "operatörlü vinç kiralama",
      "inşaat vinci kiralama",
      "manitou mrt kiralama",
      "döner platformlu manitou",
      `${c.toLowerCase()} vinç kiralama`,
    ],
    summary:
      "Döner platformlu Manitou MRT ile 35 metreye varan erişim. Vinç gibi kaldırır, teleskopik yükleyici gibi çevik çalışır.",
    h1: `${c} Vinç Kiralama`,
    lead: "Döner platformlu Manitou MRT ile yükü 35 metreye varan yüksekliğe, makineyi yerinden oynatmadan ulaştırıyoruz.",
    icon: "crane",
    photo: photos.mrt,
    body: [
      `Vinç kiralama arayanlar için en pratik çözümlerden biri, döner platformlu Manitou MRT serisidir. Üst gövdesi tam 360 derece dönebildiği için makine yerinden oynamadan her yöne yük taşır; dar şantiyelerde klasik bir vinçten çok daha çevik çalışır. ${c} genelinde operatörlü vinç hizmeti sunuyoruz.`,
      "Manitou MRT, bir mobil vincin erişim avantajını teleskopik yükleyicinin esnekliğiyle birleştirir. Filomuzdaki MRT makineleri 35 metreye varan yüksekliğe ulaşır. Çok katlı yapılarda, çatı ve cephe işlerinde, kule vincin ulaşamadığı noktalarda yükü hassas biçimde yerine bırakır.",
      "Kurulum süresi kısadır: makine sahaya gelir, sabitlenir ve çalışmaya başlar. Böylece büyük vinçlerin getirdiği uzun hazırlık, geniş alan ihtiyacı ve yüksek maliyetten kurtulursunuz. İşinizin ölçüsünü paylaşın, size uygun çözümü ve fiyatı hızlıca iletelim.",
    ],
    uses: [
      "Çok katlı yapılarda malzeme ikmali",
      "Çatı, cephe ve izolasyon işleri",
      "Kule vincin ulaşamadığı noktalarda taşıma",
      "Prefabrik ve panel elemanların montajı",
      "Dar şantiyelerde yerinde dönerek yük kaldırma",
      "Fabrika ve tesis bakım-onarım çalışmaları",
    ],
    benefits: [
      { title: "360° dönen platform", text: "Makineyi hareket ettirmeden her yöne çalışır, dar alanlarda büyük avantaj sağlar." },
      { title: "35 m erişim", text: "Çok katlı yapılarda yükü istediğiniz kata doğrudan ulaştırır." },
      { title: "Hızlı kurulum", text: "Uzun hazırlık gerektirmeden sahaya gelir gelmez çalışmaya başlar." },
      { title: "Operatörlü hizmet", text: "Deneyimli operatör ile güvenli ve kesintisiz kaldırma." },
    ],
    faqs: [
      {
        q: "Vinç mi Manitou mu tercih etmeliyim?",
        a: "Ağır ve çok yüksek kaldırmalarda klasik vinç, sık ve çevik malzeme taşımada Manitou avantajlıdır. Döner platformlu MRT ise ikisinin arasında, 360° dönüşüyle vinç benzeri çalışma sunar. İşinizi anlatın, size en doğru seçeneği söyleyelim.",
      },
      {
        q: "Döner platformlu Manitou ne kadar yüksekliğe ulaşır?",
        a: "Filomuzdaki Manitou MRT makineleri 35 metreye varan yüksekliğe erişir. Kaldırma kapasitesi erişim mesafesine göre değiştiği için, yükünüzün ağırlığını paylaşmanız doğru planlama için yeterlidir.",
      },
      {
        q: "Vinç kiralama ne kadar sürede sahaya gelir?",
        a: "Müsaitlik durumuna göre mümkün olan en kısa sürede sevk ediyoruz. Güncel takvim için WhatsApp'tan yazmanız veya aramanız yeterli.",
      },
    ],
  },
  {
    slug: "jcb-kepce-kiralama",
    name: "JCB Kepçe Kiralama",
    seoTitle: `${c} JCB Kepçe Kiralama | Operatörlü Beko Loder`,
    seoDescription: `${c} operatörlü JCB kepçe (beko loder, kazıcı yükleyici) kiralama. Temel kazısı, hafriyat, kanal açma, yükleme ve tesviye işleri. WhatsApp'tan hızlı teklif alın.`,
    keywords: [
      "jcb kepçe kiralama",
      "kiralık jcb",
      "jcb kiralama",
      "kepçe kiralama",
      "beko loder kiralama",
      "kazıcı yükleyici kiralama",
      "operatörlü jcb kiralama",
      "hafriyat kepçe kiralama",
      `${c.toLowerCase()} jcb kiralama`,
    ],
    summary:
      "Temel kazısı, hafriyat, kanal açma ve yükleme işleri için operatörlü JCB kepçe. Kazar, yükler, taşır.",
    h1: `${c} JCB Kepçe Kiralama`,
    lead: "Kazı, hafriyat ve yükleme işleri için operatörlü JCB kepçe (beko loder) ile hızlı ve düzenli çalışıyoruz.",
    icon: "shovel",
    photo: photos.jcbDig,
    gallery: [photos.jcbSide, photos.jcbBucket],
    body: [
      `JCB kepçe, halk arasında "beko loder" ya da "kazıcı yükleyici" olarak da bilinir. Önünde yükleyici kovası, arkasında kazıcı kolu olduğu için tek makineyle hem kazı hem yükleme yapar. Bu çok yönlülük, küçük ve orta ölçekli işlerde ayrı ayrı iş makinesi kiralama maliyetini ortadan kaldırır. ${c} genelinde operatörlü JCB kepçe kiralama hizmeti veriyoruz.`,
      "Temel ve bodrum kazısı, kanal ve altyapı hatları, çukur açma, tesviye, moloz ve hafriyat yükleme gibi işlerde kullanılır. Lastikli olduğu için asfaltta kendi gücüyle hareket edebilir, dar sokaklarda ve sınırlı alanlarda rahatça çalışır.",
      "Deneyimli operatörlerimiz kazı derinliğini, zemin yapısını ve çevredeki altyapıyı dikkate alarak çalışır. İşinizin tarifini, yerini ve tahmini süresini bize WhatsApp'tan yazmanız yeterli; uygun makineyi planlayıp net teklif sunalım. Aynı şantiyede Manitou ile birlikte ihtiyacınız varsa ikisini tek elden organize ediyoruz.",
    ],
    uses: [
      "Temel ve bodrum kazısı",
      "Kanal, boru ve altyapı hattı açma",
      "Hafriyat ve moloz yükleme",
      "Zemin tesviyesi ve düzeltme",
      "Kum, çakıl ve dolgu malzemesi taşıma",
      "Küçük ve orta ölçekli yıkım ve söküm işleri",
    ],
    benefits: [
      { title: "Kazar ve yükler", text: "Ön kova ve arka kazıcı kolu sayesinde tek makine birçok işi çözer." },
      { title: "Çevik ve lastikli", text: "Dar alanlarda çalışır, kendi gücüyle şantiyeye gider." },
      { title: "Operatörlü hizmet", text: "Deneyimli operatör ile güvenli ve düzenli kazı." },
      { title: "Manitou ile tek elden", text: "Kazı ve yük kaldırma ihtiyacını aynı firmadan karşılayın." },
    ],
    faqs: [
      {
        q: "JCB kepçe ile beko loder aynı şey mi?",
        a: "Evet. JCB, bu makine tipinin en bilinen markası olduğu için halk arasında kepçe, beko loder veya kazıcı yükleyici yerine \"JCB\" denir. Hepsi önünde yükleyici kovası, arkasında kazıcı kolu olan aynı makineyi ifade eder.",
      },
      {
        q: "JCB kepçe kiralama operatörlü mü?",
        a: "Evet, makinelerimiz deneyimli operatörleriyle birlikte hizmet verir.",
      },
      {
        q: "JCB kepçe kiralama fiyatı neye göre belirlenir?",
        a: "Fiyat; çalışma süresine, işin türüne ve şantiyenin konumuna göre değişir. İş detaylarını WhatsApp'tan paylaştığınızda net teklif veriyoruz.",
      },
    ],
  },
  {
    slug: "operatorlu-manitou-vinc",
    name: "Operatörlü Hizmet",
    seoTitle: `Operatörlü Manitou ve Vinç Kiralama ${c} | Anahtar Teslim`,
    seoDescription: `${c} operatörlü Manitou ve vinç kiralama. Deneyimli operatör, bakımlı ekipman ve hızlı sevk ile anahtar teslim yük kaldırma hizmeti. Ücretsiz teklif için arayın.`,
    keywords: [
      "operatörlü manitou kiralama",
      "operatörlü vinç kiralama",
      "operatörlü teleskopik yükleyici",
      "manitou operatörü",
      "saatlik manitou kiralama",
      "günlük vinç kiralama",
      `${c.toLowerCase()} operatörlü manitou`,
    ],
    summary:
      "Makine + operatör + organizasyon tek pakette. Siz işinize odaklanın, kaldırma işini biz üstlenelim.",
    h1: `${c} Operatörlü Manitou & Vinç Kiralama`,
    lead: "Makine, deneyimli operatör ve sahaya sevk tek pakette. Siz işinize odaklanın, kaldırma işini biz üstlenelim.",
    icon: "hardhat",
    photo: photos.site,
    body: [
      "Şantiyede en çok zaman kaybettiren konulardan biri, doğru makineyi ve doğru operatörü bir araya getirmektir. Operatörlü kiralama hizmetimizde ekipman, operatör ve sevkiyat tek bir noktadan yönetilir; sizin yapmanız gereken tek şey işin ne zaman başlayacağını söylemektir.",
      "Operatörlerimiz şantiye güvenliği, yük bağlama ve işaretleşme konusunda deneyimlidir. Zemin koşullarını, yükün ağırlık merkezini ve çalışma alanını önceden değerlendirir; riskli bir durumda işi durdurup güvenli alternatifi önerir. Bu yaklaşım hem çalışanlarınızı hem de yapıyı korur.",
      "Çalışma planını işinize göre kurarız: saatlik, günlük, haftalık ya da proje bazlı. Sürekli bir ihtiyacınız varsa özel çalışma düzeni ve dönemsel fiyatlandırma için bizimle görüşebilirsiniz.",
    ],
    uses: [
      "Saatlik veya günlük kısa süreli kaldırma işleri",
      "Proje boyunca sürekli şantiye desteği",
      "Müteahhit ve taşeronlara düzenli hizmet",
      "Acil yük kaldırma ve ekipman ihtiyaçları",
      "Fabrika, depo ve lojistik alanı yükleme-boşaltma",
      "Bireysel yapı ve tadilat işleri",
    ],
    benefits: [
      { title: "Anahtar teslim", text: "Makine, operatör ve sevkiyat tek noktadan, sorunsuz organize edilir." },
      { title: "Güvenlik öncelikli", text: "Yük bağlama, zemin değerlendirme ve işaretleşmede deneyimli ekip." },
      { title: "Esnek planlama", text: "Saatlik, günlük veya proje bazlı çalışma modeli." },
      { title: "Şeffaf fiyat", text: "İş başlamadan net teklif; sürpriz maliyet yok." },
    ],
    faqs: [
      {
        q: "Saatlik veya günlük kiralama yapıyor musunuz?",
        a: "Evet. İşin kapsamına göre saatlik, günlük, haftalık veya proje bazlı çalışma planı oluşturuyoruz.",
      },
      {
        q: "Teklif almak için neye ihtiyacınız var?",
        a: "Şantiyenin konumu, kaldırılacak yükün cinsi ve yaklaşık ağırlığı, ulaşılacak yükseklik ve işin tahmini süresi. WhatsApp'tan kısaca yazmanız yeterli.",
      },
      {
        q: "Hafta sonu ve akşam saatlerinde çalışıyor musunuz?",
        a: "Çalışma saatlerimizi ve müsaitliği iş planınıza göre ayarlıyoruz. Detay için bizi arayabilir veya WhatsApp'tan yazabilirsiniz.",
      },
    ],
  },
  {
    slug: "santiye-yuk-kaldirma-tasima",
    name: "Şantiye Yük Kaldırma",
    seoTitle: `Şantiye Yük Kaldırma ve Malzeme Taşıma ${c} | Manitou`,
    seoDescription: `${c} şantiye yük kaldırma ve malzeme taşıma hizmeti. Tuğla, demir, kalıp, palet ve dökme malzemeleri Manitou ile hızlı ve güvenli şekilde katlara ulaştırıyoruz.`,
    keywords: [
      "şantiye yük kaldırma",
      "inşaat malzemesi taşıma",
      "tuğla kaldırma manitou",
      "palet kaldırma",
      "inşaat yük kaldırma hizmeti",
      "kar ve kış şantiye manitou",
      `${c.toLowerCase()} şantiye malzeme taşıma`,
    ],
    summary:
      "Tuğla, demir, kalıp ve palet yüklerini şantiyenizde istediğiniz kata hızlı ve güvenli şekilde ulaştırıyoruz.",
    h1: `${c} Şantiye Yük Kaldırma & Malzeme Taşıma`,
    lead: "Şantiyedeki en yorucu iş olan malzeme taşımayı makineye bırakın. İşçilik süreniz kısalsın, iş güvenliğiniz artsın.",
    icon: "package",
    photo: photos.snow,
    body: [
      "Kaba inşaattan çatıya, iskele kurulumundan cephe işlerine kadar şantiyenin her aşamasında yük kaldırma ve taşıma ihtiyacı vardır. Bu işi elle ya da yetersiz ekipmanla yapmak hem zaman kaybettirir hem de iş kazası riskini artırır. Manitou ile malzemeleri doğrudan çalışılacak kata, tam ihtiyaç duyulan noktaya ulaştırıyoruz.",
      "Tuğla ve briket paletleri, demir demetleri, kalıp ve iskele malzemeleri, torbalı çimento, kum ve moloz gibi farklı yük tiplerini çatal veya kova ataşmanıyla taşıyoruz. Yağmur, çamur, kar ve gece koşullarında da çalışma deneyimimiz var; zemin şartlarına uygun makine ve yaklaşım seçiyoruz.",
      "Projenizin başında bir keşif konuşması yapar, yük akışını ve makinenin duracağı noktaları birlikte planlarız. Böylece şantiye trafiği aksamaz, malzeme tam zamanında yerinde olur.",
    ],
    uses: [
      "Kaba inşaat tuğla ve briket ikmali",
      "Demir ve kalıp malzemesini katlara çıkarma",
      "İskele ve çatı malzemesi taşıma",
      "Torbalı ve paletli ürün yükleme-boşaltma",
      "Kum, çakıl ve moloz taşıma (kova ile)",
      "Kış, yağış ve gece vardiyası çalışmaları",
    ],
    benefits: [
      { title: "Zaman kazancı", text: "Elle taşımaya göre kat kat hızlı; ekibiniz asıl işine odaklanır." },
      { title: "Daha güvenli şantiye", text: "Ağır yükü elle taşıma riskini ortadan kaldırır." },
      { title: "Her koşulda çalışma", text: "Çamur, kar ve gece şartlarında deneyimli operatörlerle hizmet." },
      { title: "Planlı organizasyon", text: "Yük akışı önceden planlanır, şantiye trafiği aksamaz." },
    ],
    faqs: [
      {
        q: "Hangi malzemeleri kaldırıp taşıyabiliyorsunuz?",
        a: "Tuğla, briket, demir, kalıp, iskele, torbalı çimento, kum, çakıl, moloz ve paletlenebilen her türlü ürünü çatal veya kova ataşmanıyla taşıyoruz.",
      },
      {
        q: "Kar ve yağmurlu havada çalışabiliyor musunuz?",
        a: "Evet, kış koşullarında da çalışıyoruz. Zemin durumuna göre güvenli çalışma planı yapıyor, gerekirse işi güvenlik gerekçesiyle erteleyip alternatif zaman öneriyoruz.",
      },
      {
        q: "Küçük bir tadilat için de hizmet veriyor musunuz?",
        a: "Elbette. İş büyüklüğü fark etmeksizin saatlik çalışma ile küçük işlere de hizmet veriyoruz.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Ana sayfa SSS — hem kullanıcı hem Google (FAQPage) için */
export const homeFaqs: Faq[] = [
  {
    q: `${c} Manitou kiralama fiyatları ne kadar?`,
    a: "Manitou kiralama fiyatı; çalışma süresi, makinenin kapasitesi ve erişim yüksekliği, şantiyenin konumu gibi etkenlere göre değişir. Bu yüzden sabit bir liste yerine işinize özel net teklif veriyoruz. WhatsApp'tan konum ve iş detayını yazmanız yeterli.",
  },
  {
    q: "Manitou, manito ve monito aynı şey mi?",
    a: "Evet. Teleskopik yükleyici, halk arasında markasından dolayı manitou, manito veya monito diye anılır. Uzayabilen bomuyla yük kaldıran aynı makine tipidir.",
  },
  {
    q: "Operatörlü mü kiralıyorsunuz?",
    a: "Evet, tüm makinelerimiz deneyimli operatörleriyle birlikte hizmet verir. Ayrıca operatör bulmanız gerekmez.",
  },
  {
    q: "Manitou ile vinç arasındaki fark nedir?",
    a: "Manitou (teleskopik yükleyici) çevik ve çok amaçlıdır; çatal ve kova ile sık malzeme taşımada avantaj sağlar. Vinç ise çok ağır ve çok yüksek kaldırmalara uygundur. Döner platformlu Manitou MRT ise 360° dönüşüyle ikisinin arasında bir çözüm sunar. İşinizi anlatın, doğru seçimi birlikte yapalım.",
  },
  {
    q: "JCB kepçe (beko loder) kiralıyor musunuz?",
    a: "Evet. Manitou ve vincin yanında operatörlü JCB kepçe (beko loder, kazıcı yükleyici) kiralama hizmeti de veriyoruz. Temel kazısı, hafriyat, kanal açma ve yükleme işleri için WhatsApp'tan teklif alabilirsiniz.",
  },
  {
    q: "Ne kadar sürede sahaya gelirsiniz?",
    a: `Müsaitlik durumuna göre ${c} içinde en kısa sürede sevk ediyoruz. Güncel takvim için aramanız veya WhatsApp'tan yazmanız yeterli.`,
  },
  {
    q: "Hangi bölgelere hizmet veriyorsunuz?",
    a: `${c}'un tüm semtlerine, Avrupa ve Anadolu yakasının her ilçesine hizmet veriyoruz. Şehir dışı ihtiyaçlar için de bizimle görüşebilirsiniz.`,
  },
  {
    q: "Teklif almak için ne yapmalıyım?",
    a: "Bize WhatsApp'tan yazın ya da arayın. Şantiye konumu, yükün cinsi ve yaklaşık ağırlığı, ulaşılacak yükseklik ve işin süresini paylaşmanız yeterli. Hızlıca dönüş yapıyoruz.",
  },
];
