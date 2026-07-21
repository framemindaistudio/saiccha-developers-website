import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="border-b border-border bg-surface pb-16 pt-14 md:pb-20 md:pt-20">
      <Container className="flex flex-col gap-5">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <CaretRight size={11} />
          <span className="text-foreground">{crumb}</span>
        </nav>
        <div className="flex max-w-2xl flex-col gap-4">
          {eyebrow ? (
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-display text-4xl leading-[1.08] tracking-tight md:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
