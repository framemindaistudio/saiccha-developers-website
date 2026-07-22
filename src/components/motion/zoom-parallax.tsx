"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type ZoomImage = { src: string; alt: string };

const slots = [
  { pos: "left-[31%] top-[31%] h-[38%] w-[38%]", scaleTo: 1.6, z: 5 },
  { pos: "left-[4%] top-[8%] h-[24%] w-[20%]", scaleTo: 2.4, z: 4 },
  { pos: "right-[4%] top-[8%] h-[24%] w-[20%]", scaleTo: 2.6, z: 4 },
  { pos: "left-[4%] bottom-[6%] h-[24%] w-[20%]", scaleTo: 2.3, z: 4 },
  { pos: "right-[4%] bottom-[6%] h-[24%] w-[20%]", scaleTo: 2.7, z: 4 },
] as const;

function ZoomSlot({
  img,
  slot,
  progress,
}: {
  img: ZoomImage;
  slot: (typeof slots)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const scale = useTransform(progress, [0, 1], [1, slot.scaleTo]);

  return (
    <motion.div
      style={{ scale, zIndex: slot.z }}
      className={`absolute ${slot.pos} overflow-hidden rounded-image shadow-2xl shadow-foreground/30`}
    >
      <Image src={img.src} alt={img.alt} fill sizes="45vw" className="object-cover" />
    </motion.div>
  );
}

export function ZoomParallax({ images }: { images: ZoomImage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const items = images.slice(0, 5);

  if (reduce) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((img) => (
          <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-image">
            <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative h-[70vh] w-full max-w-4xl">
          {items.map((img, i) => (
            <ZoomSlot key={img.src} img={img} slot={slots[i]} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}
