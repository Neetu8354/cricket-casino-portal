import { Wallet, MessageCircle, Trophy, Lock, Clock, Banknote } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const FEATURES = [
  { icon: Banknote, title: "INR Deposits", desc: "UPI, PhonePe, GPay, Paytm, Net Banking — all in ₹." },
  { icon: Wallet, title: "Instant Withdrawals", desc: "Get your winnings in your bank in minutes." },
  { icon: MessageCircle, title: "WhatsApp ChatBot", desc: "Create ID, recharge & withdraw via WhatsApp." },
  { icon: Trophy, title: "Best Odds", desc: "Highest cricket & casino odds in India." },
  { icon: Lock, title: "Secure & Private", desc: "Bank-grade encryption. Your data stays safe." },
  { icon: Clock, title: "24×7 Support", desc: "Live agents, every day, all night." },
];

export const Features = () => (
  <section className="py-16 bg-secondary/40 border-y border-border">
    <div className="container">
      <div className="text-center mb-12">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Why SkyExchange</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Built for <span className="text-gradient-gold">Indian Players</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
              <f.icon />
            </div>
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold">
          Open WhatsApp Chatbot
        </WhatsAppButton>
      </div>
    </div>
  </section>
);
