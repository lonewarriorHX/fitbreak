import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Cerita Kami",
  description:
    "Story of Us — bagaimana Fitbreak lahir dari pengalaman pribadi founder kami.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Story of Us"
        title={<>Lahir dari pengalaman, bukan tren.</>}
        description="Fitbreak bermula dari cerita pribadi—dan keinginan supaya kamu nggak harus menunggu sakit dulu untuk mulai hidup sehat."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-6 text-lg leading-relaxed text-ink/85">
          <p>
            Fitbreak bermula dari founder kami sendiri, saat kecil sering
            mengkonsumsi makanan tinggi lemak jenuh, gula, dan garam... hingga
            akhirnya mengalami <strong className="text-ink">kolesterol tinggi di usia 20 tahun</strong>.
          </p>
          <p>
            Hal ini menyadarkan beliau untuk mengganti pola makan lebih sehat.
            Namun, sudah cukup terlambat karena penyakit itu sudah datang dan
            meninggalkan bekas.
          </p>
          <p>
            Beliau suka ngemil makan manis, tapi takut terkena diabetes. Saat
            itu, masih jarang menemukan snack yang{" "}
            <em>manis, enak, dan bernutrisi</em>. Akhirnya beliau coba membuat
            pilihan snack lebih sehat sebagai solusi ngemil.
          </p>
        </div>
      </section>

      <section className="bg-cream/60 border-y border-line py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <p className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-snug">
            Lahirlah <span className="text-primary">Fitbreak Cereal Oats</span>—
            tinggi serat, solusi cegah ngemil berlebih.
          </p>
          <p className="mt-4 text-ink/70">
            Beliau berpikir, siapa tahu di luar sana ada yang mengalami hal
            yang sama dan membutuhkan solusi ini.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-6 text-lg leading-relaxed text-ink/85">
          <p>
            Beliau tidak ingin penyesalan yang sama karena pola hidup tidak
            sehat terjadi ke orang lain.
          </p>
          <p>
            Oleh karena itu, kami berharap melalui Fitbreak kami dapat menjadi{" "}
            <strong className="text-ink">teman kamu</strong> yang baru
            mulai/sedang menjalani pola hidup lebih sehat, membantu
            menyadarkan dan menyebarkan semangat hidup sehat untuk{" "}
            <strong className="text-ink">
              mencegah sebelum penyesalan dan penyakit itu datang
            </strong>.
          </p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Yuk, mulai bareng kami.
          </h2>
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
