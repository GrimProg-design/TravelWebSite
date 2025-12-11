// В components/body/tickets/TicketsComponent/TourSelection.tsx

import type { JSX } from "react";
import "./TourSelection.css"

interface Tour {
    id: string;
    name: string;
    price: number; // Цена в USD или другом эквиваленте
}

interface TourSelectionProps {
    tours: Tour[];
    onSelect: (tourId: string) => void;
}

export default function TourSelection({ tours, onSelect }: TourSelectionProps): JSX.Element {
    return (
        <div className="tour-selection-con">
            <h3 className="stage-header">1. Выберите желаемое направление</h3>
            
            <div className="tour-list-grid">
                {tours.map((tour) => (
                    <div key={tour.id} className="tour-item status-card-glass-mini">
                        <div className="tour-info">
                            <h4 className="tour-name">{tour.name}</h4>
                            <p className="tour-price">
                                Цена от: <span className="price-value">${tour.price}</span>
                            </p>
                        </div>
                        <button 
                            className="action-btn"
                            onClick={() => onSelect(tour.id)}
                        >
                            Выбрать Тур
                        </button>
                    </div>
                ))}
            </div>
            <p className="hint-text">Все туры включают гида и проживание в юрточных лагерях.</p>
        </div>
    );
}