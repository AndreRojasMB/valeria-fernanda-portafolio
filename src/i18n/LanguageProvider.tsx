import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./language-context";
import { DEFAULT_LANGUAGE, isLanguage, type Language } from "./language";

const STORAGE_KEY = "valeria-portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // La interfaz sigue funcionando aunque el navegador bloquee localStorage.
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
