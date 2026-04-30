import { ShieldCheck } from "lucide-react";

export const About = () => (
  <section id="about" className="py-16">
    <div className="container grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">About SkyExchange</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
          India's leading <span className="text-gradient-gold">online cricket & gaming</span> platform
        </h2>
        <p className="text-muted-foreground mb-4">
          Launched in 2017, SkyExchange has become a leading online sports platform — perfect for both beginners and experienced players. Use your online betting ID to navigate easily, play fast, and get 24/7 support for a smooth gaming experience.
        </p>
        <p className="text-muted-foreground">
          Enjoy cricket, fantasy sports, card games, and many more in a secure environment. Instant account access, SkyExchange login, and WhatsApp-based support make your gaming experience fast, safe, and enjoyable — all in ₹.
        </p>
      </div>
      <div className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card p-8 shadow-gold">
        <div className="grid grid-cols-2 gap-6">
          {[
            { v: "2017", l: "Launched" },
            { v: "10L+", l: "Players" },
            { v: "1000+", l: "Games" },
            { v: "₹500Cr+", l: "Paid out" },
          ].map((s) => (
            <div key={s.l} className="text-center p-4 rounded-xl bg-background/50 border border-border">
              <div className="text-3xl font-extrabold text-gradient-gold">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-6 text-sm text-primary">
          <ShieldCheck className="h-5 w-5" /> Trusted by lakhs of Indian players since 2017
        </div>
      </div>
    </div>
  </section>
);
