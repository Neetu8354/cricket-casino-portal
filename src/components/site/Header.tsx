import { useState } from "react";
import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Cricket", href: "#cricket" },
  { label: "Casino", href: "#casino" },
  { label: "More Games", href: "#more-games" },
  { label: "Promotions", href: "#promotions" },
  { label: "Demo ID", href: WHATSAPP_URL },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2" aria-label="SkyExch home">
          <img src={logo} alt="SkyExch logo" width={42} height={42} className="h-10 w-10 object-contain" />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-gradient-gold">SKYEXCH</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              target={n.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton variant="default" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
            Get Your Online ID
          </WhatsAppButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                target={n.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/90 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <WhatsAppButton className="bg-gradient-gold text-primary-foreground w-full">
              Get Your Online ID
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
};
