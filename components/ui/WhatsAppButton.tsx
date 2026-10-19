"use client";

import { social, whatsappLink } from "@/data/social";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  solid: "bg-[#25d366] text-[#06140c] hover:bg-[#3be07c] shadow-[0_0_28px_-6px_rgba(37,211,102,0.55)]",
  outline: "border border-[#25d366]/50 text-[#25d366] hover:bg-[#25d366]/10",
};

/** The single call to action of the whole site: opens a WhatsApp chat with a ready message. */
export function WhatsAppButton({
  label = "Chamar no WhatsApp",
  message,
  from,
  size = "md",
  variant = "solid",
  className = "",
}: {
  label?: string;
  message?: string;
  from: string;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <a
      href={message ? whatsappLink(message) : social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("cta_whatsapp_click", { from })}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}
