import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/image/logo.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Carbon Credits", href: "#carbon-credits" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Marketplace", href: "#marketplace" },
  // { label: "Docs", href: "#docs" },
  { label: "Airdrop", href: "#airdrop" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto glass-card px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center neon-glow overflow-hidden">
      <img src={logo} alt="Florix logo" className="w-[50px] h-[50px] object-contain" />
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Florix
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Download Wallet Button */}
        <div className="hidden md:block">
          <Button className="btn-primary-glow rounded-full px-6">
            Download Wallet<Download className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass-card mx-4 p-4"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="btn-primary-glow rounded-full w-full mt-4">
            Download Wallet<Download className="w-4 h-4" />
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};
