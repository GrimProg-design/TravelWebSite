import type { JSX } from "react";
import { useState } from "react";
import "./SeatSelection.css";
import { useLanguage } from "../../../contexts/LanguageContext";

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
  const { t } = useLanguage();
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const seats =
    transportType === "plane"
      ? ["A1", "B1", "C1", "D1", "A2", "B2", "C2", "D2"]
      : ["1A", "1B", "2A", "2B", "3A", "3B"];

  const headerKey =
    transportType === "plane" ? "seat_stage_header_plane" : "seat_stage_header_train";

  return (
    <div
      className={`seat-selection-con ${transportType} ${
        isAnimating ? "animate-out" : ""
      }`}
    >
      <h3 className="stage-header">
        {t(headerKey)}
      </h3>

      <div className={`transport-scheme ${transportType}-body`}>
        <div className="scheme-door entrance">{t('seat_door_entrance')}</div>

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

        <div className="scheme-door exit">{t('seat_door_exit')}</div>

        {transportType === "plane" && <div className="cockpit"></div>}
      </div>

      <p className="selected-info">
        {selectedSeat
          ? `${t('seat_info_prefix')} ${selectedSeat}`
          : t('seat_info_placeholder')}
      </p>

      <button
        className="action-btn"
        onClick={onComplete}
        disabled={!selectedSeat || isAnimating}
      >
        {isAnimating ? t('seat_btn_loading') : t('seat_btn_purchase')}
      </button>
    </div>
  );
}