import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ongoingProjects } from "@/lib/site-data";

const projectImages: Record<string, string> = {
  "rudra-valley": "/images/rudra-valley-villas.jpg",
  "jagkalyan-tarak-gurukul": "/images/jagkalyan-eco-campus.jpg",
};

export function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            title="Two communities taking shape"
            subtitle="From a valley of contemporary residences to a living, learning eco-campus."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {ongoingProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link href={project.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-image">
                  <Image
                    src={projectImages[project.slug]}
                    alt={`${project.name}, ${project.tagline}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-surface-raised/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-5">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-2xl tracking-tight">{project.name}</h3>
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
