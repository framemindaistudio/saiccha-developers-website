import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { BlogList } from "@/components/blog/blog-list";
import { blogPosts, blogCategories } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Blog & Insights | Saiccha Developers",
  description: "Real estate trends, investment guides, the Goa property market, sustainable living, and construction updates.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Blog & Insights"
        title="Blog & Insights"
        subtitle="Real estate trends, investment guides, and updates from across our developments."
      />

      <Container className="max-w-3xl py-16 md:py-24">
        <BlogList posts={blogPosts} categories={blogCategories} />
      </Container>
    </>
  );
}
