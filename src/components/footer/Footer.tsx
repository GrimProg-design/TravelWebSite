import type { JSX } from "react";
import "./Footer.css";

export default function Footer(): JSX.Element {
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
            label = `Гид ${i + 1}`;
        } 
        else {
            const dataIndex = i - 5;
            const name = data[dataIndex] ?? "Нет данных";
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
                    <h3>Наши Гиды</h3>
                    <ul>
                        {randomLinks}
                    </ul>
                </div>

                <div className="footer-section contacts">
                    <h3>Свяжитесь с Нами</h3>
                    <p>+996 (777) 123 456</p>
                    <p>+996 (555) 789 012</p>
                    <p>info@tour.kg</p>
                    <p>Бишкек, Кыргызстан</p>
                </div>

                <div className="footer-section branding-social">
                    <h2>Tour.KG</h2>
                    <p className="tagline">Исследуйте сердце Тянь-Шаня</p>
                    <div className="social-icons">
                        <span>🌐</span>
                        <span>📸</span>
                        <span>📘</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Tour.KG. Все права защищены.</p>
            </div>
        </footer>
    );
}
