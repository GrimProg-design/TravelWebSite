import type { JSX } from "react";
import QuickBookingForm from "../../quickBookingForm/QuickBookingForm"; 
import "./Home.css"

export default function Home(): JSX.Element {
    return (
        <main className="home-main">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Откройте <span className="highlight">Непознанный</span> Кыргызстан
                    </h1>
                    
                    <p className="hero-description">
                        Ваше путешествие по Тянь-Шаню начинается здесь. От величественных пиков до бирюзовых озер — выберите свой идеальный маршрут.
                    </p>
                    
                    <button className="cta-button">Смотреть все туры</button>
                </div>

                <div className="booking-sidebar-con">
                    <QuickBookingForm />
                </div>
            </div>

            <div className="features-section">
            </div>
        </main>
    );
}