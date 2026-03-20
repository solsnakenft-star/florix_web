import ScrollReveal from "./ScrollReveal";

const EcosystemSection = () => (
  <section className="relative py-24 z-10">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <ScrollReveal>
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Ecosystem</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Blockchain-Powered Sustainability</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
          Our ecosystem leverages decentralized ledger technology to track, verify, and trade carbon credits with full transparency. Every transaction is immutable, every offset is auditable, and every participant contributes to a greener future.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          { icon: "🔗", title: "On-Chain Tracking", desc: "Every carbon credit is tokenized and verifiable on the blockchain." },
          { icon: "🌱", title: "Real Impact", desc: "Connected to verified environmental projects worldwide." },
          { icon: "🛡️", title: "Full Transparency", desc: "Open ledger ensures trust and accountability across all operations." },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.15}>
            <div className="bg-card border border-border rounded-xl p-8 card-hover-glow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
