"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function StoryImage({
  src = "/story/our-story.jpg",
  alt = "Story of Fitbreak",
  className,
  priority,
  sizes = "(max-width: 1024px) 90vw, 480px",
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-primary-light via-cream to-[#F6E6C2] border border-line ${className ?? ""}`}
      >
        <div className="absolute inset-0 bg-grain opacity-50" aria-hidden />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-6xl">🌾</div>
            <p className="mt-4 font-display text-xl font-semibold text-primary-dark">
              Story of Us
            </p>
            <p className="mt-2 text-xs text-ink/50">
              Drop image at <code>public{src}</code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
