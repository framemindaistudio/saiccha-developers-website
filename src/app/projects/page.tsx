import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { Reveal } from "@/components/motion/reveal";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { Icon } from "@/lib/icon-map";
import { futureProjects } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Projects | Saiccha Developers",
  description: "Completed and future projects from Saiccha Developers.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        title="Every project, one place"
        subtitle="Completed work and what's coming next."
      />

      <Container className="max-w-4xl">
        <Reveal className="grid gap-6 pb-14 pt-20 sm:grid-cols-2 md:pt-24">
          <a
            href="#completed"
            className="group flex flex-col gap-3 rounded-card border border-border bg-surface-raised p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Icon name="House" size={28} />
            </div>
            <span className="text-base font-medium uppercase tracking-wide text-primary">
              Completed
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Land, bungalows, and commercial complexes already delivered.
            </p>
          </a>
          <a
            href="#future"
            className="group flex flex-col gap-3 rounded-card border border-border bg-surface-raised p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Icon name="Path" size={28} />
            </div>
            <span className="text-base font-medium uppercase tracking-wide text-primary">
              Future
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              What&rsquo;s coming next as the company grows.
            </p>
          </a>
        </Reveal>

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
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Tap a project to read where it stands today.
          </p>
          <IconRevealGrid
            items={futureProjects.map((project) => ({
              icon: project.icon,
              title: project.name,
              body: `${project.status}. ${project.description}`,
            }))}
            columns={2}
          />
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
