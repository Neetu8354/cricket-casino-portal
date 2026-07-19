import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Clock, ShieldCheck, Headphones } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { applySeo } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/site";

const Contact = () => {
  useEffect(() => {
    applySeo({
      title: "Contact Skyexchid | 24x7 WhatsApp Support for Sky Exchange Login",
      description:
        "Contact Skyexchid 24x7 on WhatsApp for Sky Exchange Login help, ID creation, deposit & withdrawal support. Real human support, replies in under 60 seconds.",
      canonical: "https://www.skyexchid.live/contact",
      keywords:
        "contact skyexchid, skyexchid support, sky exchange login support, whatsapp cricket id, online betting website india",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Skyexchid",
          url: "https://www.skyexchid.live/contact",
          description: "Get 24x7 support for Skyexchid login, deposits, withdrawals and account help.",
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.skyexchid.live/#organization",
          "name": "SkyExchID",
          "alternateName": [
            "Sky Exch ID",
            "Sky Exchange ID",
            "SkyExch",
            "Sky Exchange"
          ],
          "url": "https://www.skyexchid.live/",
          "image": "https://www.skyexchid.live/favicon.png",
          "description": "SkyExchID is a trusted online cricket exchange and casino platform in India offering cricket betting, sports betting, live casino games, Teen Patti, Aviator, and secure online gaming with instant ID, fast withdrawals, and 24/7 customer support.",
          "sameAs": [
            "https://wa.link/reddyanna_"
          ],
          "knowsAbout": [
            "Cricket Betting",
            "Sports Betting",
            "Live Casino",
            "Teen Patti",
            "Aviator Game",
            "Online Gaming",
            "Cricket Exchange"
          ],
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.skyexchid.live/favicon.png"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "url": "https://wa.link/reddyanna_",
            "availableLanguage": [
              "English",
              "Hindi"
            ]
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skyexchid.live/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.skyexchid.live/contact" },
          ],
        },
      ],
    });
  }, []);

  const reasons = [
    { icon: MessageCircle, t: "New Skyexchid ID", d: "Get your username & password in 60 seconds." },
    { icon: ShieldCheck, t: "Login issues", d: "Forgot password, account locked, or 2FA help." },
    { icon: Clock, t: "Deposit / Withdrawal", d: "UPI not credited? Withdrawal stuck? We resolve in minutes." },
    { icon: Headphones, t: "General queries", d: "Markets, odds, promotions — ask anything 24x7." },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="container py-12 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground/70">Contact</span>
        </nav>

        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Contact Skyexchid</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            24x7 <span className="text-gradient-gold">WhatsApp support</span> — real humans, instant replies
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Skyexchid support is online round the clock. Whether you need a new Sky Exchange Login ID,
            help with a deposit, or guidance on placing your first bet — message us on WhatsApp and get a reply in under 60 seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div className="p-8 rounded-2xl border border-primary/30 bg-gradient-card shadow-gold">
            <div className="h-14 w-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-extrabold mb-2">Message us on WhatsApp</h2>
            <p className="text-muted-foreground mb-6">
              The fastest way to reach Skyexchid. Open WhatsApp, send a "Hi", and our team replies within 60 seconds — in Hindi or English.
            </p>
            <ul className="space-y-2 text-sm text-foreground/85 mb-6">
              <li>✓ 24x7 availability — including weekends & holidays</li>
              <li>✓ Average reply time: under 60 seconds</li>
              <li>✓ Hindi & English support</li>
              <li>✓ Secure — no email or password required to chat</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-4">What can we help with?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.t} className="p-5 rounded-2xl bg-gradient-card border border-border">
                  <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-3">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold mb-1 text-sm">{r.t}</h3>
                  <p className="text-xs text-muted-foreground">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 rounded-2xl border border-border bg-gradient-card">
          <h2 className="text-2xl font-extrabold mb-4">Support hours & service area</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-xs text-primary font-semibold uppercase mb-1">Hours</div>
              <div className="text-foreground/85">24 × 7, all year round</div>
            </div>
            <div>
              <div className="text-xs text-primary font-semibold uppercase mb-1">Languages</div>
              <div className="text-foreground/85">Hindi · English</div>
            </div>
            <div>
              <div className="text-xs text-primary font-semibold uppercase mb-1">Service area</div>
              <div className="text-foreground/85">All of India · INR (₹) only</div>
            </div>
          </div>
        </div>

        <section className="container py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            <span className="text-gradient-gold">Frequently Asked Questions</span>
          </h2>
          <div className="space-y-4 max-w-3xl">
            {[
              { q: "How can I contact SkyExchID support?", a: "You can reach the SkyExchID support team through the contact options provided on this page. Our team is available 24/7 to assist with account-related questions, technical support, and general inquiries." },
              { q: "What issues can the support team help me with?", a: "Our customer support team can assist with: New account registration, SkyExchID login assistance, Online cricket betting queries, Casino game information, Deposit and withdrawal guidance, Technical issues, General account support." },
              { q: "How quickly will I receive a response?", a: "We aim to respond to all inquiries as quickly as possible. Most support requests are handled promptly, especially those received through our primary support channels. Providing clear details helps speed up the process." },
              { q: "Can I create a SkyExchID account through customer support?", a: "Yes. If you don't already have an account, our support team can guide you through the registration process and help you get started." },
              { q: "Do I need an account before contacting support?", a: "No. You can contact us whether you're a new visitor or an existing user. Our team is happy to answer your questions and provide guidance." },
              { q: "Can I get help with online cricket betting?", a: "Yes. If you have questions about online cricket betting, available betting markets, or how the platform works, our support team is available to help." },
              { q: "Can customer support help with casino games?", a: "Absolutely. We can assist with questions about live casino games, Teen Patti, Blackjack, Roulette, Baccarat, Aviator, slot games, and other games available on the platform." },
              { q: "What information should I include when contacting support?", a: "For faster assistance, include: Your registered account details (if applicable), A brief description of your issue, Relevant screenshots (if available), Any error messages you received. Providing complete information helps resolve your request more efficiently." },
              { q: "Is my personal information secure when I contact SkyExchID?", a: "Yes. We take user privacy seriously and handle inquiries with appropriate security measures to help protect your personal information." },
              { q: "Is customer support available 24/7?", a: "Yes. Our customer support team is available 24 hours a day, 7 days a week, to help with account, betting, casino, and technical questions." },
              { q: "Can I contact SkyExchID for partnership or business inquiries?", a: "Yes. If you have partnership opportunities, business proposals, or media inquiries, you can contact us through this page, and the appropriate team will respond." },
              { q: "What should I do if I don't receive a reply?", a: "If you haven't received a response within a reasonable time, please resend your message with complete details or use another available contact method listed on this page. Multiple contact options and FAQs are considered best practice for effective contact pages." },
            ].map((item) => (
              <div key={item.q} className="p-5 rounded-xl bg-gradient-card border border-border">
                <h3 className="font-bold text-base mb-2 text-primary">{item.q}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Contact;
