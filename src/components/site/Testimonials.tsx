import { Star } from "lucide-react";

const T = [
  { n: "Rahul S.", c: "Mumbai", t: "Got my ID in 2 minutes on WhatsApp. Deposited via UPI and won ₹45,000 on IPL final!" },
  { n: "Priya K.", c: "Delhi", t: "Best odds on cricket in India. Withdrawals are super fast — money in bank in 10 mins." },
  { n: "Arjun M.", c: "Bangalore", t: "Andar Bahar and Teen Patti are amazing. Live dealers are professional. Highly recommend!" },
];

export const Testimonials = () => (
  <section className="py-16 bg-secondary/40 border-y border-border">
    <div className="container">
      <div className="text-center mb-12">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Trusted by 10 Lakh+ players</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          What our <span className="text-gradient-gold">winners say</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {T.map((x) => (
          <div key={x.n} className="p-6 rounded-2xl bg-gradient-card border border-border">
            <div className="flex gap-1 mb-3 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-sm text-foreground/85 mb-4">"{x.t}"</p>
            <div className="text-sm font-semibold">{x.n} <span className="text-muted-foreground font-normal">— {x.c}</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
