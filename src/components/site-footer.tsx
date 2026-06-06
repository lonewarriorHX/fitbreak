import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-10 w-10" tone="light" />
            <span className="font-display text-2xl font-semibold tracking-tight">
              Fitbreak<span className="text-accent">-in Aja!</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-cream/80 leading-relaxed">
            Cemilan sehat tinggi serat untuk teman hidup sehatmu. Dibuat dengan
            cinta dari Indonesia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Jelajahi
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-accent">
                Produk
              </Link>
            </li>
            <li>
              <Link href="/benefits" className="hover:text-accent">
                Manfaat Oats
              </Link>
            </li>
            <li>
              <Link href="/worth-it" className="hover:text-accent">
                Fitbreak Worth it?
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                Cerita Kami
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Hubungi
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/ask-fitbreak" className="hover:text-accent">
                Ask Fitbreak
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fitbreak.id"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Fitbreak. All rights reserved.</p>
          <p>Made with 🌱 in Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
