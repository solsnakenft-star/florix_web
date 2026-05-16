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

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3 text-muted-foreground">
            <a
              href="https://x.com/FlorixTech"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Florix on X"
              className="inline-flex items-center justify-center transition-colors hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M18.901 1.153h3.68l-8.039 9.19L24 22.847h-7.406l-5.8-7.584-6.637 7.584H.474l8.598-9.826L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.292 19.492h2.04L6.486 3.24H4.298l13.31 17.405Z" />
              </svg>
            </a>
            <a
              href="https://t.me/florixflo"
              target="_blank"
              rel="noreferrer"
              aria-label="Join Florix on Telegram"
              className="inline-flex items-center justify-center transition-colors hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M21.944 4.667a1.5 1.5 0 0 0-1.603-.245L2.92 11.32a1.5 1.5 0 0 0 .06 2.795l4.1 1.53 1.573 5.174a1.5 1.5 0 0 0 2.56.613l2.298-2.35 4.125 3.024a1.5 1.5 0 0 0 2.344-.913l2.036-15.02a1.5 1.5 0 0 0-.072-.706ZM8.57 14.898l9.905-6.35-8.417 8.597-.586 2.09-.902-3.337Z" />
              </svg>
            </a>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
          </div>
          <a
            href="mailto:support@florix.tech"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            support@florix.tech
          </a>
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
