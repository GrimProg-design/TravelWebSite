import type { JSX } from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import "./MenuSidebar.css"

const navLinks = [
    { path: "/", text: "Главная" },
    { path: "/status", text: "Статус поездки" },
    { path: "/bilets", text: "Купить билеты" },
    { path: "/places", text: "Места" },
];

interface MenuSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MenuSidebar({ isOpen, onClose }: MenuSidebarProps): JSX.Element {
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
                            {link.text}
                        </Link>
                    ))}
                </nav>
                
                <hr className="menu-divider" />

                <div className="menu-functional-section">
                    <h4>Язык</h4>
                    <LanguageSelector />
                </div>
                
                <div className="menu-functional-section">
                    <h4>Настройки</h4>
                    <ThemeSwitcher />
                </div>
                
                <div className="menu-footer">
                    <span>Tour.KG &copy; 2025</span>
                </div>
            </div>
        </>
    );
}