import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Coins, ArrowLeftRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Carbon Credits",
    description: "Connect your verified carbon credits from approved registries like Verra or Gold Standard.",
  },
  {
    icon: Coins,
    step: "02",
    title: "Tokenize on Blockchain",
    description: "Your credits are minted as Florix Tokens on the blockchain with full transparency and traceability.",
  },
  {
    icon: ArrowLeftRight,
    step: "03",
    title: "Trade or Retire",
    description: "Sell your tokens on the marketplace or retire them to permanently offset carbon emissions.",
  },
];

export const HowItWorks = () => {
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
            Simple Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            How{" "}
            <span className="text-gradient">Florix</span>
            {" "}Works
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-2xl glass-card-glow mx-auto flex items-center justify-center"
                  >
                    <step.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.step}</span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
