"use client";

import { useEffect } from "react";
import { salvaParametriCampagna } from "@/lib/eicForm";

/**
 * Salva UTM / gclid / fbclid della pagina di atterraggio: il form su
 * /contatti li manda al CRM anche se la visita è iniziata altrove.
 */
export function SalvaCampagna() {
  useEffect(() => {
    salvaParametriCampagna();
  }, []);
  return null;
}
