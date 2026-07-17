import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is SkyExchID?",
    a: "SkyExchID is an online platform offering online cricket betting and a wide range of casino games, including live dealer games, Teen Patti, slots, Blackjack, Roulette, Baccarat, and more.",
  },
  {
    q: "Which cricket tournaments can I bet on?",
    a: "You can follow and participate in betting markets for IPL, ICC events, T20 leagues, ODI matches, Test cricket, Asia Cup, PSL, BBL, CPL, and other major tournaments.",
  },
  {
    q: "What casino games are available on SkyExchID?",
    a: "SkyExchID offers live Blackjack, Roulette, Baccarat, Poker, Dragon Tiger, Teen Patti, Andar Bahar, Aviator, slot games, and many other popular casino titles.",
  },
  {
    q: "Is SkyExchID suitable for beginners?",
    a: "Yes. The platform is designed with an intuitive interface, making it easy for new players to explore online cricket betting and casino games.",
  },
  {
    q: "Can I access SkyExchID on my mobile phone?",
    a: "Yes. SkyExchID is fully optimized for Android smartphones, iPhones, tablets, laptops, and desktop devices.",
  },
  {
    q: "How does SkyExchID protect user information?",
    a: "We use secure technologies, including SSL encryption, to help safeguard user data and provide a safe gaming environment.",
  },
  {
    q: "What makes SkyExchID different from other platforms?",
    a: "SkyExchID combines online cricket betting, live casino games, Indian card games, and modern casino entertainment on one secure, easy-to-use platform backed by responsive customer support.",
  },
  {
    q: "Does SkyExchID support responsible gaming?",
    a: "Yes. We encourage players to play responsibly, set personal limits, and enjoy gaming as a form of entertainment.",
  },
  {
    q: "What games are most popular on SkyExchID?",
    a: "Some of the most popular games include Teen Patti, Aviator, Roulette, Blackjack, Baccarat, Poker, Dragon Tiger, Andar Bahar, and live cricket betting markets.",
  },
  {
    q: "Why should I choose SkyExchID?",
    a: "SkyExchID offers a secure platform, a wide variety of games, a mobile-friendly experience, live cricket betting, responsive support, and a commitment to delivering a smooth and enjoyable gaming experience.",
  },
];

export const FAQ = () => {
  useEffect(() => {
    const id = "faq-jsonld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    return () => {
      script?.remove();
    };
  }, []);

  return (
    <section id="faq" className="py-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3">
            Everything you need to know about SkyExchID online cricket betting & casino games
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="rounded-xl border border-border bg-gradient-card px-5">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
