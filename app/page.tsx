import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { FrameworkSection } from "@/components/sections/framework-section";
import { DifferentiationSection } from "@/components/sections/differentiation-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AudienceSection />
        <CaseStudiesSection />
        <FrameworkSection />
        <DifferentiationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
