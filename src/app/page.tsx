import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Highlights } from "@/components/sections/highlights";
import { LatestNews } from "@/components/sections/latest-news";
import { QuickEnquiry } from "@/components/sections/quick-enquiry";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Highlights />
      <LatestNews />
      <QuickEnquiry />
    </>
  );
}
