import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { futureProjects } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Future Projects | Saiccha Developers",
  description: "Upcoming developments and investment opportunities from Saiccha Developers.",
};

export default function FutureProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Future Projects"
        title="What's next for Saiccha"
        subtitle="Early-stage developments, published as soon as they're real, not before."
      />

      <Container className="max-w-3xl py-16 md:py-24">
        <div className="flex flex-col divide-y divide-border border-t border-border">
          {futureProjects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <div className="flex flex-col gap-2 py-8 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="flex flex-col gap-2">
                  <h2 className="font-display text-xl tracking-tight">{project.name}</h2>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span className="shrink-0 self-start rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-primary">
                  {project.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-card border border-border bg-surface p-8">
          <h3 className="font-display text-xl tracking-tight">Want early access?</h3>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Register your interest and we&rsquo;ll reach out as soon as a future project opens for
            bookings.
          </p>
          <Button href="/investors">
            Investment Opportunities
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </>
  );
}
