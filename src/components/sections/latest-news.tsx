import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { latestNews } from "@/lib/site-data";

export function LatestNews() {
  const [featured, ...rest] = latestNews;

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading title="Latest news" />
          <Link
            href="/media-centre"
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover"
          >
            View media centre
            <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Link href={featured.href} className="group flex flex-col gap-4">
              <span className="text-xs font-medium text-muted-foreground">{featured.date}</span>
              <h3 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
                {featured.title}
              </h3>
              <span className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read more
                <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>

          <div className="flex flex-col divide-y divide-border">
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <Link href={item.href} className="group flex flex-col gap-2 py-6 first:pt-0">
                  <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                  <h4 className="text-base font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h4>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
