"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/ssr";

type CarouselImage = { src: string; alt: string };

export function ThreeDCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  function next() {
    setIndex((i) => (i + 1) % count);
  }
  function prev() {
    setIndex((i) => (i - 1 + count) % count);
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative flex h-[300px] w-full items-center justify-center [perspective:1600px] sm:h-[400px]">
        {images.map((img, i) => {
          let offset = i - index;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const isActive = offset === 0;
          const abs = Math.abs(offset);
          if (abs > 2) return null;

          return (
            <motion.div
              key={img.src}
              className="absolute h-[240px] w-[190px] sm:h-[320px] sm:w-[260px]"
              animate={{
                x: offset * 170,
                scale: isActive ? 1 : 0.78,
                rotateY: offset * -32,
                opacity: abs > 1 ? 0 : 1,
                zIndex: 10 - abs,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${img.alt}`}
                className="relative block h-full w-full cursor-pointer overflow-hidden rounded-image shadow-xl shadow-foreground/20"
              >
                <Image src={img.src} alt={img.alt} fill sizes="280px" className="object-cover" />
              </button>
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
