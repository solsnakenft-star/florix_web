import ScrollReveal from "./ScrollReveal";

const phases = [
  { phase: "Q1 2026", title: "Foundation", items: ["Core protocol launch", "Carbon credit tokenization", "Community genesis"] },
  { phase: "Q2 2026", title: "Expansion", items: ["Partner integrations", "Governance framework", "Sustainability missions v1"] },
  { phase: "Q3 2026", title: "Scale", items: ["Cross-chain bridge", "Enterprise API", "Ambassador program"] },
  { phase: "Q4 2026", title: "Impact", items: ["Global carbon marketplace", "Regulatory compliance tools", "Impact reporting dashboard"] },
];

const RoadmapSection = () => (
  <section className="relative py-24 z-10">
    <div className="container mx-auto px-6 max-w-3xl">
      <ScrollReveal className="text-center mb-16">
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Roadmap</p>
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">The Path Forward</h2>
      </ScrollReveal>

      <div className="relative">
        {/* Glowing vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px neon-line opacity-30" />

        <div className="space-y-12">
          {phases.map((p, i) => (
            <ScrollReveal key={p.phase} delay={i * 0.15}>
              <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary box-glow pulse-neon mt-2 z-10" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-primary text-sm font-semibold">{p.phase}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{p.title}</h3>
                  <ul className={`space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {p.items.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection;
