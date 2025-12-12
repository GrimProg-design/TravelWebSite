import React, { 
    createContext, 
    useContext, 
    useState, 
    useCallback, 
    useEffect,
    useMemo,
    type ReactNode
} from "react";
import { resources, type LanguageCode, type Translations, type TranslationKeys } from "../i18n/translations";

interface LanguageContextType {
    currentLang: LanguageCode;
    t: (key: TranslationKeys) => string; 
    setLang: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

const LOCAL_STORAGE_KEY = 'app-language';
const defaultLang: LanguageCode = 'ru';

interface LanguageProviderProps {
    children: ReactNode;
}

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

    const t = useCallback((key: TranslationKeys) => {
        const currentTranslations: Translations = resources[currentLang];
        return currentTranslations[key] || key; 
    }, [currentLang]);

    const value = useMemo(() => ({
        currentLang,
        t,
        setLang,
    }), [currentLang, t, setLang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}