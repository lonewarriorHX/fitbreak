import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ProductIllustration } from "@/components/product-illustration";
import { PRODUCTS, formatIDR } from "@/lib/products";

export const metadata: Metadata = {
  title: "Produk",
  description: "Cereal oats, protein oatmeal, dan fit cookie dari Fitbreak.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Produk"
        title={<>Semua cemilan sehat Fitbreak.</>}
        description="Pilih produk yang cocok dengan gaya hidupmu. Semua dibuat dari bahan natural, tinggi serat, dan tanpa gula tambahan."
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 md:grid-cols-2">
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
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bgClass} opacity-50`}
                  aria-hidden
                />
                <div className="relative">
                  <ProductIllustration
                    variant={p.slug as "protein-oatmeal" | "fit-cookie"}
                    className="w-full h-auto max-w-[260px] mx-auto"
                  />
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-ink/75">{p.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.highlights.slice(0, 4).map((h) => (
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
                      Lihat detail
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
