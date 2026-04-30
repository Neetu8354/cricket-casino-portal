import hero from "@/assets/hero-cricket.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { ShieldCheck, Zap, Headphones } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Cricket batsman hitting a six in a floodlit stadium"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative container py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30 mb-5">
            🏏 INDIA'S #1 CRICKET ID PROVIDER
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
            <span className="text-foreground">Play Cricket.</span>
            <br />
            <span className="text-gradient-gold">Win Big in ₹.</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/85 mb-8 max-w-xl">
            Get your trusted online cricket & casino ID instantly on WhatsApp. Bet on IPL, T20, ODI, Andar Bahar, Teen Patti and 1000+ live casino games — all in INR.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base h-12 px-8">
              Get Your ID Now
            </WhatsAppButton>
            <WhatsAppButton size="lg" variant="outline" className="border-primary/60 text-primary hover:bg-primary/10 text-base h-12 px-8">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-lg">
            {[
              { icon: Zap, label: "Instant ID", sub: "in 1 min" },
              { icon: ShieldCheck, label: "100% Safe", sub: "& Secure" },
              { icon: Headphones, label: "24×7", sub: "Support" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center p-3 rounded-xl bg-card/60 border border-border backdrop-blur">
                <f.icon className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-semibold">{f.label}</div>
                <div className="text-xs text-muted-foreground">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
