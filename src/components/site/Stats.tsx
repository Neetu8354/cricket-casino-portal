const STATS = [
  { v: "10L+", l: "Active Players" },
  { v: "₹500 Cr+", l: "Paid in Winnings" },
  { v: "1000+", l: "Games & Markets" },
  { v: "24×7", l: "Live Support" },
];
export const Stats = () => (
  <section className="py-12 bg-gradient-gold">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {STATS.map((s) => (
        <div key={s.l}>
          <div className="text-3xl md:text-5xl font-extrabold text-primary-foreground">{s.v}</div>
          <div className="text-sm md:text-base text-primary-foreground/80 font-medium mt-1">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);
