import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Leaf, TreePine, Wind } from "lucide-react";

export const CarbonEducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Verified carbon reduction projects",
    "Transparent blockchain tracking",
    "Direct environmental impact",
    "Tradeable digital assets",
  ];

  return (
    <section id="carbon-credits" ref={ref} className="py-24 relative">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
              
              {/* Forest Illustration */}
              <div className="relative glass-card rounded-3xl p-8 h-full flex flex-col items-center justify-center">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <TreePine 
                        className="w-12 h-12 text-primary" 
                        style={{ opacity: 0.5 + (i * 0.1) }}
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* CO2 Reduction Badge */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="glass-card-glow px-6 py-3 rounded-full flex items-center gap-3"
                >
                  <Wind className="w-5 h-5 text-primary" />
                  <span className="font-heading font-bold text-lg">-2,450 tCO₂</span>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center neon-glow">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Understanding Carbon Credits
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Are{" "}
              <span className="text-gradient">Carbon Credits?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Carbon credits represent verified reductions in greenhouse gas emissions. 
              Each credit equals one metric ton of CO₂ prevented from entering our atmosphere, 
              generated through sustainable forestry, renewable energy, and conservation projects worldwide.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
