import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Ask Fitbreak",
  description: "Pertanyaan yang sering muncul tentang produk Fitbreak.",
};

const FAQ = [
  {
    q: "Apa bedanya Protein Oatmeal sama oatmeal biasa?",
    a: "Protein Oatmeal kami diperkaya dengan whey + pea protein, sehingga 1 saji memberi 15g protein lengkap. Cocok untuk sarapan, pre/post workout, atau pengganti makan kalau sibuk.",
  },
  {
    q: "Aman untuk yang punya diabetes atau pre-diabetes?",
    a: "Kandungan β-glucan dari oats membantu memperlambat penyerapan gula. Tidak ada gula tambahan dalam produk kami. Tetap konsultasikan ke dokter untuk porsi yang tepat sesuai kondisimu.",
  },
  {
    q: "Apakah halal?",
    a: "Iya, produk kami diproses di fasilitas yang menjaga standar halal. Sertifikasi sedang dalam proses untuk seluruh varian.",
  },
  {
    q: "Berapa lama masa simpannya?",
    a: "Protein Oatmeal: 9 bulan dari produksi (tertera di kemasan). Fit Cookie: 60 hari karena tanpa pengawet—simpan di tempat sejuk dan kering.",
  },
  {
    q: "Pengiriman ke mana saja?",
    a: "Saat ini Jabodetabek same-day & luar kota via JNE/SiCepat. Cek ongkos di halaman checkout setelah memilih varian.",
  },
  {
    q: "Bisa COD?",
    a: "Untuk wilayah Jabodetabek bisa COD. Luar kota saat ini hanya transfer bank atau e-wallet.",
  },
  {
    q: "Bisa untuk anak-anak?",
    a: "Bisa! Fit Cookie kami populer sebagai bekal anak karena tanpa gula tambahan dan tanpa terigu. Pastikan tidak ada alergi terhadap kacang.",
  },
  {
    q: "Saya alergi kacang/telur. Apakah aman?",
    a: "Fit Cookie mengandung almond dan telur. Protein Oatmeal kami bebas kacang & telur, tapi mengandung susu (whey). Cek label sebelum membeli.",
  },
];

export default function AskFitbreakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ask Fitbreak"
        title={<>Jawaban untuk pertanyaan-pertanyaan kamu.</>}
        description="Belum nemu jawabannya? Chat kami di WhatsApp—dijawab langsung oleh tim Fitbreak."
      />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-3">
          {FAQ.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-line bg-white p-5 sm:p-6 open:bg-cream/40 transition-colors"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  {item.q}
                </h3>
                <span className="mt-1 flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary-dark font-bold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink/80 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mx-auto max-w-3xl px-5 sm:px-8 mt-12 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Masih ada pertanyaan?
          </h2>
          <p className="mt-2 text-ink/75">
            Chat langsung dengan tim kami—biasanya dibalas dalam beberapa jam.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Chat WhatsApp
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
