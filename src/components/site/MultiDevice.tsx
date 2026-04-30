import { Smartphone, Tablet, Monitor, Download } from "lucide-react";

const D = [
  { icon: Smartphone, t: "Mobile Phones", d: "Quick access on mobile, smooth gameplay, clear display — no lag while playing." },
  { icon: Tablet, t: "Tablets", d: "Responsive interface and excellent performance — adjusts to your screen size." },
  { icon: Monitor, t: "Desktop Systems", d: "Full-screen clarity and easy navigation on large screens." },
  { icon: Download, t: "No Downloads", d: "No app install needed — play directly in your browser, anywhere." },
];

export const MultiDevice = () => (
  <section className="py-16">
    <div className="container">
      <div className="text-center mb-12">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Mobile-Friendly</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Play on <span className="text-gradient-gold">any device</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {D.map((x) => (
          <div key={x.t} className="p-6 rounded-2xl bg-gradient-card border border-border text-center">
            <div className="h-14 w-14 mx-auto rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
              <x.icon />
            </div>
            <h3 className="font-bold mb-2">{x.t}</h3>
            <p className="text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
