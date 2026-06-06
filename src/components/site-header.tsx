"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";

const NAV_LINKS = [
  { href: "/products", label: "Produk" },
  { href: "/benefits", label: "Manfaat Oats" },
  { href: "/worth-it", label: "Worth it?" },
  { href: "/ask-fitbreak", label: "Ask Fitbreak" },
  { href: "/testimonials", label: "Testimoni" },
  { href: "/events", label: "Events" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Fitbreak home">
          <Logo className="h-9 w-9" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Fitbreak<span className="text-primary">-in Aja!</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            Belanja
            <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line hover:bg-cream transition"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-ink transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full bg-ink transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-background">
          <nav className="mx-auto max-w-7xl px-5 sm:px-8 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-ink/80 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium text-ink/80 hover:text-primary"
            >
              Cerita Kami
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
