import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { Icon } from "@/lib/icon-map";
import { highlights } from "@/lib/site-data";

export function Highlights() {
  return (
    <section className="bg-primary py-20 text-on-primary md:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {highlights.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col gap-3">
              <Icon name={stat.icon} size={32} className="text-on-primary/80" />
              <CountUp
                value={stat.value}
                className="font-display text-4xl tracking-tight tabular-nums md:text-5xl"
              />
              <span className="max-w-[16ch] text-base text-on-primary/70">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
