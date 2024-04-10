import ar from "@/assets/locales/ar.json";
import de from "@/assets/locales/de.json";
import en from "@/assets/locales/en.json";
import fr from "@/assets/locales/fr.json";
import uk from "@/assets/locales/uk.json";

export const locales = {
  en,
  de,
  fr,
  ar,
  uk,
};

export type Locales = keyof typeof locales;
