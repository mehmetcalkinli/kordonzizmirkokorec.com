import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Instagram, Facebook, Clock, Flame, Axe, Award, Menu as MenuIcon, X, Star, Quote, ExternalLink } from "lucide-react";
import logo from "@/assets/kordon-logo.png";
import hero from "@/assets/hero.jpeg";
import sandwich from "@/assets/sandwich.jpeg";
import chef from "@/assets/chef.jpeg";
import taco from "@/assets/taco.jpeg";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kordon İzmir Kokoreç | Eskişehir" },
      { name: "description", content: "Saatlerce kısık meşe kömüründe pişen ve sade hazırlanan gerçek kuzu İzmir kokoreci. Şirintepe, Tepebaşı / Eskişehir." },
      { property: "og:title", content: "Kordon İzmir Kokoreç" },
      { property: "og:description", content: "İzmir'in efsanevi lezzeti, asil bir dokunuşla. Eskişehir." },
    ],
  }),
  component: Index,
});

const ADDRESS_TEXT = "Şirintepe Mah. İsmet İnönü 2 Cad. No: 34, Tepebaşı / Eskişehir";
const PHONE_DISPLAY = "+90 (551) 353 64 53";
const PHONE_LINK = "tel:+905513536453";
const WHATSAPP_LINK = "https://wa.me/905513536453";
const FACEBOOK_LINK = "https://facebook.com/kordonizmirkokorec";
const INSTAGRAM_LINK = "https://instagram.com/kordonizmirkokorec";
const MAPS = "https://www.google.com/maps/dir/?api=1&destination=Şirintepe+Mahallesi+İsmet+İnönü+2+Caddesi+No:34+Tepebaşı+Eskişehir";
const MAPS_EMBED = "https://www.google.com/maps?q=Şirintepe+Mahallesi+İsmet+İnönü+2+Caddesi+No+34+Tepebaşı+Eskişehir&output=embed";
const navLeft = [
  ["Ana Sayfa", "home"],
  ["Hikayemiz", "hikayemiz"],
  ["Galeri", "galeri"],
] as const;

const navRight = [
  ["Menü", "menu"],
  ["Yorumlar", "yorumlar"],
  ["İletişim & Konum", "iletisim"],
] as const;

const allNav = [...navLeft, ...navRight] as const;

const menu = {
  "İzmir Usulü Kokoreç": [
    {
      n: "Ekmek Arası Kokoreç",
      g: "150g",
      d: "Ekmek arası gerçek kuzu kokoreci, az baharat ile servis edilir.",
      img: sandwich,
    },
    {
      n: "Porsiyon Kokoreç",
      g: "250g",
      d: "Açık ekmek üstü iri kıyım kokoreç.",
      img: hero,
    },
  ],
  "Özel Lezzetler": [
    {
      n: "Ekmek Arası Köfte",
      g: "Porsiyon",
      d: "Özel kasap köftesi, ızgara lezzetiyle.",
      img: null,
    },
    {
      n: "Ekmek Arası Sucuk",
      g: "Porsiyon",
      d: "Meşe kömüründe pişmiş nefis kasap sucuğu.",
      img: null,
    },
    {
      n: "Midye",
      g: "Tane / Porsiyon",
      d: "Baharatlı taze iç pilavıyla günlük İzmir midye.",
      img: null,
    },
  ],
  İçecekler: [
    {
      n: "Yayık Ayranı",
      g: "300ml",
      d: "Hafif ekşi, yağlı, buz gibi yayık ayranı.",
      img: null,
    },
    {
      n: "Ev Yapımı Şalgam",
      g: "330ml",
      d: "Adana'dan gelen özel açık şalgam.",
      img: null,
    },
  ],
};

const galleryFiles = Object.values(
  import.meta.glob("@/assets/gallery/*.{jpeg,jpg,png,JPEG,JPG,PNG}", { eager: true, import: "default" })
) as string[];

