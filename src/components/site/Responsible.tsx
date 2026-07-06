import { Heart, Timer, TrendingDown } from "lucide-react";

const TIPS = [
  { icon: Heart, t: "Play for fun, not pressure", d: "Enjoy the game — never play under stress." },
  { icon: Timer, t: "Set your limits", d: "Fix deposit and stake limits before you start." },
  { icon: TrendingDown, t: "Don't chase losses", d: "If a loss happens, don't take extra risk to recover." },
];

export const Responsible = () => (
  <section className="py-14">
    <div className="container">
      <div className="rounded-2xl border border-border bg-gradient-card p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Responsible Gaming</div>
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Fun, safe & <span className="text-gradient-gold">fair gaming</span> for everyone
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {TIPS.map((x) => (
            <div key={x.t} className="text-center">
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-3">
                <x.icon />
              </div>
              <h3 className="font-bold mb-1">{x.t}</h3>
              <p className="text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          18+ only · Gambling involves financial risk and can be addictive · Please play responsibly.
        </p>
      </div>
    </div>
  </section>
);
