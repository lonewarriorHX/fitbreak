import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Manfaat Oats",
  description:
    "Bagaimana serat dari oats membantu kontrol gula darah, kolesterol, dan kesehatan pencernaan.",
};

const SECTIONS = [
  {
    eyebrow: "Soluble Fiber",
    title: "Kenapa serat larut itu istimewa?",
    body: [
      "Oats kaya akan β-glucan—jenis serat larut yang membentuk gel di saluran cerna. Gel ini memperlambat penyerapan glukosa dan menjebak molekul kolesterol.",
      "Karena fermentable, β-glucan juga jadi makanan favorit bakteri baik di usus.",
    ],
    icon: "🌾",
  },
  {
    eyebrow: "Control Blood Sugar",
    title: "Bagaimana serat mengontrol gula darah?",
    body: [
      "Saat dimakan, serat larut tidak dicerna langsung. Ia memperlambat keluarnya gula dari karbohidrat ke aliran darah.",
      "Hasilnya: lonjakan gula darah lebih kecil, energi lebih stabil, dan rasa kenyang lebih lama.",
    ],
    icon: "🩺",
  },
  {
    eyebrow: "Cholesterol & Bile Salt",
    title: "Bagaimana serat menurunkan kolesterol?",
    body: [
      "β-glucan mengikat asam empedu (bile salt) di usus, lalu membawanya keluar bersama tinja.",
      "Karena hati butuh asam empedu, ia menarik kolesterol dari darah untuk membuat asam empedu baru. Inilah kenapa LDL ikut turun.",
    ],
    icon: "❤️",
  },
  {
    eyebrow: "Fermentation in Gut",
    title: "Fermentasi di usus = nutrisi untuk mikrobiota.",
    body: [
      "Serat oats yang tidak diserap akan difermentasi bakteri baik di usus besar, menghasilkan asam lemak rantai pendek seperti butirat.",
      "Butirat dikenal mendukung kesehatan dinding usus dan mengurangi inflamasi.",
    ],
    icon: "🌱",
  },
];

