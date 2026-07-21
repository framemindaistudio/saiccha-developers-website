import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/lib/icon-map";
import { whyChooseUs } from "@/lib/site-data";

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading title="Why choose Saiccha Developers" />
        </Reveal>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex flex-col gap-4 border-t border-border pt-6">
                <Icon name={item.icon} size={26} className="text-primary" />
                <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
