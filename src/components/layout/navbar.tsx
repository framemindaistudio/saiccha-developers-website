"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X, CaretDown, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { primaryNav } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 font-display text-xl tracking-tight text-foreground"
          onClick={() => setMobileOpen(false)}
        >
          Saiccha Developers
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.items ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                  <CaretDown size={14} weight="bold" />
                </Link>
                {/* Hover/focus flyout: a bonus for mouse and keyboard users. The
                    trigger above is a real link, so tap-only devices (which
                    can't rely on :hover) still navigate reliably on tap. */}
                <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-56 rounded-card border border-border bg-surface-raised p-2 shadow-lg shadow-foreground/5">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/918073087576"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Saiccha Developers on WhatsApp"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-strong text-primary transition-colors hover:border-primary"
          >
            <WhatsappLogo size={20} weight="fill" />
          </a>
          <Button href="/contact">Book a Site Visit</Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-border bg-surface lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-base font-medium text-foreground"
                >
                  {item.label}
                </Link>
                {item.items ? (
                  <div className="ml-3 flex flex-col border-l border-border pl-3">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 text-sm text-muted-foreground"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Button href="/contact" className="mt-3 w-full">
              Book a Site Visit
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
