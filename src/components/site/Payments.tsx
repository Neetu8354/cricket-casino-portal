import { ShieldCheck } from "lucide-react";

const METHODS = ["UPI", "PhonePe", "Google Pay", "Paytm", "Net Banking", "Visa", "Mastercard", "Bank Transfer"];

export const Payments = () => (
  <section className="py-16">
    <div className="container">
      <div className="text-center mb-10">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Secure Payments</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Multiple <span className="text-gradient-gold">trusted payment</span> methods
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          All transactions protected with 256-bit SSL encryption. Deposits & withdrawals always in ₹.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {METHODS.map((m) => (
          <span key={m} className="px-4 py-2 rounded-full bg-gradient-card border border-border text-sm font-semibold">
            {m}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 text-sm text-primary">
        <ShieldCheck className="h-5 w-5" /> 256-bit SSL Encrypted · Funds & data fully protected
      </div>
    </div>
  </section>
);
