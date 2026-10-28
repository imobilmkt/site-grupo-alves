"use client";

import Image from "next/image";
import { useState } from "react";

export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-cream sm:h-96 md:h-[480px]">
        <Image
          src={images[active]}
          alt={`${title} - foto ${active + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-7 md:grid-cols-8">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              className={`relative aspect-square overflow-hidden rounded-lg ring-2 transition ${
                index === active ? "ring-gold-500" : "ring-transparent hover:ring-gold-300"
              }`}
              aria-label={`Ver foto ${index + 1}`}
            >
              <Image src={src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
