import type { JSX } from "react";
import QuickBookingForm from "../../quickBookingForm/QuickBookingForm";
import "./Home.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function Home(): JSX.Element {
  const { t } = useLanguage();

  return (
    <main className="home-main">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('home_title_part1')}
            <span className="highlight">{t('home_title_part2')}</span> Кыргызстан
          </h1>

          <p className="hero-description">
            {t('home_description')}
          </p>
          <Link to="/places">
            <button className="cta-button">{t('cta_button_text')}</button>
          </Link>
        </div>

        <div className="booking-sidebar-con">
          <QuickBookingForm />
        </div>
      </div>

      <div className="features-section"></div>
    </main>
  );
}