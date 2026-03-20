import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import FeaturesSection from "@/components/FeaturesSection";
import TokenDistributionSection from "@/components/TokenDistributionSection";
import CommunitySection from "@/components/CommunitySection";
import ImpactSection from "@/components/ImpactSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background relative overflow-x-hidden">
    <FloatingParticles />
    <Navbar />
    <HeroSection />
    <div id="ecosystem"><EcosystemSection /></div>
    <div id="features"><FeaturesSection /></div>
    <TokenDistributionSection />
    <div id="community"><CommunitySection /></div>
    <ImpactSection />
    <div id="roadmap"><RoadmapSection /></div>
    <FooterSection />
  </div>
);

export default Index;
