import { ShieldCheck, Zap, Gamepad2, Wallet, Eye, Users } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, t: "Secure Platform", d: "Every account & transaction is fully secured with advanced encryption — your funds and data are safe." },
  { icon: Zap, t: "Instant Access", d: "Create your online ID instantly or log in in just one minute via WhatsApp." },
  { icon: Gamepad2, t: "Variety of Games", d: "Cricket, fantasy sports, tournaments and card games — all in one place." },
  { icon: Wallet, t: "Fast Withdrawals", d: "Withdraw your winnings instantly and safely, without any delay — directly to your bank in ₹." },
  { icon: Eye, t: "Fair Play Monitoring", d: "We monitor every game and tournament to ensure fair play and prevent cheating." },
  { icon: Users, t: "Trusted by Lakhs", d: "Thousands of users trust SkyExchange for its dependable, fast and simple interface." },
];

export const WhyChoose = () => (
  <section id="why" className="py-16 bg-secondary/40 border-y border-border">
    <div className="container">
      <div className="text-center mb-12">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Why Choose SkyExchange ID?</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Built for <span className="text-gradient-gold">security & speed</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
