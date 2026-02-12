import { motion } from "framer-motion";
import { ArrowRight, Coins, Leaf, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, hsl(155 100% 50% / 0.08) 0%, transparent 70%)" }}
      />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Web3 Carbon Credit Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-5xl md:text-7xl font-bold mb-6"
          >
            Tokenizing{" "}
            <span className="text-gradient">Carbon Impact</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Convert verified carbon credits into Florix Tokens and power the climate economy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild className="btn-primary-glow rounded-full px-8 py-6 text-lg">
              <a href="/Florix_wallet.apk" download>
                Download Wallet
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary/50">
              <a href="/Florix_wallet.apk" download>
                Join Airdrop
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Animated Carbon Cycle Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Central Node */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-64 h-64 rounded-full border border-primary/20 animate-spin-slow" />
            <div className="absolute w-48 h-48 rounded-full border border-primary/30" style={{ animation: "spin 15s linear infinite reverse" }} />
            <div className="absolute w-32 h-32 rounded-full border border-primary/40 animate-spin-slow" />
            
            {/* Center Icon */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center neon-glow-lg">
              <Leaf className="w-10 h-10 text-primary" />
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 md:left-0 top-0 glass-card-glow p-4 w-48"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TreeDeciduous className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Carbon Credits</p>
                  <p className="font-heading font-bold text-lg">1,247 tCO₂</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 md:right-0 bottom-0 glass-card-glow p-4 w-48"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Coins className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Florix Tokens</p>
                  <p className="font-heading font-bold text-lg">24,580 FLO</p>
                </div>
              </div>
            </motion.div>

            {/* Connection Lines */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.div
                key={angle}
                className="absolute w-2 h-2 rounded-full bg-primary"
                style={{
                  left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 120}px)`,
                  top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 120}px)`,
                }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
