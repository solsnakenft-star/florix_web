import ScrollReveal from "./ScrollReveal";

const metrics = [
  { value: "12M+", label: "Tons of CO₂ Offset", sub: "Verified through on-chain tracking" },
  { value: "150+", label: "Verified Green Projects", sub: "Across 40+ countries worldwide" },
  { value: "17", label: "UN SDGs Aligned", sub: "Supporting global sustainability goals" },
];

const ImpactSection = () => (
  <section className="relative py-0 z-10">
    <div className="container mx-auto px-6 max-w-5xl">
      <ScrollReveal className="text-center mb-16">
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Impact</p>
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">Real-World Results</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Measurable environmental outcomes powered by blockchain transparency.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {metrics.map((m, i) => (
          <ScrollReveal key={m.label} delay={i * 0.15}>
            <div className="text-center bg-card border border-border rounded-xl p-10 card-hover-glow">
              <p className="text-4xl md:text-5xl font-bold gradient-text text-glow mb-3">{m.value}</p>
              <p className="text-foreground font-semibold text-lg mb-1">{m.label}</p>
              <p className="text-muted-foreground text-sm">{m.sub}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
