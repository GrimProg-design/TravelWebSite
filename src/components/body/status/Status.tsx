import type { JSX } from "react";
import SparklingProgressBar from "./SparklingProgressBar.tsx";
import "./Status.css"
import { useLanguage } from "../../../contexts/LanguageContext";

export default function Status(): JSX.Element {
  const { t } = useLanguage();

  const bookingDetails = {
    destination: t('status_mock_destination'),
    date: t('status_mock_date'),
    participants: 4,
    guide: t('status_mock_guide'),
    timeRemaining: 75,
  };

  return (
    <div className="status-page-con">
      <h2 className="page-title">{t('status_page_title')}</h2>

      <div className="status-card-glass">
        <h3 className="card-header-title">{t('status_card_header')}</h3>

        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">{t('status_label_dest')}</span>
            <p className="info-value destination-name">
              {bookingDetails.destination}
            </p>
          </div>

          <div className="info-item">
            <span className="info-label">{t('status_label_date')}</span>
            <p className="info-value date-value">{bookingDetails.date}</p>
          </div>

          <div className="info-item">
            <span className="info-label">{t('status_label_participants')}</span>
            <p className="info-value">{bookingDetails.participants} {t('status_mock_participants_suffix')}</p>
          </div>

          <div className="info-item">
            <span className="info-label">{t('status_label_guide')}</span>
            <p className="info-value guide-name">{bookingDetails.guide}</p>
          </div>
        </div>

        <hr className="divider" />

        <div className="progress-section">
          <span className="progress-label">{t('status_label_time_remaining')}</span>
          <SparklingProgressBar progress={bookingDetails.timeRemaining} />
          <p className="progress-text">
            {t('status_progress_text_part1')} {100 - bookingDetails.timeRemaining}% {t('status_progress_text_part2')}
          </p>
        </div>

        <button className="download-btn">{t('status_download_btn')}</button>
      </div>
    </div>
  );
}