import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { ScrollVideoHero } from "@/components/scroll-video-hero";
import { StoryImage } from "@/components/story-image";
import { PRODUCTS, formatIDR } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <ScrollVideoHero />
      <ValueStrip />
      <ProductShowcase />
      <BenefitsTeaser />
      <StoryTeaser />
      <TestimonialsTeaser />
      <FinalCTA />
    </>
  );
}

function ValueStrip() {
  const items = [
    { k: "0g", l: "Gula tambahan" },
    { k: "6g+", l: "Serat per saji" },
    { k: "3 mnt", l: "Siap saji" },
    { k: "100%", l: "Bahan natural" },
  ];
  return (
    <section className="border-y border-line bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.l} className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-semibold text-primary-dark">
              {it.k}
            </span>
            <span className="text-sm text-ink/70">{it.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Produk Kami</SectionLabel>
        <div className="mt-3 flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
            Cemilan sehat yang beneran enak.
          </h2>
          <Link
            href="/products"
            className="text-sm font-semibold text-primary-dark hover:underline"
          >
            Lihat semua produk →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p) => {
            const minPrice = Math.min(...p.variants.map((v) => v.priceIDR));
            const bgClass =
              p.badgeColor === "primary"
                ? "from-primary-light to-cream"
                : "from-[#FFE3C2] to-cream";
            return (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-line bg-white p-6 sm:p-8 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} opacity-50`} aria-hidden />
                <div className="relative grid sm:grid-cols-5 gap-4 items-center">
                  <div className="sm:col-span-2">
                    <ProductImage
                      slug={p.slug}
                      name={p.name}
                      image={p.image}
                      className="w-full max-w-[200px] mx-auto sm:max-w-none"
                      sizes="(max-width: 640px) 200px, 240px"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-ink/75">{p.tagline}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="rounded-full bg-white/80 backdrop-blur border border-ink/10 px-2.5 py-1 text-xs font-medium text-ink/80"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-ink/60">
                        Mulai{" "}
                        <span className="font-semibold text-ink">
                          {formatIDR(minPrice)}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-dark group-hover:gap-2 transition-all">
                        Detail
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsTeaser() {
  const items = [
    {
      title: "Kontrol Gula Darah",
      body: "Serat larut dari oats memperlambat penyerapan glukosa, mencegah lonjakan gula darah setelah makan.",
      icon: "🩺",
    },
    {
      title: "Turunkan Kolesterol",
      body: "β-glucan mengikat asam empedu, sehingga hati menarik kolesterol darah untuk diproses ulang.",
      icon: "❤️",
    },
    {
      title: "Pencernaan Sehat",
      body: "Fermentasi serat di usus menghasilkan asam lemak rantai pendek yang menutrisi mikrobiota.",
      icon: "🌱",
    },
  ];
  return (
    <section className="section-pad bg-cream/60 border-y border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Kenapa Oats?</SectionLabel>
        <div className="mt-3 flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
            Bukan sekadar enak — beneran bantu tubuh.
          </h2>
          <Link
            href="/benefits"
            className="text-sm font-semibold text-primary-dark hover:underline"
          >
            Pelajari lebih lanjut →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl bg-white p-7 border border-line shadow-sm"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {it.title}
              </h3>
              <p className="mt-2 text-ink/75 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryTeaser() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
        <StoryImage className="aspect-[4/5] rounded-3xl border border-line" />

        <div>
          <SectionLabel>Story of Us</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Lahir dari pengalaman, bukan tren.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            Fitbreak bermula dari founder kami sendiri—mengalami{" "}
            <strong className="text-ink">
              kolesterol tinggi di usia 20 tahun
            </strong>{" "}
            setelah lama terbiasa dengan makanan tinggi lemak jenuh, gula, dan
            garam.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            Dari sana lahir <strong>Fitbreak Cereal Oats</strong>—tinggi serat,
            solusi cegah ngemil berlebih. Misinya: jadi teman kamu di hidup
            sehat, dan{" "}
            <em>mencegah sebelum penyesalan dan penyakit itu datang</em>.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink hover:border-primary hover:text-primary-dark transition-colors"
          >
            Baca cerita lengkapnya
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsTeaser() {
  const items = [
    {
      name: "Sarah, 27",
      role: "Karyawan startup",
      body: "Akhirnya nemu sarapan yang nggak bikin ngantuk jam 10. Protein Oatmeal-nya juara!",
    },
    {
      name: "Pak Hendra, 45",
      role: "Hidup dengan kolesterol",
      body: "3 bulan rutin makan Fitbreak, LDL turun 30 poin. Enak pula, jadi gampang konsisten.",
    },
    {
      name: "Mama Dita",
      role: "Working mom",
      body: "Fit Cookie jadi bekal sekolah anak. Lebih tenang dibanding biskuit pasaran.",
    },
  ];
  return (
    <section className="section-pad bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel tone="light">Testimoni</SectionLabel>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl text-white">
          Dari mereka yang udah jadi teman Fitbreak.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-7"
            >
              <blockquote className="text-lg leading-relaxed text-cream">
                “{t.body}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-cream/70">
                <span className="font-semibold text-white">{t.name}</span> ·{" "}
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Lihat semua testimoni →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-[#2A1810] p-10 sm:p-14 text-white">
          <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Mulai hidup sehat hari ini.
              </h2>
              <p className="mt-3 text-white/85 max-w-lg">
                Coba paket starter Fitbreak: 1 Protein Oatmeal + 1 Fit Cookie.
                Hemat 15%.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-primary-dark shadow hover:bg-cream transition-colors"
              >
                Belanja Sekarang
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "light" ? "text-accent" : "text-primary-dark"
      }`}
    >
      <span
        className={`h-px w-8 ${tone === "light" ? "bg-accent" : "bg-primary-dark"}`}
      />
      {children}
    </span>
  );
}

