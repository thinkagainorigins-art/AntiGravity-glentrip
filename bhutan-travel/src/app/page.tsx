import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedPackages } from "@/components/sections/FeaturedPackages";
import { WhyVisitBhutan } from "@/components/sections/WhyVisitBhutan";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedPackages />
      <WhyVisitBhutan />
      <Testimonials />
    </div>
  );
}
