import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[85dvh] items-end overflow-hidden bg-foreground">
      <Image
        src="/images/hero-rudra-valley-aerial.jpg"
        alt="Aerial view of Rudra Valley, a Saiccha Developers residential community in Goa at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-foreground/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-transparent" />

      <Container className="relative z-10 pb-20 pt-32">
        <Reveal className="flex max-w-xl flex-col gap-6">
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-on-primary md:text-6xl lg:text-7xl">
            Build Better.
            <br />
            Live Better.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-on-primary/80 md:text-lg">
            Premium, transparent real estate development in Goa. RERA-registered residential and
            eco-living communities, built to last.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/contact" size="lg">
              Book a Site Visit
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/projects"
              size="lg"
              variant="secondary"
              className="border-on-primary/40 text-on-primary hover:border-on-primary hover:text-on-primary hover:bg-on-primary/10"
            >
              Explore Projects
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
