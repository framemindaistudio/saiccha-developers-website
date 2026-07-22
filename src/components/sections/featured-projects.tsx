import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowSquareOut } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ongoingProjects, sisterProject } from "@/lib/site-data";

const projectImages: Record<string, string> = {
  "rudra-valley": "/images/rv-cinematic-aerial.jpg",
};

export function FeaturedProjects() {
  const project = ongoingProjects[0];

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            title="Where we're building right now"
            subtitle="A gated farm-plot community taking shape in the misty hills of Amboli Ghat."
          />
        </Reveal>

        <Reveal>
          <Link href={project.href} className="group grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
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
            <div className="flex flex-col items-start gap-3">
              <h3 className="font-display text-3xl tracking-tight md:text-4xl">{project.name}</h3>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                {project.tagline}
              </p>
              <span className="mt-2 flex items-center gap-2 text-sm font-medium text-primary">
                View project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={sisterProject.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-card border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                From our founding family
              </span>
              <h4 className="font-display text-lg tracking-tight">{sisterProject.name}</h4>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {sisterProject.tagline}
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary">
              Visit jagkalyan.org
              <ArrowSquareOut size={16} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
