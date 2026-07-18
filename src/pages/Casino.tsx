import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dice5, Spade, Plane, Crown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { applySeo } from "@/lib/seo";
import casino from "@/assets/sport-casino.jpg";
import andar from "@/assets/sport-andarbahar.jpg";
import teen from "@/assets/sport-teenpatti.jpg";
import aviator from "@/assets/sport-aviator.jpg";
import slots from "@/assets/sport-slots.jpg";

const Casino = () => {
  useEffect(() => {
    applySeo({
      title: "Online Casino Games India | Play Live Casino & Teen Patti Online | SkyExchID",
      description:
        "Play the best online casino games in India with SkyExchID. Enjoy live casino games online, Teen Patti, slots, roulette, blackjack, baccarat, and more on a secure gaming platform.",
      canonical: "https://www.skyexchid.live/casino",
      keywords:
        "online casino games India, live casino games online, Teen Patti online, play casino games online, online casino slot games real money, best casino game to win money online",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Online Casino Games in India",
          url: "https://www.skyexchid.live/casino",
          description: "Play the best online casino games in India with SkyExchID. Enjoy live casino games online, Teen Patti, slots, roulette, blackjack, baccarat, and more.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skyexchid.live/" },
            { "@type": "ListItem", position: 2, name: "Casino", item: "https://www.skyexchid.live/casino" },
          ],
        },
      ],
    });
  }, []);

  const games = [
    { img: andar, t: "Andar Bahar", d: "Indian classic card game" },
    { img: teen, t: "Teen Patti", d: "Popular Indian card game" },
    { img: aviator, t: "Aviator", d: "Crash multiplier game" },
    { img: casino, t: "Live Roulette", d: "European & Auto Roulette" },
    { img: casino, t: "Dragon Tiger", d: "Fast-paced card game" },
    { img: slots, t: "Mega Slots 777", d: "Progressive jackpot slots" },
    { img: andar, t: "Lucky 7", d: "Quick-win card game" },
    { img: teen, t: "Live Poker", d: "Tournaments & cash tables" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative border-b border-border">
        <div className="container py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">Casino</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Experience Premium Online Casino Games</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Play Online Casino Games in India – <span className="text-gradient-gold">Live Casino & Teen Patti</span> on SkyExchID
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              SkyExchID brings together a premium collection of online casino games for players who enjoy skill, strategy, and live entertainment. Whether you're a fan of classic table games or modern slots, our platform offers a seamless gaming experience with fast performance, secure access, and exciting gameplay.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              From live dealer tables to immersive slot adventures, every casino online game is designed to provide realistic action and smooth gameplay on both desktop and mobile devices.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Why Choose <span className="text-gradient-gold">SkyExchID</span> for Online Casino Games?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          SkyExchID is built for players who value security, convenience, and variety.
        </p>
        <div className="text-center mb-8">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">Key Features</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Wide selection of casino games",
            "Professional live dealers",
            "Mobile-friendly platform",
            "Fast registration process",
            "Secure payment methods",
            "High-quality live streaming",
            "Easy navigation",
            "24/7 customer assistance",
          ].map((item) => (
            <div key={item} className="p-5 rounded-2xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Whether you're just getting started or have years of experience, SkyExchID delivers an enjoyable casino experience every time you play.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Most popular <span className="text-gradient-gold">casino games</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((g) => (
            <div key={g.t} className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card group hover:border-primary/60 transition">
              <div className="aspect-square overflow-hidden">
                <img src={g.img} alt={`Play ${g.t} live online at skyexchid.live - online sports gaming platform`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
          Live Casino <span className="text-gradient-gold">Games Online</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Nothing matches the excitement of a live casino game online. Real-time gameplay allows you to interact with professional dealers while enjoying authentic casino action from anywhere.
        </p>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Popular live games include:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Live Roulette",
            "Live Blackjack",
            "Live Baccarat",
            "Dragon Tiger",
            "Andar Bahar",
            "Sic Bo",
            "Casino Hold'em",
            "Live Poker Tables",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Each game is streamed in HD quality with real-time betting options, creating an experience similar to a physical casino.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Online Casino <span className="text-gradient-gold">Games India</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Indian players are increasingly choosing online casino games India because of their convenience and entertainment value. SkyExchID offers games that are popular among Indian audiences while maintaining smooth performance and reliable security.
        </p>
        <p className="text-muted-foreground max-w-3xl">
          You can access games anytime using your smartphone, tablet, or desktop without compromising speed or quality.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Play Casino Games <span className="text-gradient-gold">Online for Real Money</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          If you're looking to play casino games online for real money, SkyExchID provides a trusted platform with secure transactions and multiple gaming options.
        </p>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Players can enjoy:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Competitive payouts",
            "Fast deposits",
            "Quick withdrawals",
            "Fair gameplay",
            "Secure betting environment",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Responsible gaming is encouraged so players can enjoy entertainment while staying in control of their spending.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Best Casino Game to <span className="text-gradient-gold">Win Money Online</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Different games require different levels of strategy and luck. Some of the most popular choices include:
        </p>
        <div className="space-y-6 max-w-3xl">
          {[
            { title: "Blackjack", desc: "One of the most skill-based casino games with favorable odds when played strategically." },
            { title: "Baccarat", desc: "Simple rules and fast-paced gameplay make Baccarat a favorite among experienced players." },
            { title: "Roulette", desc: "A classic casino game offering multiple betting opportunities." },
            { title: "Poker", desc: "Perfect for players who enjoy strategy, skill, and competition." },
            { title: "Live Dealer Games", desc: "Real-time interaction with professional dealers provides an authentic casino atmosphere." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl bg-gradient-card border border-border">
              <h3 className="font-bold text-base mb-2 text-primary">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          New Online <span className="text-gradient-gold">Casino Games</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          SkyExchID regularly updates its collection with new online casino games to keep the experience fresh and exciting.
        </p>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          New additions include:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Modern video slots",
            "Live game variations",
            "Instant win games",
            "Interactive table games",
            "Seasonal casino events",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Players always have something new to explore.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Online Casino <span className="text-gradient-gold">Slot Games Real Money</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Slot lovers can enjoy hundreds of online casino slot games real money featuring exciting themes, bonus rounds, jackpots, and smooth animations.
        </p>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Popular slot categories include:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Classic Slots",
            "Video Slots",
            "Progressive Jackpot Slots",
            "Fruit Slots",
            "Adventure Slots",
            "Megaways Slots",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Slots are ideal for players looking for simple gameplay with entertaining features.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Teen Patti <span className="text-gradient-gold">Online Game</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          The Teen Patti online game remains one of India's most loved card games. SkyExchID offers multiple Teen Patti tables where players can compete in real time.
        </p>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Popular variations include:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Classic Teen Patti",
            "Joker Teen Patti",
            "AK47 Teen Patti",
            "Muflis Teen Patti",
            "Lowest Joker",
            "High-Low Variations",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 max-w-3xl">
          Whether you're playing casually or competitively, Teen Patti offers exciting action for every player.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Online Teen Patti <span className="text-gradient-gold">Anytime</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl">
          With online Teen Patti, you can join games from anywhere using your mobile or desktop device. The platform provides smooth gameplay, secure access, and multiple table options suitable for beginners and experienced players alike.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Why Players <span className="text-gradient-gold">Trust SkyExchID</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Extensive collection of casino games",
            "Secure and encrypted platform",
            "Fast account registration",
            "Mobile-optimized experience",
            "HD live dealer tables",
            "Quick payment processing",
            "Fair gaming environment",
            "Regular game updates",
            "Dedicated customer support",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-gradient-card border border-border">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          <span className="text-gradient-gold">Frequently Asked Questions</span>
        </h2>
        <div className="space-y-4 max-w-3xl">
          {[
            { q: "What are online casino games?", a: "Online casino games are digital versions of traditional casino games such as Roulette, Blackjack, Baccarat, Poker, Slots, and Teen Patti that can be played online." },
            { q: "Can I play live casino games online?", a: "Yes. SkyExchID offers live dealer games streamed in real time for an immersive gaming experience." },
            { q: "Which casino games are most popular in India?", a: "Teen Patti, Andar Bahar, Blackjack, Baccarat, Roulette, Poker, and online slots are among the most popular games." },
            { q: "Does SkyExchID offer Teen Patti?", a: "Yes. Players can enjoy multiple Teen Patti online game variations on the platform." },
            { q: "Are online slot games available?", a: "Yes. SkyExchID features a wide selection of online casino slot games real money with different themes and bonus features." },
            { q: "Can I play on mobile?", a: "Yes. All casino games are fully optimized for Android, iPhone, tablets, and desktop browsers." },
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

export default Casino;
