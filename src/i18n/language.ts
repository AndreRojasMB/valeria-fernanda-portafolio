export type Language = "es" | "en";

export const DEFAULT_LANGUAGE: Language = "es";

export function isLanguage(value: unknown): value is Language {
  return value === "es" || value === "en";
}
