import FeaturesSection from '@/components/health-tracker/FeaturesSection';
import { FooterSection } from '@/components/health-tracker/FooterSection';
import HeroSection from '@/components/health-tracker/HeroSection';
import HowItWorksSection from '@/components/health-tracker/HowItWorksSection';
import PricingSection from '@/components/health-tracker/PricingSection';
import TestimonialsSection from '@/components/health-tracker/TestimonialsSection';
import Navbar from '@/components/NavBar';

export default function HealthTrackerPage() {
  return (
    <>
      <div className="min-h-screen">
        <div className="from-success/10 via-primary/5 to-base-200 bg-linear-to-b from-5% via-40% min-h-screen overflow-x-hidden">
          <Navbar />
          <HeroSection />
        </div>
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </>
  );
}
