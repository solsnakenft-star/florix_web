import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/image/logo.png";
import playstore from "../assets/image/playstore.png";

const links = ["Ecosystem", "Features", "Community", "Roadmap"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Florix Logo" className="w-12 h-12 rounded-full" />
          <span className="text-foreground font-semibold text-lg">Florix</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l}</a>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.florix"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center transition-all hover:opacity-85"
            aria-label="Open Florix on Google Play"
          >
            <img src={playstore} alt="Get it on Google Play" className="h-12 w-auto" />
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">{l}</a>
              ))}
              <a
                href="https://play.google.com/store/apps/details?id=com.florix"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center transition-all hover:opacity-85"
                aria-label="Open Florix on Google Play"
              >
                <img src={playstore} alt="Get it on Google Play" className="h-10 w-auto" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
