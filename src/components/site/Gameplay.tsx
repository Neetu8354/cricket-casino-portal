import { LogIn, MousePointerClick, Wallet, Gamepad2, BarChart3, Banknote } from "lucide-react";

const STEPS = [
  { icon: LogIn, t: "Login with WhatsApp ID", d: "Use your SkyExchange ID or one-tap WhatsApp login." },
  { icon: MousePointerClick, t: "Pick a game", d: "Choose your cricket match, casino table, or tournament." },
  { icon: Wallet, t: "Deposit in ₹", d: "Add funds via UPI / PhonePe / GPay / Paytm / Net Banking." },
  { icon: Gamepad2, t: "Place your stake", d: "Choose play type and enter the stake amount you're comfortable with." },
  { icon: BarChart3, t: "Track in real time", d: "Live odds, live scores and instant result updates." },
  { icon: Banknote, t: "Withdraw winnings", d: "Cash out safely and instantly to your Indian bank account." },
];

export const Gameplay = () => (
  <section className="py-16 bg-secondary/40 border-y border-border">
    <div className="container">
      <div className="text-center mb-12">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Step-by-step Gameplay</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Easy & <span className="text-gradient-gold">secure to play</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STEPS.map((s, i) => (
          <div key={s.t} className="p-6 rounded-2xl bg-gradient-card border border-border flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <s.icon />
            </div>
            <div>
              <div className="text-xs font-bold text-primary mb-1">STEP {i + 1}</div>
              <h3 className="font-bold mb-1">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
