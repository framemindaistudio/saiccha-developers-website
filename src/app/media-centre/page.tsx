import type { Metadata } from "next";
import { PlayCircle, Trophy, CalendarBlank } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { latestNews } from "@/lib/site-data";
import { pressReleases, mediaVideos, mediaEvents } from "@/lib/content-data";
import { awards } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Media Centre | Saiccha Developers",
  description: "News, press releases, videos, events, and awards from Saiccha Developers.",
};

export default function MediaCentrePage() {
  return (
    <>
      <PageHero
        crumb="Media Centre"
        title="Media Centre"
        subtitle="News, press releases, videos, events, and recognition."
      />

      <Container className="max-w-4xl">
        <ProjectSection id="news" title="News">
          <div className="flex flex-col divide-y divide-border">
            {latestNews.map((item) => (
              <div key={item.title} className="flex flex-col gap-1 py-4 first:pt-0">
                <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                <p className="text-base font-medium text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="press" title="Press Releases">
          <div className="flex flex-col divide-y divide-border">
            {pressReleases.map((item) => (
              <div key={item.title} className="flex flex-col gap-1 py-4 first:pt-0">
                <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                <p className="text-base font-medium text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="videos" title="Videos">
          <div className="grid gap-5 sm:grid-cols-2">
            {mediaVideos.map((video) => (
              <div
                key={video.title}
                className="flex items-center gap-4 rounded-card border border-border p-5"
              >
                <PlayCircle size={28} className="shrink-0 text-primary" weight="duotone" />
                <p className="text-sm font-medium text-foreground">{video.title}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="events" title="Events">
          <div className="flex flex-col gap-4">
            {mediaEvents.map((event) => (
              <div key={event.title} className="flex items-start gap-3">
                <CalendarBlank size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="awards" title="Awards">
          <div className="flex flex-col gap-4">
            {awards.map((award) => (
              <div key={award.title} className="flex items-start gap-3">
                <Trophy size={20} className="mt-0.5 shrink-0 text-primary" weight="duotone" />
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
