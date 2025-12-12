import type { JSX } from "react";
import RotatingGlobe from "./RotatingGlobe";
import TourCard from "./TourCard";
import CategoryFilter from "./CategoryFilter";
import { useState } from "react";
import "./Places.css";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function Places(): JSX.Element {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "kyrgyzstan" | "world">("all");

  const tourData = [
    {
      id: "kg1",
      name: t("tour_data_kg1_name"),
      category: "kyrgyzstan",
      description: t("tour_data_kg1_desc"),
      imageUrl: "src/assets/issyk_kul.jpeg",
    },
    {
      id: "kg2",
      name: t("tour_data_kg2_name"),
      category: "kyrgyzstan",
      description: t("tour_data_kg2_desc"),
      imageUrl: "src/assets/ala_archa.jpeg",
    },
    {
      id: "w1",
      name: t("tour_data_w1_name"),
      category: "world",
      description: t("tour_data_w1_desc"),
      imageUrl: "src/assets/machu_pickchu.jpeg",
    },
    {
      id: "w2",
      name: t("tour_data_w2_name"),
      category: "world",
      description: t("tour_data_w2_desc"),
      imageUrl: "src/assets/south_light.jpeg",
    },
  ];

  const filteredTours = tourData.filter((tour) =>
    filter === "all" ? true : tour.category === filter
  );

  // Динамический заголовок секции
  const getSectionHeader = () => {
    if (filter === "kyrgyzstan") return t("header_kyrgyzstan");
    if (filter === "world") return t("header_world");
    return t("header_all_tours");
  };

  return (
    <div className="places-page-con">
      <h2 className="page-title">{t("places_page_title")}</h2>

      <div className="top-section-layout">
        <div className="globe-container">
          <RotatingGlobe />
          <p className="globe-hint">
            <span className="highlight-hint">🌎</span>
            {t("places_hint")}
          </p>
        </div>

        <div className="filter-and-intro">
          <h3 className="section-intro-title">{t("places_intro_title")}</h3>

          <CategoryFilter currentFilter={filter} setFilter={setFilter} />

          <p className="intro-text status-card-glass-mini">
            {t("places_intro_text")}
          </p>
        </div>
      </div>

      <div className="tour-grid-section">
        <h3 className="section-header">{getSectionHeader()}</h3>

        <div className="tour-cards-grid">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
          ) : (
            <p className="no-tours-message">{t("no_tours_message")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
