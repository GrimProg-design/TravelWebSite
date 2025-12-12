import type { JSX } from "react";
import { useState } from "react";
import "./SeatSelection.css";

interface SeatSelectionProps {
  transportType: "plane" | "train";
  onComplete: () => void;
  isAnimating: boolean;
}

export default function SeatSelection({
  transportType,
  onComplete,
  isAnimating,
}: SeatSelectionProps): JSX.Element {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const seats =
    transportType === "plane"
      ? ["A1", "B1", "C1", "D1", "A2", "B2", "C2", "D2"]
      : ["1A", "1B", "2A", "2B", "3A", "3B"];

  return (
    <div
      className={`seat-selection-con ${transportType} ${
        isAnimating ? "animate-out" : ""
      }`}
    >
      <h3 className="stage-header">
        Выберите место в {transportType === "plane" ? "самолете" : "поезде"}
      </h3>

      <div className={`transport-scheme ${transportType}-body`}>
        <div className="scheme-door entrance">ВХОД</div>

        <div className={`seat-grid ${transportType}-seats`}>
          {seats.map((seat) => (
            <div
              key={seat}
              className={`seat ${selectedSeat === seat ? "selected" : ""}`}
              onClick={() => setSelectedSeat(seat)}
            >
              {seat}
            </div>
          ))}
        </div>

        <div className="scheme-door exit">ВЫХОД</div>

        {transportType === "plane" && <div className="cockpit"></div>}
      </div>

      <p className="selected-info">
        {selectedSeat
          ? `Выбрано место: ${selectedSeat}`
          : "Выберите доступное место"}
      </p>

      <button
        className="action-btn"
        onClick={onComplete}
        disabled={!selectedSeat || isAnimating}
      >
        {isAnimating ? "Оформление..." : "Купить и Отправить!"}
      </button>
    </div>
  );
}
