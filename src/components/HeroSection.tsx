import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-gradient-radial" />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
      style={{ background: "radial-gradient(circle, hsl(153 100% 50% / 0.15), transparent 70%)" }} />

    <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-6 font-medium">Blockchain × Sustainability</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="gradient-text text-glow-strong">Powering the Future</span>
          <br />
          <span className="text-foreground">of Carbon-Neutral Web3</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A transparent carbon credit ecosystem built on blockchain - driving sustainability, accountability, and real-world environmental impact.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button className="relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg box-glow animate-glow-pulse hover:box-glow-strong transition-all duration-300 hover:scale-105">
          Explore Ecosystem
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 flex justify-center gap-12 text-center"
      >
        {[
          ["12M+", "Tons CO₂ Offset"],
          ["150+", "Verified Projects"],
          ["50K+", "Community Members"],
        ].map(([val, label]) => (
          <div key={label}>
            <p className="text-2xl md:text-3xl font-bold gradient-text">{val}</p>
            <p className="text-muted-foreground text-sm mt-1">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
