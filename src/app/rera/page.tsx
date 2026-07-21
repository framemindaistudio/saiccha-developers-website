import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { LegalNotice } from "@/components/ui/legal-notice";
import { rudraValley, jagkalyanTarakGurukul } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "RERA Details | Saiccha Developers",
};

const projects = [rudraValley, jagkalyanTarakGurukul];

export default function ReraPage() {
  return (
    <>
      <PageHero
        crumb="RERA Details"
        title="RERA Details"
        subtitle="Registration numbers and status for each active project."
      />

      <Container className="max-w-2xl py-16 md:py-24">
        <LegalNotice>
          RERA registration numbers are pending from the client and will be published here and on
          each project page once issued, per Goa RERA requirements.
        </LegalNotice>

        <div className="flex flex-col divide-y divide-border border-t border-border">
          {projects.map((project) => (
            <div key={project.name} className="flex items-center justify-between gap-4 py-5 first:pt-0">
              <div>
                <p className="text-sm font-medium text-foreground">{project.name}</p>
                <p className="text-xs text-muted-foreground">RERA number: pending</p>
              </div>
              <Link
                href={`/projects/${project === rudraValley ? "rudra-valley" : "jagkalyan-tarak-gurukul"}`}
                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover"
              >
                View project
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
