import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowSquareOut } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { Reveal } from "@/components/motion/reveal";
import { ongoingProjects, sisterProject } from "@/lib/site-data";
import { futureProjects } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Projects | Saiccha Developers",
  description: "Ongoing, completed, and future projects from Saiccha Developers.",
};

const projectImages: Record<string, string> = {
  "rudra-valley": "/images/rv-cinematic-aerial.jpg",
};

export default function ProjectsPage() {
  const project = ongoingProjects[0];

  return (
    <>
      <PageHero
        crumb="Projects"
        title="Every project, one place"
        subtitle="Ongoing developments, completed work, and what's coming next."
      />

      <Container className="max-w-4xl">
        <ProjectSection id="ongoing" title="Ongoing Projects">
          <Reveal>
            <Link href={project.href} className="group grid gap-6 sm:grid-cols-2 sm:items-center sm:gap-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-image">
                <Image
                  src={projectImages[project.slug]}
                  alt={`${project.name}, ${project.tagline}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-surface-raised/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
                  {project.status}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-xl tracking-tight">{project.name}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {project.tagline}
                </p>
                <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-primary">
                  View project
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <a
            href={sisterProject.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex flex-col gap-3 rounded-card border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
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
        </ProjectSection>

        <ProjectSection id="completed" title="Completed Projects">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Land development, residential bungalows, and commercial complexes, delivered and
            handed over.
          </p>
          <Link
            href="/projects/completed"
            className="flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover"
          >
            View completed projects
            <ArrowRight size={16} />
          </Link>
        </ProjectSection>

        <ProjectSection id="future" title="Future Projects">
          <div className="flex flex-col divide-y divide-border border-t border-border">
            {futureProjects.map((project) => (
              <div key={project.name} className="flex items-center justify-between gap-4 py-4 first:pt-0">
                <span className="text-sm font-medium text-foreground">{project.name}</span>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/projects/future"
            className="flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover"
          >
            View future projects
            <ArrowRight size={16} />
          </Link>
        </ProjectSection>
      </Container>
    </>
  );
}
