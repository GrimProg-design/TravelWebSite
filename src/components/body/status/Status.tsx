import type { JSX } from "react";

import SparklingProgressBar from "./SparklingProgressBar.tsx";
import "./Status.css"

export default function Status(): JSX.Element {
  const bookingDetails = {
    destination: "Озеро Сон-Куль (Лазурная Сказка)",
    date: "20 Июня 2026",
    participants: 4,
    guide: "Айбек Мамытов",
    timeRemaining: 75,
  };

  return (
    <div className="status-page-con">
      <h2 className="page-title">Ваш Статус Бронирования</h2>

      <div className="status-card-glass">
        <h3 className="card-header-title">Поездка подтверждена!</h3>

        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Направление:</span>
            <p className="info-value destination-name">
              {bookingDetails.destination}
            </p>
          </div>

          <div className="info-item">
            <span className="info-label">Дата отправления:</span>
            <p className="info-value date-value">{bookingDetails.date}</p>
          </div>

          <div className="info-item">
            <span className="info-label">Участники:</span>
            <p className="info-value">{bookingDetails.participants} человек</p>
          </div>

          <div className="info-item">
            <span className="info-label">Ваш Гид:</span>
            <p className="info-value guide-name">{bookingDetails.guide}</p>
          </div>
        </div>

        <hr className="divider" />

        <div className="progress-section">
          <span className="progress-label">Время до отправления:</span>
          <SparklingProgressBar progress={bookingDetails.timeRemaining} />
          <p className="progress-text">
            Осталось {100 - bookingDetails.timeRemaining}% времени до вашего
            незабываемого приключения!
          </p>
        </div>

        <button className="download-btn">Скачать Билеты / Маршрут</button>
      </div>
    </div>
  );
}
