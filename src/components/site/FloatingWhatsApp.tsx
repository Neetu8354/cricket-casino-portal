import { WHATSAPP_URL } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-4 py-3 rounded-full shadow-2xl animate-pulse-glow"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="hidden sm:inline font-semibold">Need ID?</span>
  </a>
);
