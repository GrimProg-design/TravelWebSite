import type { JSX } from "react";
import "./TourSelection.css";
import { useLanguage } from "../../../contexts/useLanguage";

interface Tour {
  id: string;
  name: string;
  price: number;
}

interface TourSelectionProps {
  tours: Tour[];
  onSelect: (tourId: string) => void;
}

export default function TourSelection({
  tours,
  onSelect,
}: TourSelectionProps): JSX.Element {
  const { t } = useLanguage();

  return (
    <div className="tour-selection-con">
      <h3 className="stage-header">{t("tour_stage_header")}</h3>

      <div className="tour-list-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-item status-card-glass-mini">
            <div className="tour-info">
              <h4 className="tour-name">{tour.name}</h4>
              <p className="tour-price">
                {t("tour_price_prefix")}{" "}
                <span className="price-value">${tour.price}</span>
              </p>
            </div>
            <button className="action-btn" onClick={() => onSelect(tour.id)}>
              {t("tour_select_btn")}
            </button>
          </div>
        ))}
      </div>
      <p className="hint-text">{t("tour_hint_text")}</p>
    </div>
  );
}
