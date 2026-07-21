import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { Reveal } from "@/components/motion/reveal";
import { ongoingProjects } from "@/lib/site-data";
import { futureProjects } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Projects | Saiccha Developers",
  description: "Ongoing, completed, and future projects from Saiccha Developers.",
};

const projectImages: Record<string, string> = {
  "rudra-valley": "/images/rudra-valley-villas.jpg",
  "jagkalyan-tarak-gurukul": "/images/jagkalyan-eco-campus.jpg",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        title="Every project, one place"
        subtitle="Ongoing developments, completed work, and what's coming next."
      />

      <Container className="max-w-4xl">
        <ProjectSection id="ongoing" title="Ongoing Projects">
          <div className="grid gap-8 sm:grid-cols-2">
            {ongoingProjects.map((project) => (
              <Reveal key={project.slug}>
                <Link href={project.href} className="group block">
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
                  <div className="flex items-start justify-between gap-4 pt-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-xl tracking-tight">{project.name}</h3>
                      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {project.tagline}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
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
