import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Cricket", href: "/cricket" },
  { label: "Casino", href: "/casino" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const navHref = (href: string) => {
    if (href.startsWith("#")) return onHome ? href : `/${href}`;
    return href;
  };
  const NavLink = ({
    href,
    children,
    className,
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }) => {
    const target = navHref(href);
    if (target.startsWith("/") && !target.startsWith("//")) {
      return (
        <Link to={target} className={className} onClick={onClick}>
          {children}
        </Link>
      );
    }
    return (
      <a href={target} className={className} onClick={onClick}>
        {children}
      </a>
    );
  };
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="Skyexchlogin home - Sky Exchange Login online cricket platform">
          <img src={logo} alt="Skyexchlogin official logo - online cricket and casino platform" width={42} height={42} className="h-10 w-10 object-contain" />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-gradient-gold">SKYEXCHANGE</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {n.label}
            </NavLink>
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
              <NavLink
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/90 hover:text-primary"
              >
                {n.label}
              </NavLink>
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
