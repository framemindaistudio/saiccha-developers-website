"use client";

import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react/ssr";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to real newsletter provider once client confirms one.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="text-sm text-on-primary/90">
        Thanks, we&rsquo;ll keep you posted on new releases and updates.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="h-11 min-w-0 flex-1 rounded-input border border-on-primary/25 bg-transparent px-4 text-sm text-on-primary placeholder:text-on-primary/50 outline-none focus-visible:border-on-primary"
      />
      <button
        type="submit"
        aria-label="Subscribe to newsletter"
        className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-on-primary text-primary transition-transform active:scale-[0.96]"
      >
        <PaperPlaneTilt size={18} weight="fill" />
      </button>
    </form>
  );
}
