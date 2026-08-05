import { useLanguage } from "../i18n/useLanguage";

type LanguageToggleProps = {
  tone?: "dark" | "light";
};

export default function LanguageToggle({ tone = "dark" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const groupLabel = language === "es" ? "Seleccionar idioma" : "Select language";

  return (
    <div className={`language-switch language-switch--${tone}`} role="group" aria-label={groupLabel}>
      <button className={`language-switch__option ${language === "es" ? "is-active" : ""}`} type="button" onClick={() => setLanguage("es")} aria-label="Español" aria-pressed={language === "es"}>
        ES
      </button>
      <button className={`language-switch__option ${language === "en" ? "is-active" : ""}`} type="button" onClick={() => setLanguage("en")} aria-label="English" aria-pressed={language === "en"}>
        EN
      </button>
    </div>
  );
}
