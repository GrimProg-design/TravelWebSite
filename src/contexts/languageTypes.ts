import type { LanguageCode, TranslationKeys } from "../i18n/translations";
import type { ReactNode } from "react";

export interface LanguageContextType {
    currentLang: LanguageCode;
    t: (key: TranslationKeys) => string; 
    setLang: (lang: LanguageCode) => void;
}

export interface LanguageProviderProps {
    children: ReactNode;
}