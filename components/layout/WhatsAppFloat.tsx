"use client";

import { social } from "@/data/social";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon } from "../ui/icons";

/** Always-visible WhatsApp entry point, so a visitor can reach out from any scroll position. */
export function WhatsAppFloat() {
  return (
    <a
      href={social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackEvent("cta_whatsapp_click", { from: "floating" })}
      className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25d366] py-3 pr-5 pl-4 text-sm font-semibold text-[#06140c] shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-105 focus-visible:outline-offset-4 sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Falar comigo</span>
    </a>
  );
}
