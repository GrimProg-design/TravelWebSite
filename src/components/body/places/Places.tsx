import type { JSX } from "react";
import RotatingGlobe from "./RotatingGlobe";
import TourCard from "./TourCard";
import CategoryFilter from "./CategoryFilter";
import { useState } from "react";
import "./Places.css";
import { useLanguage } from "../../../contexts/useLanguage";

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
      url: "https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%81%D1%8B%D0%BA-%D0%9A%D1%83%D0%BB%D1%8C",
    },
    {
      id: "kg2",
      name: t("tour_data_kg2_name"),
      category: "kyrgyzstan",
      description: t("tour_data_kg2_desc"),
      imageUrl: "src/assets/ala_archa.jpeg",
      url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B0-%D0%90%D1%80%D1%87%D0%B0_(%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D0%B0%D1%80%D0%BA)",
    },
    {
      id: "w1",
      name: t("tour_data_w1_name"),
      category: "world",
      description: t("tour_data_w1_desc"),
      imageUrl: "src/assets/machu_pickchu.jpeg",
      url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%87%D1%83-%D0%9F%D0%B8%D0%BA%D1%87%D1%83",
    },
    {
      id: "w2",
      name: t("tour_data_w2_name"),
      category: "world",
      description: t("tour_data_w2_desc"),
      imageUrl: "src/assets/south_light.jpeg",
      url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5_%D1%81%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5",
    },
  ];

  const filteredTours = tourData.filter((tour) =>
    filter === "all" ? true : tour.category === filter
  );

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
