import type { JSX } from "react";
export default function ThemeSwitcher(): JSX.Element {
    return (
        <div className="theme-switcher">
            <button className="theme-btn active">🌙 Темная</button>
            <button className="theme-btn">☀️ Светлая</button>
        </div>
    );
}