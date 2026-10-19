// Lightweight, privacy-respecting event tracking.
// No-op until NEXT_PUBLIC_GA_ID is configured: never sends anything, never
// invents an ID. See README for how to turn this on.

type EventName =
  | "cta_whatsapp_click"
  | "contato_form_submit"
  | "case_study_view";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: EventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", name, params);
}
