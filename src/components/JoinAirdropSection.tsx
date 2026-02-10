import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Users, Coins, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const JoinAirdropSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="airdrop" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card-glow p-8 md:p-12 md:mt-[-75px] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6"
                >
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Limited Time Offer</span>
                </motion.div>
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Join the <span className="text-gradient">Florix Airdrop</span>
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Be among the first to receive FLORIX tokens. Early adopters get exclusive rewards 
                  for helping build the future of carbon markets on the blockchain.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">42,580 participants joined</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Coins className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">200M FLORIX tokens allocated</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Distribution Progress</span>
                    <span className="text-primary font-medium">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>

                <Button className="btn-primary-glow rounded-full px-8 py-6">
                  Claim Your Airdrop
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Right - Gift Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative">
                  {/* Glowing rings */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 w-48 h-48 rounded-full border-2 border-primary/30 mx-auto"
                    style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="absolute inset-0 w-64 h-64 rounded-full border border-primary/20 mx-auto"
                    style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                  />
                  
                  {/* Center gift icon */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 rounded-2xl bg-primary/20 flex items-center justify-center neon-glow-lg"
                  >
                    <Gift className="w-16 h-16 text-primary" />
                  </motion.div>

                  {/* Floating tokens */}
                  {[0, 72, 144, 216, 288].map((angle, i) => (
                    <motion.div
                      key={angle}
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                      }}
                      className="absolute w-6 h-6 rounded-full bg-primary/40 flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 80}px - 12px)`,
                        top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 80}px - 12px)`,
                      }}
                    >
                      <Coins className="w-3 h-3 text-primary" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
