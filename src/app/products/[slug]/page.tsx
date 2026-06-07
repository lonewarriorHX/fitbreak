import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProduct, formatIDR } from "@/lib/products";
import { ProductImage } from "@/components/product-image";

type Params = { slug: string };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return { title: "Produk tidak ditemukan" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const minPrice = Math.min(...product.variants.map((v) => v.priceIDR));
  const bgClass =
    product.badgeColor === "primary"
      ? "from-primary-light via-cream to-white"
      : "from-[#FFE3C2] via-cream to-white";

  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-br ${bgClass} border-b border-line`}>
        <div className="absolute inset-0 bg-grain opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <Link
              href="/products"
              className="text-sm text-ink/60 hover:text-primary-dark"
            >
              ← Kembali ke produk
            </Link>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-ink/75 max-w-xl">{product.tagline}</p>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {product.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-white/85 backdrop-blur border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/80"
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-white border border-line p-5 shadow-sm">
              <p className="text-sm text-ink/60">Mulai dari</p>
              <p className="font-display text-3xl font-semibold text-ink">
                {formatIDR(minPrice)}
              </p>

              <fieldset className="mt-5">
                <legend className="text-sm font-semibold text-ink mb-2">
                  Pilih varian
                </legend>
                <div className="grid gap-2">
                  {product.variants.map((v, i) => (
                    <label
                      key={v.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light/50"
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="variant"
                          defaultChecked={i === 0}
                          className="h-4 w-4 accent-primary"
                        />
                        <span className="text-sm font-medium text-ink">
                          {v.label}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-ink">
                        {formatIDR(v.priceIDR)}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled
                  className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm opacity-60 cursor-not-allowed"
                  title="Belum tersedia — segera hadir"
                >
                  + Keranjang
                </button>
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    `Halo Fitbreak, saya mau pesan ${product.name}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:border-primary hover:text-primary-dark transition-colors"
                >
                  Pesan via WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs text-ink/55">
                Checkout & pembayaran online akan segera hadir.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-white shadow-xl shadow-primary/10 ring-1 ring-line p-8">
              <ProductImage
                slug={product.slug}
                name={product.name}
                image={product.image}
                className="w-full"
                priority
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Tentang produk ini
            </h2>
            {product.longDescription.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/80">
                {p}
              </p>
            ))}

            <div className="pt-6 border-t border-line">
              <h3 className="font-display text-xl font-semibold text-ink">
                Komposisi
              </h3>
              <p className="mt-2 text-ink/75 leading-relaxed">
                {product.ingredients}
              </p>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl border border-line bg-cream/40 p-6 sticky top-24">
              <h3 className="font-display text-xl font-semibold text-ink">
                Nutrisi per saji
              </h3>
              <dl className="mt-4 divide-y divide-line">
                {product.nutrition.map((n) => (
                  <div key={n.label} className="flex justify-between py-2.5">
                    <dt className="text-ink/70">{n.label}</dt>
                    <dd className="font-semibold text-ink">{n.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
