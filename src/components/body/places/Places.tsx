import type { JSX } from "react";
import RotatingGlobe from "./RotatingGlobe"; 
import TourCard from "./TourCard";
import CategoryFilter from "./CategoryFilter";
import { useState } from "react";

import "./Places.css"

const tourData = [
    { id: 'kg1', name: 'Иссык-Куль: Жемчужина Тянь-Шаня', category: 'kyrgyzstan', description: 'Самое большое и красивое озеро. Идеально для летнего отдыха.', imageUrl: 'src/assets/issyk_kul.jpeg' },
    { id: 'kg2', name: 'Ущелье Ала-Арча: Альпийские Луга', category: 'kyrgyzstan', description: 'Высокогорный национальный парк, доступный из Бишкека.', imageUrl: 'src/assets/ala_archa.jpeg' },
    { id: 'w1', name: 'Мачу-Пикчу: Город Инков', category: 'world', description: 'Исторический памятник, затерянный в облаках Анд.', imageUrl: 'src/assets/machu_pickchu.jpeg' },
    { id: 'w2', name: 'Исландия: Северное Сияние', category: 'world', description: 'Путешествие по вулканам, гейзерам и ледникам.', imageUrl: 'src/assets/south_light.jpeg' },
];

export default function Places(): JSX.Element {
    const [filter, setFilter] = useState<'all' | 'kyrgyzstan' | 'world'>('all');
    
    const filteredTours = tourData.filter(tour => 
        filter === 'all' ? true : tour.category === filter
    );

    return (
        <div className="places-page-con">
            <h2 className="page-title">Наши Направления</h2>

            <div className="top-section-layout">
                
                <div className="globe-container">
                    <RotatingGlobe /> 
                    <p className="globe-hint">
                        <span className="highlight-hint">🌎</span> 
                        Мини-карта показывает направления туров.
                    </p>
                </div>

                <div className="filter-and-intro">
                    <h3 className="section-intro-title">Откройте для себя свое следующее приключение</h3>
                    
                    <CategoryFilter currentFilter={filter} setFilter={setFilter} />
                    
                    <p className="intro-text status-card-glass-mini">
                        Мы предлагаем лучшие маршруты как по сердцу Тянь-Шаня, так и по самым живописным уголкам планеты, чтобы вы могли удобно расширять свое путешествие.
                    </p>
                </div>
            </div>

            <div className="tour-grid-section">
                <h3 className="section-header">{filter === 'kyrgyzstan' ? 'Туры по Кыргызстану' : filter === 'world' ? 'Всемирные Приключения' : 'Все Туры'}</h3>
                
                <div className="tour-cards-grid">
                    {filteredTours.length > 0 ? (
                        filteredTours.map(tour => (
                            <TourCard key={tour.id} tour={tour} />
                        ))
                    ) : (
                        <p className="no-tours-message">Туры в этой категории пока недоступны.</p>
                    )}
                </div>
            </div>
        </div>
    );
}