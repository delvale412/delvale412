"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackEvent("case_study_view", { slug });
  }, [slug]);

  return null;
}
