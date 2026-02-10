import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Coins, Users, TrendingUp, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const saleStats = [
  { label: "Tokens Sold", value: "68M", icon: Coins },
  { label: "Remaining Supply", value: "32M", icon: TrendingUp },
  { label: "Current Price", value: "$0.025", icon: Clock },
  { label: "Participants", value: "12,450", icon: Users },
];

export const TokenSaleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(68), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden md:mt-[-100px]">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            FLORIX <span className="text-gradient">Token Sale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the token sale and be part of the carbon revolution
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card-glow p-8 md:p-10">
            {/* Progress Section */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">Sale Progress</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="font-heading text-2xl font-bold text-primary"
                >
                  {progress}%
                </motion.span>
              </div>
              
              <div className="relative">
                <Progress value={progress} className="h-4" />
                {/* Milestone markers */}
                <div className="absolute top-6 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <div>
                  <p className="text-xs text-muted-foreground">Soft Cap</p>
                  <p className="font-heading font-semibold text-primary">$1.5M ✓</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Hard Cap</p>
                  <p className="font-heading font-semibold">$5M</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {saleStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button className="btn-primary-glow rounded-full px-10 py-6 text-lg">
                Buy FLORIX Tokens
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Min. purchase: 100 FLORIX • Max. purchase: 1,000,000 FLORIX
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
