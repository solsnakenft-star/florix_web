import logo from "../assets/image/logo.png";
import playstore from "../assets/image/playstore.png";

const FooterSection = () => (
  <footer className="relative z-10 border-t border-border py-12">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Florix Logo" className="w-10 h-10 rounded-full" />
          <span className="text-foreground font-semibold">Florix</span>
          <a
            href="https://play.google.com/store/apps/details?id=com.florix"
            target="_blank"
            rel="noreferrer"
            className="ml-4 inline-flex items-center transition-all hover:opacity-85"
            aria-label="Open Florix on Google Play"
          >
            <img src={playstore} alt="Get it on Google Play" className="h-12 w-auto" />
          </a>
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
