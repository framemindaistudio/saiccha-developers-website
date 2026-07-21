import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Highlights } from "@/components/sections/highlights";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestNews } from "@/components/sections/latest-news";
import { QuickEnquiry } from "@/components/sections/quick-enquiry";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <WhyChooseUs />
      <Highlights />
      <Testimonials />
      <LatestNews />
      <QuickEnquiry />
    </>
  );
}
