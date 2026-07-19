"use client";

import { useEffect } from "react";
import { mpTrack } from "@/lib/meta-pixel";

/**
 * Traccia un evento Meta standard al montaggio (es. ViewContent, Contact).
 * Da inserire nelle pagine server come figlio client.
 */
export function TrackView({
  event = "ViewContent",
  name,
  category,
}: {
  event?: string;
  name?: string;
  category?: string;
}) {
  useEffect(() => {
    mpTrack(event, {
      ...(name ? { content_name: name } : {}),
      ...(category ? { content_category: category } : {}),
    });
  }, [event, name, category]);

  return null;
}
