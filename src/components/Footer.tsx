import type { SVGProps } from "react";
import logo from "@/assets/image/logo.png";

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" />
  </svg>
);

const TelegramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z" />
  </svg>
);

const footerLinks = {
  Product: ["Carbon Credits", "Tokenization", "Dashboard", "Marketplace", "API"],
  Resources: ["Documentation", "Whitepaper", "Blog", "FAQs", "Tutorials"],
  Company: ["About Us", "Careers", "Press Kit", "Contact", "Partners"],
};

const socialLinks = [
  { icon: XIcon, href: "https://x.com/FlorixTech", label: "X" },
  { icon: TelegramIcon, href: "https://t.me/florixflo", label: "Telegram" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center neon-glow overflow-hidden">
                <img src={logo} alt="Florix logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl">Florix</span>
            </a>
            <p className="text-muted-foreground max-w-xs mb-6">
              Bridging carbon markets and blockchain technology for a sustainable future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    {/* <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    > */}
                      {link}
                    {/* </a> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Florix. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>  
          </div>
        </div>
      </div>
    </footer>
  );
};
