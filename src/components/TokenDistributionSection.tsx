import ScrollReveal from "./ScrollReveal";

const allocations = [
  { label: "Community Incentives", pct: 8, color: "bg-primary" },
  { label: "Ecosystem Development", pct: 22, color: "bg-primary/70" },
  { label: "Environmental Initiatives", pct: 21, color: "bg-primary/50" },
  { label: "Strategic Partnerships", pct: 18, color: "bg-primary/30" },
  { label: "Legal Compliance", pct: 12, color: "bg-primary/30" },
  { label: "Innovation", pct: 7, color: "bg-primary/30" },
  { label: "Liquidity & Exchange Reserve", pct: 12, color: "bg-primary/30" },
];

const TokenDistributionSection = () => (
  <section className="relative py-0 z-10">
    <div className="container mx-auto px-6 max-w-4xl">
      <ScrollReveal className="text-center mb-16">
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Token Allocation</p>
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">Ecosystem Distribution</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Designed for long-term sustainability - every token allocation serves the ecosystem and its community.</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {allocations.map((a, i) => (
          <ScrollReveal key={a.label} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-xl p-6 card-hover-glow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-foreground font-semibold">{a.label}</h3>
                <span className="text-primary font-bold text-2xl">{a.pct}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className={`h-full ${a.color} rounded-full transition-all duration-1000`} style={{ width: `${a.pct}%` }} />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TokenDistributionSection;
