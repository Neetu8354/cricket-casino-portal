import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "How do I get my SkyExchange ID?", a: "Just click any WhatsApp button on the site. Our chatbot will create your ID in under a minute." },
  { q: "Is it safe to deposit in INR?", a: "Yes. We support UPI, PhonePe, GPay, Paytm and Net Banking with bank-grade encryption." },
  { q: "Which cricket leagues can I bet on?", a: "IPL, T20 World Cup, ODI, Test cricket, BBL, PSL, CPL and many more — all with live odds." },
  { q: "What casino games are available?", a: "Live Roulette, Andar Bahar, Teen Patti, Dragon Tiger, Aviator, Slots, Lucky 7 and 1000+ titles." },
  { q: "How fast are withdrawals?", a: "Most withdrawals are processed within 5–10 minutes directly to your Indian bank account." },
  { q: "Is there 24/7 support?", a: "Yes — our WhatsApp support team is online 24×7 to help with any question." },
];

export const FAQ = () => (
  <section className="py-16">
    <div className="container max-w-3xl">
      <div className="text-center mb-10">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">FAQ</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h2>
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
