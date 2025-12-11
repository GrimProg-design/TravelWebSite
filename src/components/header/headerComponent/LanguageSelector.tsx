import type { JSX } from "react";
export default function LanguageSelector(): JSX.Element {
    const languages = [
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'kg', label: 'Кыргызча', flag: '🇰🇬' },
    ];
    
    return (
        <div className="language-selector">
            {languages.map(lang => (
                <button key={lang.code} className="lang-option">
                    {lang.flag} {lang.label}
                </button>
            ))}
        </div>
    );
}