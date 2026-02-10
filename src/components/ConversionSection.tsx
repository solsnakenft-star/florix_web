import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, FileText, Sparkles, Coins } from "lucide-react";

export const ConversionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tokenization" ref={ref} className="py-24 relative md:mt-[-100px]">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Seamless Transformation
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Credits to{" "}
            <span className="text-gradient">Tokens</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Watch your carbon credits transform into tradeable Florix Tokens through our secure blockchain minting process.
          </p>
        </motion.div>

        {/* Conversion Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {/* Carbon Credit Certificate */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 w-full max-w-xs"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold">Carbon Certificate</p>
                <p className="text-sm text-muted-foreground">Verified Credit</p>
              </div>
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Project ID</span>
                <span className="font-mono">VCS-2847</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-mono">100 tCO₂</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className="text-primary font-medium">Verified</span>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <ArrowRight className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Minting Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="glass-card-glow p-8 rounded-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="w-24 h-24 rounded-full border-4 border-primary/30 border-t-primary" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-primary" />
              </motion.div>
            </div>
            <p className="text-center mt-4 font-heading font-semibold text-primary">
              Minting...
            </p>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary"
                style={{
                  left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                  top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="hidden lg:block"
          >
            <ArrowRight className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Florix Token */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="glass-card-glow p-6 w-full max-w-xs"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                animate={{ rotateY: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
              >
                <Coins className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <div>
                <p className="font-heading font-bold">Florix Token</p>
                <p className="text-sm text-muted-foreground">FLO</p>
              </div>
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Token ID</span>
                <span className="font-mono">#8472</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-mono neon-text">100 FLO</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Network</span>
                <span className="text-foreground">Ethereum</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
