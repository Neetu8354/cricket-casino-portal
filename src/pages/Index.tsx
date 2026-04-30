import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { PromoSlider } from "@/components/site/PromoSlider";
import { GameSections } from "@/components/site/GameSections";
import { Features } from "@/components/site/Features";
import { Steps } from "@/components/site/Steps";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
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

    // JSON-LD
    let ld = document.getElementById("ld-json");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-json";
      (ld as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SkyExch",
      url: window.location.origin,
      sameAs: ["https://wa.link/reddyanna_"],
      description: "India's trusted online cricket & casino ID provider with WhatsApp instant ID and INR payments.",
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      <PromoSlider />
      <GameSections />
      <Stats />
      <Features />
      <Steps />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
