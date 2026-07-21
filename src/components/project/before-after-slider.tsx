"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowsLeftRight } from "@phosphor-icons/react/ssr";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  label,
}: {
  beforeSrc: string;
  afterSrc: string;
  label: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-image">
        <Image src={beforeSrc} alt={`${label}, before`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover grayscale" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={afterSrc} alt={`${label}, after`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div
          className="pointer-events-none absolute top-0 bottom-0 flex w-0.5 -translate-x-1/2 items-center justify-center bg-surface-raised"
          style={{ left: `${position}%` }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-raised text-foreground shadow-md">
            <ArrowsLeftRight size={16} />
          </span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-foreground/70 px-2.5 py-1 text-[11px] font-medium text-on-primary">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-medium text-on-primary">
          After
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`Before and after comparison slider for ${label}`}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
      />
    </div>
  );
}
