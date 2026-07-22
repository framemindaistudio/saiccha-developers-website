import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { CircularTestimonials } from "@/components/motion/circular-testimonials";
import { testimonials as defaultTestimonials } from "@/lib/site-data";

type TestimonialItem = { quote: string; name: string; role: string };

export function Testimonials({
  items = defaultTestimonials,
  title = "What farm owners and investors say",
  subtitle = "A few voices from people who've bought into a Saiccha community.",
}: {
  items?: TestimonialItem[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading title={title} subtitle={subtitle} />
        </Reveal>

        <Reveal>
          <CircularTestimonials testimonials={items} />
        </Reveal>
      </Container>
    </section>
  );
}
