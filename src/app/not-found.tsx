import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-xl px-5 sm:px-8 text-center">
        <p className="font-display text-6xl font-semibold text-primary-dark">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
          Halaman ini nggak ada.
        </h1>
        <p className="mt-3 text-ink/70">
          Mungkin tersesat seperti diet tanpa rencana. Tenang, kami antar pulang.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
        >
          Kembali ke beranda
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
