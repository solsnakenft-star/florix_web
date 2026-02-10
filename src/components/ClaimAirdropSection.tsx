import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ClaimAirdropSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="glass-card-glow p-10 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            
            {/* Floating sparkles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 8}%`,
                }}
              >
                <Sparkles className="w-4 h-4 text-primary/50" />
              </motion.div>
            ))}
            
            <div className="relative z-10">
              {/* Wallet Icon */}
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  rotateZ: [-2, 2, -2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative inline-block mb-8"
              >
                <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto neon-glow-lg">
                  <Wallet className="w-12 h-12 text-primary" />
                </div>
                
                {/* Pulsing rings */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 w-24 h-24 rounded-2xl border-2 border-primary/50"
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute inset-0 w-24 h-24 rounded-2xl border border-primary/30"
                />
              </motion.div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Claim Your <span className="text-gradient">Airdrop</span>
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Connect your wallet to check eligibility and claim your FLORIX tokens. 
                Early supporters receive bonus rewards!
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="btn-primary-glow rounded-full px-10 py-6 text-lg w-full sm:w-auto">
                  Claim Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <p className="text-xs text-muted-foreground mt-6">
                No wallet? <span className="text-primary cursor-pointer hover:underline">Download one here</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
