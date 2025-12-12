import type { JSX } from "react";
import "./TourCard.css";
import { useLanguage } from "../../../contexts/LanguageContext";

interface Tour {
  id: string;
  name: string;
  category: "kyrgyzstan" | "world" | string;
  description: string;
  imageUrl: string;
  url: string;
}

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps): JSX.Element {
  const { t } = useLanguage();

  const badgeTextKey =
    tour.category === "kyrgyzstan" ? "card_badge_local" : "card_badge_global";

  return (
    <div className="tour-card">
      <div className="card-image-con">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${tour.imageUrl})` }}
        ></div>
        <span className={`card-badge ${tour.category}`}>{t(badgeTextKey)}</span>
      </div>
      <div className="card-content">
        <h4 className="card-title">{tour.name}</h4>
        <p className="card-description">{tour.description}</p>
        <a href={tour.url} target="_blank">
          <button className="card-details-btn">{t("card_details_btn")}</button>
        </a>
      </div>
    </div>
  );
}
