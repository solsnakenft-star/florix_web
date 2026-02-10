import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeftRight, Leaf, Vote } from "lucide-react";

const utilities = [
  {
    icon: ArrowLeftRight,
    title: "Trade Carbon Credits",
    description: "Buy and sell tokenized carbon credits on our decentralized marketplace with instant settlement.",
  },
  {
    icon: Leaf,
    title: "Offset Emissions",
    description: "Retire Florrix Tokens to permanently offset your carbon footprint with verified environmental impact.",
  },
  {
    icon: Vote,
    title: "Governance Voting",
    description: "Participate in protocol decisions, vote on carbon projects, and shape the future of climate finance.",
  },
];

export const TokenUtilitySection = () => {
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Token Utility
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            What Can You Do With{" "}
            <span className="text-gradient">FLX?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {utilities.map((utility, i) => (
            <motion.div
              key={utility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300"
              >
                <utility.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-heading text-2xl font-bold mb-4">{utility.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{utility.description}</p>
              
              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="mt-6 text-primary font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn more →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
