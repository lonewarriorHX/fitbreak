"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  src?: string;
  poster?: string;
};

export function ScrollVideoHero({ src = "/hero.mp4", poster }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let duration = 0;
    let rafId = 0;

    const setProgress = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = Math.max(0, Math.min(scrollable, -rect.top));
      const progress = scrollable > 0 ? scrolled / scrollable : 0;

      // 1. video scrub
      if (duration && Number.isFinite(duration)) {
        try {
          video.currentTime = progress * duration;
        } catch {
          /* metadata not ready */
        }
      }

      // 2. text slides left + fades out across the full scroll
      // (linear fade, gone right at the end; slide distance grows to ~320px)
      const content = contentRef.current;
      if (content) {
        content.style.opacity = String(Math.max(0, 1 - progress));
        content.style.transform = `translate3d(${-progress * 320}px, 0, 0)`;
      }

      // hint disappears quickly so it doesn't overlap
      const hint = hintRef.current;
      if (hint) {
        hint.style.opacity = String(Math.max(0, 1 - progress * 4));
      }
    };

    const onMeta = () => {
      duration = video.duration;
      setProgress();
    };

    if (video.readyState >= 1 && Number.isFinite(video.duration)) {
      duration = video.duration;
      setProgress();
    } else {
      video.addEventListener("loadedmetadata", onMeta);
    }

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setProgress();
        rafId = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    setProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", onMeta);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-cream">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="mx-auto h-full max-w-7xl px-5 sm:px-8 flex flex-col justify-center">
            <div
              ref={contentRef}
              className="max-w-2xl will-change-transform"
              style={{ transition: "none" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 backdrop-blur border border-ink/25 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Cereal Oats · Tinggi Serat
              </span>
              <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-ink">
                Diet nggak bisa
                <br />
                ngemil enak?
                <br />
                <span className="text-accent-dark">Bisa kok.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">
                Makan sehat ga harus ribet. Fitbreak menghadirkan{" "}
                <strong className="text-ink">cereal oats tinggi serat</strong>,
                protein oatmeal, dan fit cookie yang lezat, praktis, dan beneran
                bantu jaga gula darah & kolesterol.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
                >
                  Belanja Sekarang
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/benefits"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/30 bg-white/30 backdrop-blur px-6 py-3 text-base font-semibold text-ink hover:bg-white/60 transition-colors"
                >
                  Kenapa Oats?
                </Link>
              </div>
            </div>
          </div>

          {/* scroll hint */}
          <div
            ref={hintRef}
            className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/60 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2"
          >
            <span>Scroll</span>
            <span className="block h-8 w-px bg-ink/40 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