const reviews = [
  {
    name: "Burak Yılmaz",
    role: "Google Yorumu",
    rating: 5,
    date: "1 hafta önce",
    text: "Eskişehir'de böylesini gerçekten yemedim. İzmir'deki o meşhur Kordon lezzetini birebir yakalamışlar. Kuzu kokoreç tertemiz, lokum gibi ve kısık meşe kömürü ateşinde harika pişmiş. Mekanın nezihliği de cabası.",
  },
  {
    name: "Gizem Kaya",
    role: "Google Yorumu",
    rating: 5,
    date: "2 hafta önce",
    text: "Gerçek İzmir usulü ve sade kokoreç sevenler için Eskişehir'deki bir numaralı adres. Meşe kömürünün aroması, ekmeğin çıtırlığı ve sunum 10 numara. Ailenizle de rahatça gelebileceğiniz çok şık ve ferah bir yer.",
  },
  {
    name: "Caner Demir",
    role: "Google Yorumu",
    rating: 5,
    date: "3 hafta önce",
    text: "Kuzu kokoreç ve satır tabağı efsaneydi. Ağır koku asla yok, yağ ve baharat dengesi tam kararında. Eskişehir'e bu kalitede bir lezzet noktası kazandırdığınız için tebrik ederim. Kesinlikle tavsiye ederim.",
  },
];

