import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Activity, Clock, TrendingUp } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { applySeo } from "@/lib/seo";
import cricket from "@/assets/sport-cricket.jpg";
import hero from "@/assets/hero-cricket.jpg";

const Cricket = () => {
  useEffect(() => {
    applySeo({
      title: "Online Cricket Betting in India | Cricket Bet Online | SkyExchID",
      description:
        "Enjoy online cricket betting in India with SkyExchID. Cricket bet online on IPL, T20, ODI, Test, and live matches. Fast signup, secure platform, and exciting betting markets.",
      canonical: "https://www.skyexchid.live/cricket",
      keywords:
        "online cricket betting in India, cricket bet online, online betting cricket, live cricket betting, IPL betting, T20 betting, ODI betting, Test cricket betting",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Online Cricket Betting in India",
          url: "https://www.skyexchid.live/cricket",
          description: "Enjoy online cricket betting in India with SkyExchID. Cricket bet online on IPL, T20, ODI, Test, and live matches.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skyexchid.live/" },
            { "@type": "ListItem", position: 2, name: "Cricket", item: "https://www.skyexchid.live/cricket" },
          ],
        },
      ],
    });
  }, []);

  const markets = [
    { t: "Match Winner", d: "Pick the winning team for the match." },
    { t: "Toss Winner", d: "Simple 50/50 market — predict who wins the toss." },
    { t: "Top Batsman", d: "Predict the highest run-scorer of the match." },
    { t: "Top Bowler", d: "Bet on the bowler who takes the most wickets." },
    { t: "Most Sixes", d: "Wager on which team or player hits the most sixes." },
    { t: "Total Runs", d: "Bet on the total runs scored in the match or innings." },
    { t: "Player Performance", d: "Bet on individual player statistics and achievements." },
    { t: "Session Betting", d: "Bet on runs scored in specific over sessions." },
    { t: "Over/Under Markets", d: "Predict if runs or wickets will be over or under a set number." },
  ];

  const leagues = [
    { t: "Indian Premier League (IPL)", d: "The biggest T20 league in the world", img: cricket },
    { t: "ICC Cricket World Cup", d: "The pinnacle of ODI cricket", img: cricket },
    { t: "ICC Champions Trophy", d: "Top 8 ODI teams compete", img: cricket },
    { t: "Asia Cup", d: "Premier Asian cricket tournament", img: cricket },
    { t: "Big Bash League", d: "Australia's premier T20 competition", img: cricket },
    { t: "Pakistan Super League", d: "Exciting T20 action from Pakistan", img: cricket },
    { t: "Caribbean Premier League", d: "Caribbean flair and cricket", img: cricket },
    { t: "The Hundred", d: "Innovative 100-ball format", img: cricket },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={hero} alt="Live cricket betting on skyexchid.live - bet on IPL T20 ODI online" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative container py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">Cricket</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Online Cricket Betting in India</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Cricket Bet Online with <span className="text-gradient-gold">SkyExchID</span> – Trusted Cricket Betting Platform
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              Online cricket betting has become one of the most popular ways for cricket fans in India to enjoy every match. Whether you follow the IPL, ICC tournaments, T20 leagues, ODI series, or Test cricket, SkyExchID provides a reliable platform for online cricket betting with competitive odds and a seamless betting experience.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              With SkyExchID, users can place a cricket bet online before the match begins or enjoy live betting as the game progresses. The platform offers multiple betting markets, secure transactions, and an easy-to-use interface suitable for both beginners and experienced bettors.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Why Choose <span className="text-gradient-gold">SkyExchID</span> for Online Cricket Betting?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          SkyExchID offers everything cricket enthusiasts need for a smooth betting experience.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Fast and secure account registration",
            "Live odds updated in real time",
            "Betting markets for IPL, T20, ODI, and Test matches",
            "User-friendly interface for mobile and desktop",
            "Quick deposits and withdrawals",
            "Reliable customer support",
            "Safe and secure betting environment",
          ].map((item) => (
            <div key={item} className="p-5 rounded-2xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Whether you are new to online betting cricket or an experienced player, SkyExchID helps you enjoy every cricket match with confidence.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Cricket Betting <span className="text-gradient-gold">Markets Available</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          SkyExchID covers a wide range of betting options for every major cricket tournament.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((m) => (
            <div key={m.t} className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/60 transition">
              <h3 className="font-bold text-lg mb-2 text-primary">{m.t}</h3>
              <p className="text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          These markets make online cricket betting sites more exciting by offering multiple opportunities throughout every match.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Leagues you can bet on</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {leagues.map((g) => (
            <div key={g.t} className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card group">
              <div className="aspect-square overflow-hidden">
                <img src={g.img} alt={`Bet on ${g.t} live online at skyexchid.live`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="font-bold text-base">{g.t}</h3>
                <p className="text-xs text-muted-foreground">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Online Cricket Betting <span className="text-gradient-gold">in India</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Cricket is more than a sport in India, making online cricket betting in India increasingly popular among fans. SkyExchID allows users to follow live matches while placing bets on different outcomes in real time.
        </p>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          You can enjoy betting on:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Indian Premier League (IPL)",
            "ICC Cricket World Cup",
            "ICC Champions Trophy",
            "Asia Cup",
            "Big Bash League",
            "PSL",
            "CPL",
            "The Hundred",
            "International T20, ODI, and Test Series",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          As one of the trusted online cricket betting sites in India, SkyExchID delivers a secure and enjoyable betting experience.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          How to Bet in <span className="text-gradient-gold">Cricket Online</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Getting started is simple.
        </p>
        <div className="space-y-4 max-w-3xl">
          {[
            { step: "Step 1", text: "Create your SkyExchID account." },
            { step: "Step 2", text: "Add funds using your preferred payment method." },
            { step: "Step 3", text: "Choose an upcoming or live cricket match." },
            { step: "Step 4", text: "Select your preferred betting market." },
            { step: "Step 5", text: "Place your bet and follow the match live." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start p-4 rounded-xl bg-gradient-card border border-border">
              <div className="flex-shrink-0 w-24 font-bold text-primary">{item.step}</div>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Learning how to bet in cricket online is easy when using a platform designed for convenience and speed.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Live Cricket <span className="text-gradient-gold">Betting</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Live betting allows users to place bets while the match is in progress. Odds change after every ball, giving more opportunities to make informed decisions.
        </p>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Benefits include:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {[
            "Real-time odds",
            "Multiple betting options",
            "Instant market updates",
            "Exciting in-play betting experience",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Live betting is one of the most popular features offered by leading online betting app cricket platforms.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Explore Online <span className="text-gradient-gold">Casino Games</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Besides cricket, SkyExchID also offers a wide selection of online casino games for players looking for more entertainment.
        </p>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Popular categories include:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Live Blackjack",
            "Live Roulette",
            "Baccarat",
            "Dragon Tiger",
            "Teen Patti",
            "Andar Bahar",
            "Poker",
            "Slots",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 max-w-3xl">
          Whether you enjoy a classic casino online game or a live casino game online, there are plenty of options available.
        </p>
        <p className="text-muted-foreground mt-4 max-w-3xl">
          Players across the country also enjoy online casino games India with secure gameplay and exciting promotions.
        </p>
        <p className="text-muted-foreground mt-4 max-w-3xl">
          If you want to play casino games online for real money, SkyExchID offers trusted casino tables and live dealers. Many players also search for the best casino game to win money online, with Blackjack, Baccarat, and Roulette remaining among the most popular choices.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Why Players <span className="text-gradient-gold">Prefer SkyExchID</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Fast account approval",
            "Secure betting platform",
            "Mobile-friendly interface",
            "Live cricket betting",
            "Competitive odds",
            "Trusted customer support",
            "Popular casino games",
            "Safe payment options",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          <span className="text-gradient-gold">FAQs</span>
        </h2>
        <div className="space-y-4 max-w-3xl">
          {[
            { q: "Is online cricket betting available in India?", a: "Yes, SkyExchID provides access to online cricket betting markets for major domestic and international matches." },
            { q: "Can I place live cricket bets?", a: "Yes. Live betting is available with real-time odds during ongoing matches." },
            { q: "Which tournaments are covered?", a: "IPL, ICC tournaments, Asia Cup, BBL, PSL, CPL, international T20, ODI, and Test matches." },
            { q: "How do I start cricket betting?", a: "Register an account, deposit funds, choose a match, and place your bet." },
            { q: "Can I play casino games as well?", a: "Yes. SkyExchID also offers live casino games, Teen Patti, Roulette, Blackjack, Baccarat, Poker, and Slots." },
            { q: "Is the website mobile-friendly?", a: "Yes. The platform works smoothly on Android, iPhone, tablets, and desktops." },
          ].map((item) => (
            <div key={item.q} className="p-5 rounded-xl bg-gradient-card border border-border">
              <h3 className="font-bold text-base mb-2 text-primary">{item.q}</h3>
              <p className="text-sm text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Cricket;
