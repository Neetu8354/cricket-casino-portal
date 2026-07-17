import { ShieldCheck } from "lucide-react";

export const About = () => (
  <section id="about" className="py-16">
    <div className="container">
      <div className="text-center mb-12">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Welcome to SkyExchID</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          India's Trusted Platform for <span className="text-gradient-gold">Online Cricket Betting & Live Casino Games</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
          SkyExchID is your one-stop destination for online cricket betting and premium online casino games in India. Whether you're following the excitement of the IPL, an ICC tournament, or looking to enjoy live dealer casino games, our platform delivers a secure, fast, and seamless gaming experience.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Since 2017, SkyExchID has built a reputation for reliability, offering players access to competitive cricket betting markets and an extensive collection of casino games. From Teen Patti, Andar Bahar, Aviator, and Poker to Blackjack, Roulette, Baccarat, and hundreds of slot titles, there's something for every type of player.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
          Designed for both beginners and experienced users, SkyExchID combines an intuitive interface with responsive support and a mobile-friendly experience, making it easy to enjoy your favorite games anytime, anywhere.
        </p>
      </div>
      <div className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card p-8 shadow-gold max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "2017", l: "Established" },
            { v: "10L+", l: "Players" },
            { v: "1000+", l: "Games" },
            { v: "24/7", l: "Support" },
          ].map((s) => (
            <div key={s.l} className="text-center p-4 rounded-xl bg-background/50 border border-border">
              <div className="text-3xl font-extrabold text-gradient-gold">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
