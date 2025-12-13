import { useState, useCallback, useMemo } from "react";
import {
  resources,
  type LanguageCode,
  type Translations,
  type TranslationKeys,
} from "../i18n/translations";
import { LOCAL_STORAGE_KEY, defaultLang } from "./languageConstants";
import type { LanguageProviderProps } from "./languageTypes";
import { LanguageContext } from "./languageContextValue";

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLang] = useState<LanguageCode>(() => {
    const savedLang = localStorage.getItem(LOCAL_STORAGE_KEY);
    return (savedLang as LanguageCode) || defaultLang;
  });

  const setLang = useCallback((lang: LanguageCode) => {
    if (Object.keys(resources).includes(lang)) {
      setCurrentLang(lang);
      localStorage.setItem(LOCAL_STORAGE_KEY, lang);
    }
  }, []);

  const t = useCallback(
    (key: TranslationKeys) => {
      const currentTranslations: Translations = resources[currentLang];
      return currentTranslations[key] || key;
    },
    [currentLang]
  );

  const value = useMemo(
    () => ({
      currentLang,
      t,
      setLang,
    }),
    [currentLang, t, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
