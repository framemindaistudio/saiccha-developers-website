import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { testimonials as defaultTestimonials } from "@/lib/site-data";
import { initials } from "@/lib/utils";

type TestimonialItem = { quote: string; name: string; role: string };

export function Testimonials({
  items = defaultTestimonials,
  title = "What homeowners and investors say",
  subtitle = "A few voices from people who've bought into a Saiccha community.",
}: {
  items?: TestimonialItem[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading title={title} subtitle={subtitle} />
        </Reveal>

        <Reveal>
          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
            {items.map((t) => (
              <figure
                key={t.name}
                className="flex w-[85vw] shrink-0 snap-start flex-col justify-between gap-8 border-t border-border pt-6 md:w-auto"
              >
                <blockquote className="text-lg leading-snug tracking-tight text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-primary">
                    {initials(t.name)}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
