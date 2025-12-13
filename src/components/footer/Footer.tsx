import type { JSX } from "react";
import "./Footer.css";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Footer(): JSX.Element {
    const { t } = useLanguage();

    const data = [
        "Егор",
        "Ilia",
        "Ruslan",
        "Dastan",
        "Kto to"
    ];

    const randomLinks = Array.from({ length: 10 }, (_, i) => {
        let label;

        if (i < 5) {
            label = `${t('footer_guide_prefix')} ${i + 1}`;
        } 
        else {
            const dataIndex = i - 5;
            const name = data[dataIndex] ?? t('footer_no_data');
            label = `${name} ${dataIndex + 1}`;
        }

        return (
            <li key={i}>
                <a href={`#link-${i}`}>{label}</a>
            </li>
        );
    });

    return (
        <footer className="main-footer">
            <div className="footer-content-con">
                
                <div className="footer-section navigation-links">
                    <h3>{t('footer_guides_header')}</h3>
                    <ul>
                        {randomLinks}
                    </ul>
                </div>

                <div className="footer-section contacts">
                    <h3>{t('footer_contacts_header')}</h3>
                    <p>+996 (777) 123 456</p>
                    <p>+996 (555) 789 012</p>
                    <p>info@tour.kg</p>
                    <p>{t('footer_no_data')}</p>
                </div>

                <div className="footer-section branding-social">
                    <h2>Tour.KG</h2>
                    <p className="tagline">{t('footer_tagline')}</p>
                    <div className="social-icons">
                        <span>🌐</span>
                        <span>📸</span>
                        <span>📘</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Tour.KG. {t('footer_all_rights_reserved')}</p>
                <p>(данный проект является учебным и не комерческим)</p>
            </div>
        </footer>
    );
}