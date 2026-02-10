import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileCheck, 
  Shield, 
  FileText, 
  Coins, 
  ArrowLeftRight, 
  CheckCircle 
} from "lucide-react";

const steps = [
  { icon: FileCheck, label: "Project Development", description: "Sustainable project creation" },
  { icon: Shield, label: "Verification", description: "Third-party validation" },
  { icon: FileText, label: "Credit Issued", description: "Official carbon credit" },
  { icon: Coins, label: "Tokenized", description: "Minted as Florrix Token" },
  { icon: ArrowLeftRight, label: "Traded", description: "Exchange on marketplace" },
  { icon: CheckCircle, label: "Retired", description: "Offset achieved" },
];

export const LifecycleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            From Forest to Token
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Carbon Credit{" "}
            <span className="text-gradient">Lifecycle</span>
          </h2>
        </motion.div>

        {/* Circular Layout for Desktop */}
        <div className="hidden lg:block relative max-w-3xl mx-auto aspect-square">
          {/* Central Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="absolute inset-1/4 rounded-full border-2 border-primary/30"
          />
          
          {/* Animated Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-1/4 rounded-full border-2 border-dashed border-primary/20"
          />

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-primary font-heading font-bold text-2xl">Complete</p>
              <p className="text-muted-foreground text-sm">Carbon Journey</p>
            </div>
          </div>

          {/* Steps in Circle */}
          {steps.map((step, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 42; // percentage from center
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="glass-card p-4 text-center w-32 hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:neon-glow transition-all">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-heading font-semibold text-sm">{step.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(155 100% 50% / 0.3)" />
                <stop offset="50%" stopColor="hsl(155 100% 50%)" />
                <stop offset="100%" stopColor="hsl(155 100% 50% / 0.3)" />
              </linearGradient>
            </defs>
            {steps.map((_, i) => {
              const startAngle = (i * 60 - 90) * (Math.PI / 180);
              const endAngle = ((i + 1) * 60 - 90) * (Math.PI / 180);
              const radius = 42;
              
              const x1 = 50 + radius * Math.cos(startAngle);
              const y1 = 50 + radius * Math.sin(startAngle);
              const x2 = 50 + radius * Math.cos(endAngle);
              const y2 = 50 + radius * Math.sin(endAngle);

              return (
                <motion.line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden grid gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="glass-card p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold">{step.label}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              <span className="ml-auto text-primary font-heading font-bold text-2xl opacity-30">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
