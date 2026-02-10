import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Cloud, Coins, FolderTree, Zap } from "lucide-react";

const metrics = [
  { icon: Cloud, value: 2847500, suffix: "", label: "CO₂ Offset (tonnes)", prefix: "" },
  { icon: Coins, value: 1250000, suffix: "+", label: "Credits Tokenized", prefix: "" },
  { icon: FolderTree, value: 847, suffix: "", label: "Active Projects", prefix: "" },
  { icon: Zap, value: 4850000, suffix: "", label: "Florix Tokens Minted", prefix: "" },
];

const Counter = ({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (latest >= 1000000) {
      return `${prefix}${(latest / 1000000).toFixed(1)}M${suffix}`;
    } else if (latest >= 1000) {
      return `${prefix}${(latest / 1000).toFixed(0)}K${suffix}`;
    }
    return `${prefix}${Math.round(latest)}${suffix}`;
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const ImpactMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden md:mt-[-150px]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ 
            background: "radial-gradient(ellipse at 50% 50%, hsl(155 100% 50% / 0.05) 0%, transparent 50%)" 
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Global Impact
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Making a{" "}
            <span className="text-gradient">Difference</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="glass-card p-6 md:p-8 text-center group hover:border-primary/40 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:neon-glow transition-all"
              >
                <metric.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <p className="font-heading text-3xl md:text-4xl font-bold neon-text mb-2">
                <Counter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              </p>
              <p className="text-muted-foreground text-sm md:text-base">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
