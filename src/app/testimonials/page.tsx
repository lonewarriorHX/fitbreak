import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Testimoni",
  description: "Cerita dari teman-teman Fitbreak yang sudah mencoba.",
};

const TESTIMONIALS = [
  {
    name: "Sarah Ramadhani",
    role: "Karyawan startup, 27",
    body: "Akhirnya nemu sarapan yang nggak bikin ngantuk jam 10. Protein Oatmeal-nya juara—creamy, kenyangnya tahan sampai jam makan siang.",
    tag: "Sarapan",
  },
  {
    name: "Hendra Wijaya",
    role: "Hidup dengan kolesterol, 45",
    body: "3 bulan rutin ganti sarapan dengan Fitbreak, LDL turun 30 poin. Enak pula, jadi gampang konsisten. Istri saya yang awalnya nggak percaya sekarang ikut sarapan oats.",
    tag: "Kolesterol",
  },
  {
    name: "Dita Pranata",
    role: "Working mom, 34",
    body: "Fit Cookie jadi bekal sekolah anak. Lebih tenang dibanding biskuit pasaran—nggak ada pewarna, nggak ada gula tambahan. Anak juga doyan.",
    tag: "Anak",
  },
  {
    name: "Andre Kurniawan",
    role: "Personal trainer, 31",
    body: "Saya rekomendasiin Protein Oatmeal ke klien yang lagi cutting. Rasio protein-karbo-lemaknya bagus, dan klien suka karena praktis.",
    tag: "Workout",
  },
  {
    name: "Bu Maya",
    role: "Ibu rumah tangga, 52",
    body: "Suami sempat kena pre-diabetes. Setelah ganti sarapan ke Fitbreak dan rutin jalan kaki, gula darah puasanya turun ke normal. Alhamdulillah.",
    tag: "Gula darah",
  },
  {
    name: "Faiz Hidayat",
    role: "Mahasiswa, 22",
    body: "Sebagai anak kost, ini lifesaver. Cuma tambah air panas, jadilah sarapan sehat. Harga juga masih masuk akal buat ukuran nilai gizinya.",
    tag: "Praktis",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimoni"
        title={<>Cerita dari teman-teman Fitbreak.</>}
        description="Pengalaman jujur dari mereka yang sudah memasukkan Fitbreak ke rutinitas harian."
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-line bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary-dark">
                    {t.tag}
                  </span>
                </div>
                <blockquote className="mt-4 text-ink/85 leading-relaxed">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 pt-5 border-t border-line">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/60">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 dari 5 bintang">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.8-4.2 4.1 1 5.8L10 14.8l-5.3 2.8 1-5.8L1.5 7.6l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
