import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="SkyExch" className="h-10 w-10" width={40} height={40} />
          <span className="text-xl font-extrabold text-gradient-gold">SKYEXCH</span>
        </div>
        <p className="text-sm text-muted-foreground">India's most trusted online cricket & casino ID provider. Play in ₹, win in ₹.</p>
      </div>
      {[
        { t: "Sports", l: ["Cricket", "IPL 2026", "T20 World Cup", "ODI"] },
        { t: "Casino", l: ["Live Roulette", "Andar Bahar", "Teen Patti", "Aviator"] },
        { t: "Help", l: ["WhatsApp Support", "Get Your ID", "Deposit Guide", "Withdrawal"] },
      ].map((s) => (
        <div key={s.t}>
          <h4 className="font-bold mb-3">{s.t}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {s.l.map((x) => (
              <li key={x}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{x}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} SkyExch. All rights reserved.</p>
        <p>18+ only · Play responsibly · Gambling can be addictive</p>
      </div>
    </div>
  </footer>
);
