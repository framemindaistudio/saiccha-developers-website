import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { Reveal } from "@/components/motion/reveal";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { Icon } from "@/lib/icon-map";
import { ongoingProjects } from "@/lib/site-data";
import { futureProjects } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Projects | Saiccha Developers",
  description: "Ongoing, completed, and future projects from Saiccha Developers.",
};

const projectImages: Record<string, string> = {
  "rudra-valley": "/images/rv-cinematic-aerial.jpg",
  "jagkalyan-tarak-gurukul": "/images/jk-amenity-water-body.jpg",
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
        <Reveal className="grid gap-6 pb-14 pt-20 sm:grid-cols-3 md:pt-24">
          <a
            href="#ongoing"
            className="group flex flex-col gap-3 rounded-card border border-border bg-surface-raised p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Icon name="Buildings" size={28} />
            </div>
            <span className="text-base font-medium uppercase tracking-wide text-primary">
              Ongoing
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rudra Valley&rsquo;s farm plots, and the Saiccha Wisdom Valley scheme beside JagKalyan Tarak
              Gurukul.
            </p>
          </a>
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

        <ProjectSection id="ongoing" title="Ongoing Projects">
          <div className="flex flex-col gap-10">
            {ongoingProjects.map((project) => (
              <Reveal key={project.slug}>
                <Link
                  href={project.href}
                  className="group grid gap-6 sm:grid-cols-2 sm:items-center sm:gap-8"
                >
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
