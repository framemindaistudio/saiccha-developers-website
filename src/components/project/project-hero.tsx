import Image from "next/image";
import { ArrowRight, DownloadSimple, MapPin } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function ProjectHero({
  name,
  tagline,
  location,
  status,
  image,
  brochureUrl,
}: {
  name: string;
  tagline: string;
  location: string;
  status: string;
  image: string;
  brochureUrl?: string;
}) {
  return (
    <section className="relative flex min-h-[70dvh] items-end overflow-hidden bg-foreground">
      <Image
        src={image}
        alt={`${name}, ${tagline}`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-foreground/10" />

      <Container className="relative z-10 flex flex-col gap-6 pb-16 pt-28">
        <Reveal className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-surface-raised/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
              {status}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-on-primary/80">
              <MapPin size={15} />
              {location}
            </span>
          </div>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-on-primary md:text-6xl">
            {name}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-on-primary/80 md:text-lg">
            {tagline}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/contact" size="lg">
              Book a Site Visit
              <ArrowRight size={18} />
            </Button>
            {brochureUrl ? (
              <Button
                href={brochureUrl}
                size="lg"
                variant="secondary"
                className="border-on-primary/40 text-on-primary hover:border-on-primary hover:bg-on-primary/10"
              >
                <DownloadSimple size={18} />
                Download Brochure
              </Button>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
