const ITEMS = [
  "🏏 IPL 2026 LIVE", "🎰 1000+ Casino Games", "💰 INR Deposits via UPI",
  "⚡ Instant Withdrawals", "📱 WhatsApp Instant ID", "🏆 Best Odds in India",
  "🎯 Andar Bahar · Teen Patti", "✈️ Aviator Crash Game", "🎁 Welcome Bonus ₹10,000",
];
export const Marquee = () => (
  <div className="bg-primary/10 border-y border-primary/20 overflow-hidden py-2">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="mx-6 text-sm font-semibold text-primary">{t}</span>
      ))}
    </div>
  </div>
);
