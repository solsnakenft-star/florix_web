import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Leaf, Coins, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { 
    icon: Leaf, 
    label: "Carbon Credits", 
    value: "12,847", 
    unit: "tCO₂",
    change: "+12.5%",
    positive: true 
  },
  { 
    icon: Coins, 
    label: "Florix Tokens", 
    value: "45,280", 
    unit: "FLO",
    change: "+8.3%",
    positive: true 
  },
  { 
    icon: Activity, 
    label: "Conversion Rate", 
    value: "98.2", 
    unit: "%",
    change: "+2.1%",
    positive: true 
  },
  { 
    icon: TrendingUp, 
    label: "CO₂ Offset", 
    value: "8,492", 
    unit: "tonnes",
    change: "-3.2%",
    positive: false 
  },
];

// Simple chart data
const chartData = [35, 45, 30, 55, 40, 65, 50, 70, 55, 80, 65, 90];

export const DashboardPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" ref={ref} className="py-24 relative md:mt-[-100px]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(ellipse, hsl(155 100% 50% / 0.15) 0%, transparent 70%)" }}
      />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Climate Finance Hub
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Your{" "}
            <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Track your carbon impact, manage tokens, and monitor your environmental portfolio in real-time.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8 rounded-2xl max-w-5xl mx-auto"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="stat-card rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className={`flex items-center text-xs font-medium ${stat.positive ? 'text-primary' : 'text-destructive'}`}>
                    {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-heading font-bold">
                  {stat.value}
                  <span className="text-sm text-muted-foreground ml-1">{stat.unit}</span>
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading font-bold text-lg">Conversion Activity</h3>
                <p className="text-sm text-muted-foreground">Last 12 months</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary">Monthly</span>
                <span className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground">Weekly</span>
              </div>
            </div>

            {/* Simple Bar Chart */}
            <div className="h-48 flex items-end justify-between gap-2">
              {chartData.map((value, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-primary/30 rounded-t-lg relative group"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${value}%` } : {}}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                >
                  <div 
                    className="absolute inset-0 bg-primary rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ height: "100%" }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium bg-primary text-primary-foreground px-2 py-1 rounded">
                      {value}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <span key={month} className="text-xs text-muted-foreground">{month}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
