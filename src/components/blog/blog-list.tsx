"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { blogPosts } from "@/lib/content-data";

export function BlogList({
  posts,
  categories,
}: {
  posts: typeof blogPosts;
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors",
              active === cat
                ? "border-primary bg-primary text-on-primary"
                : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col divide-y divide-border border-t border-border">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 py-8 first:pt-0"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{post.category}</span>
              <span aria-hidden>&middot;</span>
              <span>{post.date}</span>
            </div>
            <h2 className="font-display text-xl tracking-tight transition-colors group-hover:text-primary md:text-2xl">
              {post.title}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