function Index() {
  const [tab, setTab] = useState<keyof typeof menu>("İzmir Usulü Kokoreç");
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
          {/* Desktop Navigation: Left items - Center Logo - Right items & button (same line) */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4 lg:gap-8">
            <nav className="flex items-center justify-end gap-5 lg:gap-8">
              {navLeft.map(([l, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground transition hover:text-accent whitespace-nowrap"
                >
                  {l}
                </a>
              ))}
            </nav>

            <a href="#home" className="flex items-center justify-center px-4 lg:px-8">
              <img src={logo} alt="Kordon İzmir Kokoreç logosu" className="h-10 w-auto lg:h-12" />
            </a>

            <div className="flex items-center justify-start gap-5 lg:gap-8">
              {navRight.map(([l, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground transition hover:text-accent whitespace-nowrap"
                >
                  {l}
                </a>
              ))}
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-wider uppercase text-primary-foreground transition hover:bg-accent whitespace-nowrap"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-between md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menü"
              className="p-1 text-foreground"
            >
              {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>

            <a href="#home" className="flex items-center justify-center">
              <img src={logo} alt="Kordon İzmir Kokoreç logosu" className="h-9 w-auto" />
            </a>

            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-accent"
            >
              Yol Tarifi
            </a>
          </div>

          {/* Mobile Dropdown Menu */}
          {open && (
            <nav className="mt-4 flex flex-col items-center gap-4 border-t border-border pt-4 pb-2 md:hidden">
              {allNav.map(([l, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground transition hover:text-accent"
                >
                  {l}
                </a>
              ))}
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 w-full max-w-xs rounded-full bg-primary py-2.5 text-center text-xs font-semibold tracking-wider uppercase text-primary-foreground transition hover:bg-accent"
              >
                Yol Tarifi Al
              </a>
            </nav>
          )}
        </div>
      </header>

      <section id="home" className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <img src={hero} alt="Meşe kömüründe kokoreç" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative max-w-3xl px-6 text-center">
          <p className="mb-6 text-xs tracking-[0.5em] text-accent uppercase">Satır · Meşe Kömürü · Ustalık</p>
          <h1 className="font-serif text-5xl leading-tight font-semibold md:text-7xl">
            İzmir’in Efsanevi Lezzeti, <span className="text-accent italic">Asil Bir Dokunuşla.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Saatlerce kısık meşe kömüründe pişen ve sade hazırlanan gerçek kuzu İzmir kokoreci.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#menu" className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:bg-accent shadow-md">Menüyü Keşfet</a>
            <a href="#iletisim" className="rounded-full border border-foreground px-8 py-3 font-semibold transition hover:bg-foreground hover:text-background">Bize Ulaşın</a>
          </div>
        </div>
      </section>

      <section id="hikayemiz" className="mx-auto grid max-w-6xl scroll-mt-32 items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={chef} alt="Satırla kokoreç doğrayan usta" loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg" />
        <div>
          <p className="text-xs tracking-[0.4em] text-accent uppercase">Hikayemiz</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Kordon’dan gelen bir tutku</h2>
          <p className="mt-6 text-muted-foreground">
            İzmir Kordon’dan esinlenen lezzeti Eskişehir’e taşıdık. Kaliteli kuzu kokorecini nezih bir ortamda deneyimleyeceksiniz.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[[Flame, "Meşe Kömürü"], [Axe, "İzmir Usulü"], [Award, "Kuzu Kokoreci"]].map(([I, t]: any) => (
              <div key={t} className="border-l-2 border-primary pl-4">
                <I className="mb-2 h-5 w-5 text-accent" />
                <p className="text-sm font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeri" className="mx-auto max-w-6xl scroll-mt-32 px-6 py-24">
        <div className="text-center">
          <p className="text-xs tracking-[0.4em] text-accent uppercase">Galeri</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl font-caros tracking-wide">#kordondayım</h2>
        </div>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
          {(galleryFiles.length > 0
            ? galleryFiles.map((src, i) => [src, i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:col-span-2" : ""])
            : [[hero, "md:col-span-2 md:row-span-2"], [sandwich, ""], [taco, ""], [chef, "md:col-span-2"]]
          ).map(([src, c], i) => (
            <img key={i} src={src} alt="Kordon kokoreç galerisi" loading="lazy" className={`h-full w-full rounded-2xl object-cover transition duration-500 hover:scale-[1.02] shadow-sm ${c}`} />
          ))}
        </div>
      </section>

      <section id="menu" className="scroll-mt-32 bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs tracking-[0.4em] text-accent uppercase">Menü</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Menümüz</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {(Object.keys(menu) as (keyof typeof menu)[]).map((k) => (
              <button key={k} onClick={() => setTab(k)} className={`rounded-full px-6 py-2 text-sm font-medium transition ${tab === k ? "bg-primary text-primary-foreground shadow-sm" : "border border-border text-muted-foreground hover:text-foreground"}`}>
                {k}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu[tab].map((m) => (
              <article key={m.n} className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:border-accent/40">
                {m.img && <img src={m.img} alt={m.n} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{m.n}</h3>
                  <p className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">{m.g}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="yorumlar" className="mx-auto max-w-6xl scroll-mt-32 px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">Müşteri Yorumları</h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5">
              <span className="text-sm font-bold text-foreground">4.6</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-3.5 w-3.5 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/50 text-amber-400"}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Google Puanı</span>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kordon+Izmir+Kokorec+Eskisehir"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-accent transition hover:bg-primary hover:text-primary-foreground"
            >
              <span>Bizi Değerlendirin</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition duration-300 hover:border-accent/50 shadow-sm"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-muted-foreground/30" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role} · {r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="iletisim" className="scroll-mt-32 bg-card py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-md">
            <iframe
              title="Konum"
              src={MAPS_EMBED}
              className="h-full min-h-[380px] w-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-accent uppercase">İletişim & Konum</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Konum ve Çalışma Saatleri</h2>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">
                    Pazartesi – Perşembe & Pazar: <span className="font-normal text-muted-foreground">17:00 – 02:00</span>
                  </p>
                  <p className="mt-1 font-semibold text-foreground">
                    Cuma – Cumartesi: <span className="font-normal text-muted-foreground">17:00 – 03:00</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-foreground">{ADDRESS_TEXT}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href={PHONE_LINK} className="text-sm font-medium text-foreground transition hover:text-accent">
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-accent shrink-0"><WhatsAppIcon className="h-5 w-5" /></div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-foreground transition hover:text-accent"
                >
                  WhatsApp Sipariş & İletişim Hattı
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-foreground transition hover:text-accent"
                >
                  @kordonizmirkokorec
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Facebook className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-foreground transition hover:text-accent"
                >
                  @kordonizmirkokorec
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:bg-accent shadow-md"
              >
                Yol Tarifi Al
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 font-semibold text-accent transition hover:bg-accent hover:text-primary-foreground"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp'tan Ulaşın</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6">
          <img src={logo} alt="Kordon İzmir Kokoreç" className="h-8 w-auto md:h-10" />
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:text-accent"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition hover:text-accent"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-accent"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            {ADDRESS_TEXT} · <a href={PHONE_LINK} className="transition hover:text-accent">{PHONE_DISPLAY}</a>
          </p>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kordon İzmir Kokoreç. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
