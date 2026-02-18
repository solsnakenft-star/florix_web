import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Coins, Globe, Users, Lock } from "lucide-react";

const tokenInfo = [
  { label: "Token Name", value: "FLORIX", icon: Coins },
  { label: "Total Supply", value: "5B", icon: Globe },
  { label: "Token Type", value: "Utility + Governance", icon: Users },
  { label: "Network", value: "BNB Smart Chain", icon: Lock },
];

const allocation = [
  { label: "Airdrop", percentage: 40, color: "hsl(155 100% 50%)" },
  { label: "Token Sale", percentage: 18, color: "hsl(155 80% 40%)" },
  { label: "Liquidity", percentage: 20, color: "hsl(155 60% 35%)" },
  { label: "Staking / Rewards", percentage: 12, color: "hsl(155 50% 30%)" },
  { label: "Team", percentage: 10, color: "hsl(155 40% 25%)" },
];

export const TokenEconomicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimatedPercentage(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Calculate donut chart segments
  const calculateDonutSegments = () => {
    let currentOffset = 0;
    return allocation.map((item) => {
      const segment = {
        ...item,
        dashArray: `${(item.percentage * 2.51327)} 251.327`,
        dashOffset: -currentOffset * 2.51327,
      };
      currentOffset += item.percentage;
      return segment;
    });
  };

  const segments = calculateDonutSegments();

  return (
    <section ref={ref} id="tokenomics" className="py-24 relative md:mt-[-100px]">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">FLORIX</span> Token Economics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A sustainable token model designed for long-term growth and community rewards
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Token Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {tokenInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{info.label}</span>
                  </div>
                  <p className="font-heading font-bold text-lg">{info.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Allocation List */}
            <div className="glass-card p-6">
              <h3 className="font-heading font-semibold mb-4">Token Allocation</h3>
              <div className="space-y-3">
                {allocation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                    <span className="font-heading font-semibold">{item.percentage}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Animated Donut Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <svg width="300" height="300" viewBox="0 0 100 100" className="transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(140 20% 15%)"
                  strokeWidth="12"
                />
                
                {/* Animated segments */}
                {segments.map((segment, index) => (
                  <motion.circle
                    key={segment.label}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={segment.color}
                    strokeWidth="12"
                    strokeDasharray={segment.dashArray}
                    strokeDashoffset={segment.dashOffset}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="drop-shadow-lg"
                    style={{ filter: index === 0 ? "drop-shadow(0 0 8px hsl(155 100% 50% / 0.5))" : undefined }}
                  />
                ))}
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center"
                >
                  <p className="text-xs text-muted-foreground mb-1">Total Supply</p>
                  <p className="font-heading text-2xl font-bold text-gradient">5B</p>
                  <p className="text-xs text-muted-foreground mt-1">FLORIX</p>
                </motion.div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
