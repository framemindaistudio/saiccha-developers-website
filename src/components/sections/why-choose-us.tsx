import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { whyChooseUs } from "@/lib/site-data";

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            title="Why choose Saiccha Developers"
            subtitle="Tap a card to read more."
          />
        </Reveal>

        <IconRevealGrid items={whyChooseUs} columns={2} />
      </Container>
    </section>
  );
}
