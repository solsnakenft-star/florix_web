import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { JoinAirdropSection } from "@/components/JoinAirdropSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CarbonEducationSection } from "@/components/CarbonEducationSection";
import { LifecycleSection } from "@/components/LifecycleSection";
import { ConversionSection } from "@/components/ConversionSection";
import { TokenEconomicsSection } from "@/components/TokenEconomicsSection";
import { TokenSaleSection } from "@/components/TokenSaleSection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { MarketplaceSection } from "@/components/MarketplaceSection";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { HowItWorks } from "@/components/HowItWorks";
import { ClaimAirdropSection } from "@/components/ClaimAirdropSection";
import { SecuritySection } from "@/components/SecuritySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingParticles />
      <Navbar />
      <main>
        <HeroSection />
        <JoinAirdropSection />
        <FeaturesSection />
        <CarbonEducationSection />
        <LifecycleSection />
        <ConversionSection />
        <TokenEconomicsSection />
        <TokenSaleSection />
        <DashboardPreview />
        <MarketplaceSection />
        <ImpactMetrics />
        <HowItWorks />
        <ClaimAirdropSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
