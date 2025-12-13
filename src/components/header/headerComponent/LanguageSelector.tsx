import type { JSX } from "react";
import { useLanguage } from "../../../contexts/useLanguage";
import type { LanguageCode } from "../../../i18n/translations";

export default function LanguageSelector(): JSX.Element {
  const { currentLang, setLang, t } = useLanguage();

  const languages: {
    code: LanguageCode;
    labelKey: "russian_label" | "english_label" | "kyrgyz_label";
    flag: string;
  }[] = [
    { code: "ru", labelKey: "russian_label", flag: "🇷🇺" },
    { code: "en", labelKey: "english_label", flag: "🇬🇧" },
    { code: "kg", labelKey: "kyrgyz_label", flag: "🇰🇬" },
  ];

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-option ${currentLang === lang.code ? "active" : ""}`}
          onClick={() => setLang(lang.code)}
          disabled={currentLang === lang.code}
        >
          {lang.flag} {t(lang.labelKey)}
        </button>
      ))}
    </div>
  );
}
