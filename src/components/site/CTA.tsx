import { WhatsAppButton } from "./WhatsAppButton";

export const CTA = () => (
  <section className="py-16">
    <div className="container">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-gold p-8 md:p-14 text-center shadow-gold">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
          Ready to Win Big in ₹?
        </h2>
        <p className="text-primary-foreground/85 max-w-xl mx-auto mb-8">
          Join 10 lakh+ Indian players. Get your cricket & casino ID instantly on WhatsApp.
        </p>
        <WhatsAppButton size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90 h-12 px-8 text-base">
          Get Your ID on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  </section>
);
