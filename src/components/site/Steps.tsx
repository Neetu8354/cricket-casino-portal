import { WhatsAppButton } from "./WhatsAppButton";

const STEPS = [
  { n: "01", t: "Message on WhatsApp", d: "Tap the WhatsApp button — chat opens instantly." },
  { n: "02", t: "Get Your ID & Password", d: "Our chatbot creates your secure ID in under a minute." },
  { n: "03", t: "Deposit in ₹ via UPI", d: "Add funds using any Indian payment method." },
  { n: "04", t: "Play & Withdraw", d: "Bet on cricket, casino & more. Withdraw to bank instantly." },
];

export const Steps = () => (
  <section className="py-16">
    <div className="container">
      <div className="text-center mb-12">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">How it works</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Get Your ID in <span className="text-gradient-gold">4 Easy Steps</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {STEPS.map((s) => (
          <div key={s.n} className="relative p-6 rounded-2xl bg-gradient-card border border-border">
            <div className="text-5xl font-extrabold text-gradient-gold mb-3">{s.n}</div>
            <h3 className="text-lg font-bold mb-2">{s.t}</h3>
            <p className="text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold">
          Start Now on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  </section>
);
