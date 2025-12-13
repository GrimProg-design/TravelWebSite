import type { JSX } from "react";
import { useState } from "react";
import TourSelection from "./TourSelection";
import TransportSelection from "./TransportSelection";
import SeatSelection from "./SeatSelection";
import "./Tickets.css";
import { useLanguage } from "../../../contexts/useLanguage";

type Stage = "tour" | "transport" | "seat" | "checkout";

export default function Tickets(): JSX.Element {
  const { t } = useLanguage();

  const [currentStage, setCurrentStage] = useState<Stage>("tour");
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const [selectedTransport, setSelectedTransport] = useState<
    "plane" | "train" | null
  >(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const availableTours = [
    { id: "1", name: t("tour_name_issyk_kul"), price: 250 },
    { id: "2", name: t("tour_name_han_tengri"), price: 400 },
    { id: "3", name: t("tour_name_song_kul"), price: 180 },
  ];

  const handleTourSelect = (tourId: string) => {
    const tour = availableTours.find((t) => t.id === tourId);
    if (tour) {
      setSelectedTour(tour.name);
      setCurrentStage("transport");
    }
  };

  const handleTransportSelect = (transport: "plane" | "train") => {
    setSelectedTransport(transport);
    setCurrentStage("seat");
  };

  const handlePurchaseComplete = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentStage("checkout");
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <div className="tickets-page-con">
      <h2 className="page-title">{t("tickets_page_title")}</h2>

      <div className="booking-process-con status-card-glass">
        {currentStage === "tour" && (
          <TourSelection tours={availableTours} onSelect={handleTourSelect} />
        )}

        {currentStage === "transport" && (
          <TransportSelection
            onSelect={handleTransportSelect}
            selectedTour={selectedTour}
          />
        )}

        {currentStage === "seat" && (
          <SeatSelection
            transportType={selectedTransport!}
            onComplete={handlePurchaseComplete}
            isAnimating={isAnimating}
          />
        )}

        {currentStage === "checkout" && (
          <div className="checkout-message">
            <h3>{t("checkout_title")}</h3>
            <p>
              {t("checkout_message_prefix")} {selectedTour}{" "}
              {t("checkout_message_suffix")}
            </p>
            <button onClick={() => setCurrentStage("tour")}>
              {t("checkout_new_booking_btn")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
