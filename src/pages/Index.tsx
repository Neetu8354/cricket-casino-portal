import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Steps } from "@/components/site/Steps";
import { GameSections } from "@/components/site/GameSections";
import { Features } from "@/components/site/Features";
import { MultiDevice } from "@/components/site/MultiDevice";
import { Gameplay } from "@/components/site/Gameplay";
import { Payments } from "@/components/site/Payments";
import { PromoSlider } from "@/components/site/PromoSlider";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Responsible } from "@/components/site/Responsible";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "SkyExch — India's #1 Online Cricket & Casino ID | Play in ₹";
    const ensure = (sel: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(sel) as HTMLElement | null;
      if (!el) {
        el = document.createElement(sel.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };
    ensure('meta[name="description"]', { name: "description", content: "Get your SkyExch online cricket ID in seconds on WhatsApp. Bet on IPL, T20, ODI, Andar Bahar, Teen Patti, Aviator & 1000+ casino games. INR deposits via UPI, instant withdrawals, 24×7 support." });
    ensure('link[rel="canonical"]', { rel: "canonical", href: window.location.origin });
    ensure('meta[property="og:title"]', { property: "og:title", content: "SkyExch — India's #1 Cricket & Casino ID" });
    ensure('meta[property="og:description"]', { property: "og:description", content: "Instant WhatsApp ID for cricket betting & casino in India. Play in ₹." });
    ensure('meta[property="og:type"]', { property: "og:type", content: "website" });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <WhyChoose />
      <Steps />
      <GameSections />
      <Features />
      <MultiDevice />
      <Gameplay />
      <Payments />
      <PromoSlider />
      <Stats />
      <Testimonials />
      <FAQ />
      <Responsible />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
