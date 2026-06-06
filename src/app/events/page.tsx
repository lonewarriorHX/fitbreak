import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Events",
  description: "Jadwal pop-up, kelas, dan kolaborasi Fitbreak.",
};

const EVENTS = [
  {
    date: "12 Jul 2026",
    title: "Pop-up Fitbreak @ Pasar Santa",
    location: "Pasar Santa, Jakarta Selatan",
    description:
      "Cicipi rasa baru Protein Oatmeal Matcha dan Fit Cookie Choco Chip. Free sample untuk 100 pengunjung pertama.",
    cta: "Set reminder",
  },
  {
    date: "20 Jul 2026",
    title: "Workshop: Sarapan Sehat 5 Menit",
    location: "Online via Zoom",
    description:
      "Belajar resep sarapan oats yang cocok untuk pagi yang sibuk, dipandu chef Fitbreak. Gratis untuk customer terdaftar.",
    cta: "Daftar",
  },
  {
    date: "3 Aug 2026",
    title: "Fitbreak x Local Run Club",
    location: "GBK, Jakarta",
    description:
      "Komunitas lari pagi + free Fit Cookie post-run. Open untuk semua level.",
    cta: "Info detail",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title={<>Acara, pop-up, dan kolaborasi.</>}
        description="Datang, kenalan, dan cobain langsung produk kami. Update jadwal di sini dan di Instagram @fitbreak.id."
      />
      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-5">
          {EVENTS.map((e, i) => (
            <article
              key={i}
              className="grid gap-6 sm:grid-cols-[160px_1fr] rounded-3xl border border-line bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-2xl bg-primary-light px-4 py-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
                    {e.date.split(" ")[1]} {e.date.split(" ")[2]}
                  </p>
                  <p className="font-display text-3xl font-semibold text-primary-dark leading-none">
                    {e.date.split(" ")[0]}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {e.title}
                </h2>
                <p className="mt-1 text-sm text-ink/60">📍 {e.location}</p>
                <p className="mt-4 text-ink/80 leading-relaxed">
                  {e.description}
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink hover:border-primary hover:text-primary-dark transition-colors"
                >
                  {e.cta} <span aria-hidden>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-4xl px-5 sm:px-8 mt-12 text-center">
          <p className="text-ink/70">
            Ingin Fitbreak hadir di acara komunitasmu? Kontak kami untuk
            kolaborasi.
          </p>
          <a
            href="mailto:halo@fitbreak.id"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark hover:underline"
          >
            halo@fitbreak.id →
          </a>
        </div>
      </section>
    </>
  );
}
