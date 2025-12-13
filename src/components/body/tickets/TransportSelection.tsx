import type { JSX } from "react";
import "./TransportSelection.css";
import { useLanguage } from "../../../contexts/useLanguage";

interface TransportSelectionProps {
  onSelect: (transport: "plane" | "train") => void;
  selectedTour: string | null;
}

export default function TransportSelection({
  onSelect,
  selectedTour,
}: TransportSelectionProps): JSX.Element {
  const { t } = useLanguage();

  return (
    <div className="transport-selection-con">
      <h3 className="stage-header">{t("transport_stage_header")}</h3>
      <p className="tour-summary">
        {t("transport_summary_prefix")}{" "}
        <span className="highlight-summary">{selectedTour}</span>
      </p>

      <div className="transport-options">
        <div
          className="transport-option plane-option"
          onClick={() => onSelect("plane")}
        >
          <span className="icon">✈️</span>
          <h4>{t("transport_plane_title")}</h4>
          <p>{t("transport_plane_desc")}</p>
        </div>

        <div
          className="transport-option train-option"
          onClick={() => onSelect("train")}
        >
          <span className="icon">🚂</span>
          <h4>{t("transport_train_title")}</h4>
          <p>{t("transport_train_desc")}</p>
        </div>
      </div>

      <p className="warning-text">{t("transport_warning")}</p>
    </div>
  );
}
