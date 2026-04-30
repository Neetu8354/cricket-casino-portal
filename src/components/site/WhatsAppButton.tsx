import { Button, ButtonProps } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface Props extends ButtonProps {
  href?: string;
  ariaLabel?: string;
}

/** Every CTA on the site is wired to WhatsApp. */
export const WhatsAppButton = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, href = WHATSAPP_URL, ariaLabel, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || "Get your ID on WhatsApp"}
        className="inline-block"
      >
        <Button className={cn("font-semibold", className)} {...props}>
          {children}
        </Button>
      </a>
    );
  }
);
WhatsAppButton.displayName = "WhatsAppButton";
