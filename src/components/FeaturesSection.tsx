import ScrollReveal from "./ScrollReveal";
import { Shield, BookOpen, Users, Leaf } from "lucide-react";

const features = [
  { icon: Shield, title: "Carbon Credit Verification", desc: "Multi-layer verification protocol ensures every credit is authentic, auditable, and backed by real-world environmental action." },
  { icon: BookOpen, title: "Transparent Ledger System", desc: "An immutable public ledger records every transaction, providing complete auditability for stakeholders and regulators." },
  { icon: Users, title: "Community Participation Programs", desc: "Engage in sustainability missions and contribute to the ecosystem through decentralized participation programs." },
  { icon: Leaf, title: "Sustainable Token Utility", desc: "Tokens power governance, staking, and ecosystem services — designed for long-term value aligned with sustainability goals." },
];

const FeaturesSection = () => (
  <section className="relative py-24 z-10">
    <div className="container mx-auto px-6 max-w-5xl">
      <ScrollReveal className="text-center mb-16">
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Core Features</p>
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">Built for Trust & Impact</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-xl p-8 card-hover-glow group h-full">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
