import type { JSX } from "react";
import "./TourCard.css"

interface Tour {
    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
}

interface TourCardProps {
    tour: Tour;
}

export default function TourCard({ tour }: TourCardProps): JSX.Element {
    return (
        <div className="tour-card">
            <div className="card-image-con">
                <div className="card-image" style={{ backgroundImage: `url(${tour.imageUrl})` }}></div>
                <span className={`card-badge ${tour.category}`}>{tour.category === 'kyrgyzstan' ? '🇰🇬 Local' : '🌍 Global'}</span>
            </div>
            <div className="card-content">
                <h4 className="card-title">{tour.name}</h4>
                <p className="card-description">{tour.description}</p>
                <button className="card-details-btn">Подробнее &rarr;</button>
            </div>
        </div>
    );
}