export default function BenefitsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Manfaat Oats"
        title={<>Kenapa oats, dan kenapa Fitbreak?</>}
        description="Penjelasan singkat soal cara serat dari oats bekerja di tubuhmu—tanpa drama, langsung ke pointnya."
      />
      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-14">
          {SECTIONS.map((s) => (
            <article key={s.eyebrow} className="grid gap-6 sm:grid-cols-[80px_1fr]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-3xl">
                {s.icon}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
                  {s.eyebrow}
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                  {s.title}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-lg leading-relaxed text-ink/80">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <DeepDiveBloodSugar />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="rounded-3xl bg-cream border border-line p-8 sm:p-10 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
              So, that&apos;s how!
            </h3>
            <p className="mt-4 text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed">
              Begitulah cara serat dalam membantu mengontrol gula darah.
              Ternyata serat sangat bermanfaat ya, <strong>FitFriends</strong>.
              Terutama untuk kita yang sudah seharusnya lebih memperhatikan
              kadar gula darah.
            </p>
          </div>
        </div>
      </section>

      <DeepDiveCholesterol />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="rounded-3xl bg-cream border border-line p-8 sm:p-10 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
              So, that&apos;s how!
            </h3>
            <p className="mt-4 text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed">
              Serat sangat banyak perannya dalam kesehatan jantung, contohnya
              seperti yang telah kita simak mengenai kolesterol. Hal ini
              dikarenakan kolesterol yang tinggi dapat menyebabkan deposit
              lemak yang berlebihan dalam pembuluh darah. Akibatnya, aliran
              darah menjadi terhambat dan dapat memicu serangan jantung atau
              bahkan stroke.
            </p>
            <p className="mt-4 text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed">
              Setelah ini, <strong>FitFriends</strong> jadi lebih mengerti
              kan mengapa serat bisa membantu kita semua menjaga kesehatan
              jantung?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function DeepDiveBloodSugar() {
  return (
    <section className="bg-cream/60 border-y border-line py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
            <span className="h-px w-8 bg-primary-dark" />
            Deep Dive · Blood Sugar
            <span className="h-px w-8 bg-primary-dark" />
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Carbs, Gula Darah, &amp; Serat
          </h2>
          <p className="mt-3 text-ink/70 max-w-2xl mx-auto">
            Penjelasan singkat untuk paham kenapa serat penting—terutama buat
            kamu yang lagi jaga gula darah.
          </p>
        </div>

        <article className="rounded-3xl bg-background border border-line p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent-dark font-display font-semibold">
              1
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
              Carbs and Blood Sugar
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
            Apa hubungan karbohidrat dengan gula darah?
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            Sebelumnya, perlu dipahami dulu nih bahwa setiap kali kita
            mengonsumsi karbohidrat, sistem pencernaan akan memecahnya menjadi
            gula yang akan dibawa dalam darah. Jika kadar gula dalam darah kita
            tinggi, maka hormon <strong>insulin</strong> akan diproduksi untuk
            mengontrol kadar gula tersebut.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            Namun, bagi penderita <strong>diabetes tipe 2</strong> insulin
            tidak bekerja dengan baik sehingga menimbulkan lonjakan gula
            darah. Hal ini tentu saja akan mengganggu metabolisme tubuh.
          </p>
        </article>

        <article className="mt-6 rounded-3xl bg-background border border-line p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent-dark font-display font-semibold">
              2
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
              Fiber = Carbs?
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
            Serat itu sebenarnya karbohidrat juga?
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            Betul. Walaupun sama-sama karbohidrat, tubuh kita punya cara yang
            berbeda untuk mencerna serat. Berbeda dengan jenis karbohidrat
            lain, seperti <em>karbohidrat olahan</em> (refined carbs) yang
            biasa ditemukan di minuman manis, roti putih, atau kue kering.
          </p>

          <blockquote className="mt-6 rounded-2xl bg-primary-light/60 border-l-4 border-primary px-6 py-4">
            <p className="font-display text-xl italic text-primary-dark">
              &ldquo;Bagaimana caranya?&rdquo;
            </p>
          </blockquote>

          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            Serat tidak dapat dicerna dan diserap oleh sistem pencernaan kita
            karena serat akan melewati usus secara utuh. Oleh karena itu,
            serat tidak dipecah menjadi gula sehingga gula darah dapat
            dikontrol. Dengan demikian, konsumsi serat itu{" "}
            <strong>baik dan aman bagi penderita diabetes</strong>.
          </p>
        </article>
      </div>
    </section>
  );
}

function DeepDiveCholesterol() {
  const cards = [
    {
      n: "1",
      eyebrow: "Nutrition Label",
      title: "Kenapa banyak label oats bilang “bagus untuk jantung”?",
      body: [
        "FitFriends pasti pernah melihat label kemasan oats yang menyatakan “bagus untuk kesehatan jantung” dengan gambar ilustrasi hati berwarna merah. Dan betul sekali bahwa oats termasuk dalam serat larut. Sebenarnya, apakah memang serat bisa berperan juga dalam menurunkan kolesterol?",
      ],
      quote: "Caranya gimana ya?",
    },
    {
      n: "2",
      eyebrow: "Soluble Fiber",
      title: "Serat larut mengikat kolesterol jahat.",
      body: [
        "Serat larut akan membentuk gel di dalam usus halus dan mengikat kolesterol jahat. Akibatnya, kolesterol ini tidak masuk ke dalam darah atau tidak dibawa ke bagian tubuh yang lain. Kolesterol bersama dengan serat tadi akan dibuang melalui feses.",
      ],
    },
    {
      n: "3",
      eyebrow: "Cholesterol & Bile Salt",
      title: "Mengurangi penyerapan ulang garam empedu.",
      body: [
        "Serat dapat mengurangi jumlah garam empedu yang diserap kembali dari usus.",
      ],
      quote: "Lho tapi apa hubungannya dengan kadar kolesterol?",
      after: [
        "Jadi, garam empedu disintesis dari kolesterol dalam hati. Dengan demikian, kolesterol dalam tubuh akan terus dipakai untuk memproduksi garam empedu sehingga dapat menurunkan kadar kolesterol.",
      ],
    },
    {
      n: "4",
      eyebrow: "Fermentation in Gut",
      title: "Bakteri usus + serat = SCFAs.",
      body: [
        "Usus besar kita adalah rumah bagi bakteri fermentasi yang membantu pembuangan kolesterol tubuh. Hasil fermentasi serat adalah senyawa short chain fatty acids (SCFAs). Salah satu jenis SCFA, yaitu asam butirat dapat berinteraksi dengan gen pembentuk kolesterol yang dapat menurunkan produksi kolesterol.",
      ],
      footnote: "SCFA = asam lemak rantai pendek",
    },
    {
      n: "5",
      eyebrow: "Control Blood Sugar",
      title: "Gula darah stabil = trigliserida ikut turun.",
      body: [
        "Tubuh kita akan mengubah gula (glukosa) menjadi asam lemak dan trigliserida. Semakin sulit serat dicerna tubuh, semakin lambat pula lonjakan gula darah yang terjadi.",
        "Gula darah akan diubah menjadi asam lemak dan trigliserida. Oleh karena itu, kadar gula darah yang tinggi akan memicu kadar trigliserida yang tinggi pula. Serat yang membantu penghambatan gula darah secara keseluruhan akan menurunkan trigliserida dalam tubuh.",
      ],
    },
  ];

  return (
    <section className="bg-cream/60 border-y border-line py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
            <span className="h-px w-8 bg-primary-dark" />
            Deep Dive · Heart Health
            <span className="h-px w-8 bg-primary-dark" />
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Serat, Kolesterol, &amp; Jantung
          </h2>
          <p className="mt-3 text-ink/70 max-w-2xl mx-auto">
            Bagaimana serat dari oats menjaga kolesterol tetap aman—dan kenapa
            ini penting untuk jantungmu.
          </p>
        </div>

        <div className="space-y-6">
          {cards.map((c) => (
            <article
              key={c.n}
              className="rounded-3xl bg-background border border-line p-8 sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary-dark font-display font-semibold">
                  {c.n}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
                  {c.eyebrow}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                {c.title}
              </h3>
              {c.body.map((p, i) => (
                <p
                  key={i}
                  className="mt-4 text-lg leading-relaxed text-ink/85"
                >
                  {p}
                </p>
              ))}
              {c.quote && (
                <blockquote className="mt-6 rounded-2xl bg-primary-light/60 border-l-4 border-primary px-6 py-4">
                  <p className="font-display text-xl italic text-primary-dark">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                </blockquote>
              )}
              {c.after?.map((p, i) => (
                <p
                  key={i}
                  className="mt-6 text-lg leading-relaxed text-ink/85"
                >
                  {p}
                </p>
              ))}
              {c.footnote && (
                <p className="mt-5 text-sm italic text-ink/60">
                  {c.footnote}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
