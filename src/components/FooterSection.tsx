import { Download } from "lucide-react";
import logo from "../assets/image/logo.png";

const FooterSection = () => (
  <footer className="relative z-10 border-t border-border py-12">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Florix Logo" className="w-10 h-10 rounded-full" />
          <span className="text-foreground font-semibold">Florix</span>
          <button className="px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:box-glow transition-all ml-4 flex items-center gap-2">
            <Download size={16} />
            Download Plastore App
          </button>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Documentation</a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs leading-relaxed max-w-2xl mx-auto">
          <strong>Sustainability Disclaimer:</strong> This platform facilitates carbon credit tracking and ecosystem participation. Token utility is subject to protocol governance. Environmental impact metrics are based on verified third-party data and on-chain records.
        </p>
        <p className="text-muted-foreground/50 text-xs mt-4">© 2026 Florix. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
