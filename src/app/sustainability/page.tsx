import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/lib/icon-map";
import { sustainabilityPillars } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Sustainability | Saiccha Developers",
  description: "Green development, solar energy, rainwater harvesting, water conservation, tree plantation, and ESG commitment.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        crumb="Sustainability"
        title="Green space that's reserved, not leftover"
        subtitle="Sustainability decisions made at the masterplan stage, not bolted on after launch."
      />

      <Reveal>
        <div className="relative mx-auto mt-14 aspect-[21/9] w-full max-w-[1400px] overflow-hidden rounded-image px-6 md:px-10">
          <div className="relative h-full w-full overflow-hidden rounded-image">
            <Image
              src="/images/jagkalyan-eco-campus.jpg"
              alt="Organic farms and eco-homes at the JagKalyan Tarak Gurukul campus"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      <Container className="py-16 md:py-24">
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {sustainabilityPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 2) * 0.1}>
              <div className="flex flex-col gap-4 border-t border-border pt-6">
                <Icon name={pillar.icon} size={26} className="text-primary" />
                <h2 className="text-lg font-medium tracking-tight">{pillar.title}</h2>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
