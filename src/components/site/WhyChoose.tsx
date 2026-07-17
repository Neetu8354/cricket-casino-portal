import { ShieldCheck, Zap, Gamepad2, Wallet, Eye, Users, Headphones } from "lucide-react";

const ITEMS = [
  { icon: Zap, t: "Fast account registration", d: "Get started in minutes with our quick and easy signup process." },
  { icon: Gamepad2, t: "Mobile-friendly platform", d: "Play on any device — smartphone, tablet, or desktop." },
  { icon: ShieldCheck, t: "Secure login and encrypted transactions", d: "Your data and funds are protected with advanced security." },
  { icon: Eye, t: "Live cricket betting with real-time odds", d: "Bet on IPL, T20, ODI and more with live odds." },
  { icon: Gamepad2, t: "1,000+ online casino games", d: "Extensive collection of slots, table games, and live casino." },
  { icon: Users, t: "Live dealer gaming experience", d: "Professional dealers and HD streaming for authentic play." },
  { icon: Wallet, t: "Fast deposits and withdrawals", d: "Quick transactions with multiple payment options." },
  { icon: Eye, t: "Beginner-friendly interface", d: "Easy navigation designed for players of all levels." },
  { icon: Headphones, t: "Dedicated customer support", d: "24/7 support to help you whenever you need it." },
  { icon: ShieldCheck, t: "Responsible gaming approach", d: "Tools and resources to promote safe and responsible play." },
];

export const WhyChoose = () => (
  <section id="why" className="py-16 bg-secondary/40 border-y border-border">
    <div className="container">
      <div className="text-center mb-12">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Why Choose SkyExchID?</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Thousands of players choose <span className="text-gradient-gold">SkyExchID</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          We focus on delivering a secure, reliable, and enjoyable gaming experience. Here's what makes us different:
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {ITEMS.map((f) => (
          <div key={f.t} className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
              <f.icon />
            </div>
            <h3 className="text-lg font-bold mb-2">{f.t}</h3>
            <p className="text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
