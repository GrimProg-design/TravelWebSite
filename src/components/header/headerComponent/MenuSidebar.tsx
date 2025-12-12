import type { JSX } from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import "./MenuSidebar.css"
import { useLanguage } from "../../../contexts/LanguageContext";
import type { TranslationKeys } from "../../../i18n/translations";

interface NavLink {
    path: string;
    textKey: TranslationKeys;
}

const navLinks: NavLink[] = [
    { path: "/", textKey: "home_link" },
    { path: "/status", textKey: "status_link" },
    { path: "/bilets", textKey: "tickets_link" },
    { path: "/places", textKey: "places_link" },
];

interface MenuSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MenuSidebar({ isOpen, onClose }: MenuSidebarProps): JSX.Element {
    const { t } = useLanguage();

    return (
        <>
            {isOpen && <div className="menu-overlay" onClick={onClose}></div>}

            <div className={`menu-sidebar ${isOpen ? 'open' : ''}`}>
                
                <button className="close-btn" onClick={onClose}>&times;</button>
                
                <nav className="menu-navigation">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.path}
                            to={link.path}
                            onClick={onClose}
                        >
                            {t(link.textKey)}
                        </Link>
                    ))}
                </nav>
                
                <hr className="menu-divider" />

                <div className="menu-functional-section">
                    <h4>{t('language_header')}</h4>
                    <LanguageSelector />
                </div>
                
                <div className="menu-functional-section">
                    <h4>{t('theme_header')}</h4>
                    <ThemeSwitcher />
                </div>
                
                <div className="menu-footer">
                    <span>{t('footer_text')}</span>
                </div>
            </div>
        </>
    );
}