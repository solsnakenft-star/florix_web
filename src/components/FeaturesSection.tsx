import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Eye } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Carbon Credit Storage",
    description: "Your carbon credits are safely stored on the blockchain with military-grade encryption and multi-signature security.",
  },
  {
    icon: Zap,
    title: "Instant Tokenization",
    description: "Convert your verified carbon credits into FLORIX tokens in seconds with our streamlined minting process.",
  },
  {
    icon: Eye,
    title: "Transparent Blockchain Tracking",
    description: "Track every carbon credit from origin to retirement with complete transparency on the immutable ledger.",
  },
];

export const FeaturesSection = () => {
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
            Why Choose <span className="text-gradient">Florix</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for the future of carbon markets with cutting-edge blockchain technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:neon-glow transition-all"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              
              <h3 className="font-heading text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
