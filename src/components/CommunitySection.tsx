import ScrollReveal from "./ScrollReveal";
import { Award, Target, Globe } from "lucide-react";

const programs = [
  { icon: Award, title: "Contributor Programs", desc: "Earn recognition and ecosystem incentives by contributing to protocol development, governance, and community growth." },
  { icon: Target, title: "Sustainability Missions", desc: "Participate in time-bound missions focused on real-world environmental outcomes and carbon offset verification." },
  { icon: Globe, title: "Ambassador Initiatives", desc: "Represent the ecosystem globally - educate, onboard, and expand the community in your region." },
];

const CommunitySection = () => (
  <section className="relative py-24 z-10">
    <div className="container mx-auto px-6 max-w-5xl">
      <ScrollReveal className="text-center mb-16">
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Community</p>
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">Participate & Contribute</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.15}>
            <div className="bg-card border border-border rounded-xl p-8 card-hover-glow text-center h-full">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CommunitySection;
