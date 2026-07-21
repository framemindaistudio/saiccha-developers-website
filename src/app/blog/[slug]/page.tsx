import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { blogPosts } from "@/lib/content-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} | Saiccha Developers` : "Blog | Saiccha Developers" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        crumb="Blog & Insights"
        eyebrow={post.category}
        title={post.title}
        subtitle={post.date}
      />

      <Container className="max-w-2xl py-16 md:py-24">
        <p className="text-lg leading-relaxed text-foreground">{post.excerpt}</p>
        <div className="mt-8 rounded-card border border-dashed border-border-strong p-6 text-sm text-muted-foreground">
          Full article content to be added.
        </div>
      </Container>
    </>
  );
}
