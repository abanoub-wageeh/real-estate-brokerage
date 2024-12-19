import { HeroSection } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedListings } from "@/components/sections/featured-listings";
import { Testimonials } from "@/components/sections/testimonials";
import { Statistics } from "@/components/sections/statistics";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
      <ServicesOverview />
      <FeaturedListings />
      <Testimonials />
      <Statistics />
      <Newsletter />
    </div>
  );
}