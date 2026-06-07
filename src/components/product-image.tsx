"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductIllustration } from "./product-illustration";

type Props = {
  slug: string;
  name: string;
  image?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProductImage({
  slug,
  name,
  image,
  className,
  priority,
  sizes = "(max-width: 768px) 80vw, 400px",
}: Props) {
  const [errored, setErrored] = useState(false);

  if (image && !errored) {
    return (
      <div className={`relative aspect-[5/6] ${className ?? ""}`}>
        <Image
          src={image}
          alt={name}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain"
          onError={() => setErrored(true)}
        />
      </div>
    );
  }

  return (
    <ProductIllustration
      variant={slug as "protein-oatmeal" | "fit-cookie"}
      className={className}
    />
  );
}
