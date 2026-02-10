import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Leaf, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Amazon Rainforest Conservation",
    location: "Brazil",
    credits: "24,500",
    price: "15.40",
    image: "🌳",
    verified: true,
  },
  {
    name: "Wind Farm Initiative",
    location: "Denmark",
    credits: "18,200",
    price: "12.80",
    image: "💨",
    verified: true,
  },
  {
    name: "Mangrove Restoration",
    location: "Indonesia",
    credits: "12,800",
    price: "18.20",
    image: "🌊",
    verified: true,
  },
  {
    name: "Solar Energy Grid",
    location: "India",
    credits: "31,400",
    price: "11.50",
    image: "☀️",
    verified: true,
  },
  {
    name: "Reforestation Project",
    location: "Kenya",
    credits: "8,900",
    price: "14.90",
    image: "🌲",
    verified: true,
  },
  {
    name: "Ocean Cleanup Initiative",
    location: "Pacific",
    credits: "5,600",
    price: "22.30",
    image: "🌊",
    verified: true,
  },
];

export const MarketplaceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="marketplace" ref={ref} className="py-24 relative md:mt-[-100px]">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Carbon Projects
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Explore the{" "}
            <span className="text-gradient">Marketplace</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Browse verified carbon offset projects from around the world and invest in a sustainable future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="marketplace-card"
            >
              {/* Project Image/Icon */}
              <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-5xl">
                {project.image}
              </div>
              
              <div className="p-6">
                {/* Verified Badge */}
                {project.verified && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs mb-3">
                    <Leaf className="w-3 h-3" />
                    Verified
                  </div>
                )}
                
                <h3 className="font-heading font-bold text-lg mb-2">{project.name}</h3>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Available</p>
                    <p className="font-heading font-bold">{project.credits} tCO₂</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-heading font-bold text-primary">${project.price}/t</p>
                  </div>
                </div>
                
                {/* <Button className="w-full mt-4 btn-primary-glow rounded-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Credits
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          {/* <Button variant="outline" className="rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50">
            View All Projects
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};
