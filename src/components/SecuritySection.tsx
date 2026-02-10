import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, FileCheck, BookOpen } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Blockchain Verification",
    description: "Every carbon credit is verified on-chain with cryptographic proofs ensuring authenticity and preventing double-counting.",
  },
  {
    icon: FileCheck,
    title: "Smart Contract Security",
    description: "Our smart contracts are audited by leading security firms and follow industry best practices for maximum protection.",
  },
  {
    icon: BookOpen,
    title: "Transparent Ledger",
    description: "Complete transaction history is publicly available on the blockchain, ensuring full transparency and accountability.",
  },
];

export const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade <span className="text-gradient">Security</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with security-first principles to protect your carbon assets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="h-0.5 bg-gradient-to-r from-primary/50 to-transparent mt-6 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {["SOC 2 Type II", "ISO 27001", "GDPR Compliant", "Audited by CertiK"].map((badge) => (
            <div
              key={badge}
              className="glass-card px-6 py-3 text-sm text-muted-foreground flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-primary" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
