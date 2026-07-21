import type { Metadata } from "next";
import { Trophy } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
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
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {coreValues.map((value) => (
              <div key={value.title} className="flex flex-col gap-2 border-t border-border pt-4">
                <h3 className="text-base font-medium tracking-tight">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="leadership" title="Leadership Team">
          <div className="grid gap-10 sm:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="flex flex-col gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-base font-medium text-primary">
                  {initials(person.name)}
                </span>
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
          <div className="flex flex-col divide-y divide-border">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 py-4 first:pt-0">
                <span className="w-16 shrink-0 font-display text-lg tracking-tight text-primary">
                  {m.year}
                </span>
                <span className="text-sm leading-relaxed text-foreground">{m.title}</span>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="awards" title="Awards & Recognition">
          <div className="flex flex-col gap-5">
            {awards.map((award) => (
              <div key={award.title} className="flex items-start gap-4">
                <Trophy size={22} className="mt-0.5 shrink-0 text-primary" weight="duotone" />
                <div>
                  <p className="text-sm font-medium text-foreground">{award.title}</p>
                  <p className="text-xs text-muted-foreground">
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
