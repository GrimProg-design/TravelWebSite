// В components/body/tickets/TicketsComponent/TransportSelection.tsx

import type { JSX } from "react";
import "./TransportSelection.css"

interface TransportSelectionProps {
    onSelect: (transport: 'plane' | 'train') => void;
    selectedTour: string | null;
}

export default function TransportSelection({ onSelect, selectedTour }: TransportSelectionProps): JSX.Element {
    return (
        <div className="transport-selection-con">
            <h3 className="stage-header">2. Выберите вид транспорта</h3>
            <p className="tour-summary">
                Вы выбрали: <span className="highlight-summary">{selectedTour}</span>
            </p>
            
            <div className="transport-options">
                
                {/* Опция Самолет */}
                <div 
                    className="transport-option plane-option" 
                    onClick={() => onSelect('plane')}
                >
                    <span className="icon">✈️</span>
                    <h4>Самолет</h4>
                    <p>Быстро и комфортно к отдаленным местам.</p>
                </div>

                {/* Опция Поезд */}
                <div 
                    className="transport-option train-option" 
                    onClick={() => onSelect('train')}
                >
                    <span className="icon">🚂</span>
                    <h4>Поезд</h4>
                    <p>Живописные виды и аутентичное путешествие.</p>
                </div>

            </div>
            
            <p className="warning-text">
                * Выбор транспорта влияет на доступные места и общую стоимость.
            </p>
        </div>
    );
}