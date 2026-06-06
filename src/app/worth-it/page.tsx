import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Fitbreak Worth it?",
  description:
    "Apa yang bikin Fitbreak berbeda dari cemilan oats lainnya di pasaran.",
};

const COMPARISON = [
  {
    label: "Tanpa gula tambahan",
    fitbreak: true,
    others: false,
  },
  {
    label: "Tinggi serat (β-glucan)",
    fitbreak: true,
    others: "Sebagian",
  },
  {
    label: "Bahan lokal & natural",
    fitbreak: true,
    others: "Sebagian",
  },
  {
    label: "Tanpa pengawet",
    fitbreak: true,
    others: false,
  },
  {
    label: "Halal certified",
    fitbreak: true,
    others: true,
  },
  {
    label: "Cocok untuk yang jaga gula darah",
    fitbreak: true,
    others: false,
  },
];

const REASONS = [
  {
    n: "01",
    t: "Formulasi nutrisi, bukan sekadar marketing.",
    b: "Setiap saji kami hitung supaya benar-benar memenuhi klaim—15g protein berarti 15g protein.",
  },
  {
    n: "02",
    t: "Rasa yang bikin konsisten.",
    b: "Sehebat apa pun kandungannya, kalau nggak enak nggak akan dimakan ulang. Kami uji rasa berkali-kali sebelum rilis.",
  },
  {
    n: "03",
    t: "Praktis untuk hidup yang sibuk.",
    b: "Siap saji 3 menit, bisa dibawa, dan nggak butuh peralatan ribet.",
  },
  {
    n: "04",
    t: "Dibuat oleh orang yang juga konsumen.",
    b: "Founder Fitbreak dulu kolesterol tinggi di usia 20. Produk ini lahir dari kebutuhan sendiri.",
  },
];

export default function WorthItPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fitbreak Worth it?"
        title={<>Beneran worth it? Cek sendiri.</>}
        description="Kami tahu pasarnya banyak. Berikut perbandingan jujur dan alasan kenapa banyak orang memilih Fitbreak."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
            Empat alasan utama.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {REASONS.map((r) => (
              <div
                key={r.n}
                className="rounded-3xl border border-line bg-white p-7"
              >
                <span className="font-display text-3xl font-semibold text-primary">
                  {r.n}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {r.t}
                </h3>
                <p className="mt-2 text-ink/75 leading-relaxed">{r.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream/60 border-y border-line">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
            Fitbreak vs cemilan oats lain
          </h2>
          <p className="mt-2 text-ink/70">
            Perbandingan umum—tentu setiap brand punya keunggulan masing-masing.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white">
            <table className="w-full text-left">
              <thead className="bg-ink text-cream">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold">Kriteria</th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">
                    Fitbreak
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">
                    Umum
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <td className="px-5 py-4 text-ink/85">{row.label}</td>
                    <td className="px-5 py-4 text-center">
                      <Cell v={row.fitbreak} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Cell v={row.others} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Siap coba sendiri?
          </h2>
          <p className="mt-3 text-ink/75">
            Cara paling jujur untuk menilai &mdash; rasakan sendiri.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            Lihat Produk
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function Cell({ v }: { v: boolean | string }) {
  if (v === true) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
        ✓
      </span>
    );
  }
  if (v === false) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 text-ink/40 text-sm font-bold">
        ✕
      </span>
    );
  }
  return (
    <span className="rounded-full bg-cream-deep px-3 py-1 text-xs font-semibold text-ink/70">
      {v}
    </span>
  );
}
