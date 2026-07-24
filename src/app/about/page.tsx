import type { Metadata } from "next";
import Image from "next/image";
import { Trophy } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { Icon } from "@/lib/icon-map";
import { initials } from "@/lib/utils";
import {
  ourStory,
  vision,
  mission,
  coreValues,
  leadership,
  milestones,
  awards,
} from "@/lib/company-data";

export const metadata: Metadata = {
  title: "About Us | Saiccha Developers",
  description: "Our story, vision, mission, leadership team, milestones, and awards.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="Built on transparency, not just a tagline"
        subtitle="The story, people, and milestones behind Saiccha Developers."
      />

      <Container className="max-w-4xl">
        <ProjectSection id="story" title="Our Story">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{ourStory}</p>
        </ProjectSection>

        <ProjectSection id="vision-mission" title="Vision & Mission">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Vision</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{vision}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Mission</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{mission}</p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection id="values" title="Core Values">
          <IconRevealGrid items={coreValues} />
        </ProjectSection>

        <ProjectSection id="leadership" title="Leadership Team">
          <div className="grid gap-10 sm:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="flex flex-col gap-3">
                {person.photo ? (
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image src={person.photo} alt={person.name} fill className="object-cover" />
                  </div>
                ) : (
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-base font-medium text-primary">
                    {initials(person.name)}
                  </span>
                )}
                <div>
                  <h3 className="text-base font-medium tracking-tight">{person.name}</h3>
                  <p className="text-sm text-primary">{person.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="milestones" title="Milestones">
          <div className="flex flex-col gap-4">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex items-center gap-5 rounded-card border border-border bg-surface-raised p-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon name={m.icon} size={28} />
                </div>
                <span className="w-16 shrink-0 font-display text-xl tracking-tight text-primary">
                  {m.year}
                </span>
                <span className="text-base leading-relaxed text-foreground">{m.title}</span>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="awards" title="Awards & Recognition">
          <div className="flex flex-col gap-4">
            {awards.map((award) => (
              <div
                key={award.title}
                className="flex items-center gap-5 rounded-card border border-border bg-surface-raised p-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                  <Trophy size={28} className="text-primary" weight="duotone" />
                </div>
                <div>
                  <p className="text-base font-medium text-foreground">{award.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {award.issuer} &middot; {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ProjectSection>
      </Container>
    </>
  );
}
