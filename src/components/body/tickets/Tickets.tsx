// В components/body/tickets/Tickets.tsx

import type { JSX } from "react";
import { useState } from "react";
import TourSelection from "./TourSelection";
import TransportSelection from "./TransportSelection";
import SeatSelection from "./SeatSelection";

import "./Tickets.css"

// Определяем этапы покупки
type Stage = 'tour' | 'transport' | 'seat' | 'checkout';

export default function Tickets(): JSX.Element {
    const [currentStage, setCurrentStage] = useState<Stage>('tour');
    const [selectedTour, setSelectedTour] = useState<string | null>(null);
    const [selectedTransport, setSelectedTransport] = useState<'plane' | 'train' | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Имитация списка туров
    const availableTours = [
        { id: '1', name: 'Жемчужина Иссык-Куля', price: 250 },
        { id: '2', name: 'Пик Победы и Хан-Тенгри', price: 400 },
        { id: '3', name: 'Кочевой Путь на Сон-Куль', price: 180 },
    ];

    // Функции перехода между этапами
    const handleTourSelect = (tourId: string) => {
        const tour = availableTours.find(t => t.id === tourId);
        if (tour) {
            setSelectedTour(tour.name);
            setCurrentStage('transport');
        }
    };

    const handleTransportSelect = (transport: 'plane' | 'train') => {
        setSelectedTransport(transport);
        setCurrentStage('seat');
    };

    const handlePurchaseComplete = () => {
        setIsAnimating(true);
        // Запускаем анимацию на 3 секунды, затем переходим на страницу 'checkout' или 'status'
        setTimeout(() => {
            setCurrentStage('checkout');
            setIsAnimating(false);
        }, 3000); 
    };

    return (
        <div className="tickets-page-con">
            <h2 className="page-title">Бронирование Вашего Путешествия</h2>

            <div className="booking-process-con status-card-glass">
                
                {/* 1. Выбор Тура */}
                {currentStage === 'tour' && (
                    <TourSelection 
                        tours={availableTours} 
                        onSelect={handleTourSelect}
                    />
                )}

                {/* 2. Выбор Транспорта */}
                {currentStage === 'transport' && (
                    <TransportSelection 
                        onSelect={handleTransportSelect}
                        selectedTour={selectedTour}
                    />
                )}

                {/* 3. Выбор Места и Анимация */}
                {currentStage === 'seat' && (
                    <SeatSelection
                        transportType={selectedTransport!} 
                        onComplete={handlePurchaseComplete}
                        isAnimating={isAnimating}
                    />
                )}

                {/* 4. Завершение */}
                 {currentStage === 'checkout' && (
                    <div className="checkout-message">
                        <h3>🎉 Успех! Ваши билеты отправлены!</h3>
                        <p>Ваше приключение {selectedTour} начинается скоро. Спасибо за выбор Tour.KG.</p>
                        <button onClick={() => setCurrentStage('tour')}>Начать новое бронирование</button>
                    </div>
                )}
            </div>
        </div>
    );
}