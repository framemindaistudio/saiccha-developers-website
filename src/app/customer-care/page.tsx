import type { Metadata } from "next";
import { DownloadSimple, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { FaqAccordion } from "@/components/project/faq-accordion";
import { paymentPlan, customerCareDocuments, customerCareFaqs } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Customer Care | Saiccha Developers",
  description: "Construction updates, document downloads, payment information, FAQs, and support.",
};

export default function CustomerCarePage() {
  return (
    <>
      <PageHero
        crumb="Customer Care"
        title="Customer Care"
        subtitle="Construction updates, documents, payment information, and support, in one place."
      />

      <Container className="max-w-4xl">
        <ProjectSection id="documents" title="Download Documents">
          <div className="flex flex-col divide-y divide-border border-t border-border">
            {customerCareDocuments.map((doc) => (
              <a
                key={doc.title}
                href="#"
                className="group flex items-center justify-between gap-4 py-4 first:pt-0"
              >
                <span className="text-sm font-medium text-foreground">{doc.title}</span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  {doc.type}
                  <DownloadSimple size={16} className="text-primary" />
                </span>
              </a>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="payment" title="Payment Information">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A typical milestone-based payment schedule. Confirmed schedules are shared per unit at
            booking.
          </p>
          <div className="flex flex-col divide-y divide-border border-t border-border">
            {paymentPlan.map((row) => (
              <div key={row.milestone} className="flex items-center justify-between py-3">
                <span className="text-sm text-foreground">{row.milestone}</span>
                <span className="text-sm font-medium tabular-nums text-primary">
                  {row.percentage}
                </span>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="faqs" title="FAQs">
          <FaqAccordion items={customerCareFaqs} />
        </ProjectSection>

        <ProjectSection id="support" title="Support">
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="mailto:care@saicchadevelopers.com"
              className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <EnvelopeSimple size={20} className="text-primary" />
              care@saicchadevelopers.com
            </a>
          </div>
        </ProjectSection>
      </Container>
    </>
  );
}
