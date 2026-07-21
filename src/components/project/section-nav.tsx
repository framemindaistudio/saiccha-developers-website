"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SectionNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-28 hidden flex-col gap-1 self-start lg:flex">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={cn(
            "border-l-2 py-1.5 pl-4 text-sm transition-colors",
            active === s.id
              ? "border-primary font-medium text-primary"
              : "border-border text-muted-foreground hover:text-foreground"
          )}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
