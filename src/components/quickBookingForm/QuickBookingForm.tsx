import type { JSX } from "react";
import "./QuickBookingForm.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

export default function QuickBookingForm(): JSX.Element {
  const { t } = useLanguage();

  return (
    <div className="quick-booking-form">
      <h2>{t("booking_title")}</h2>

      <form>
        <div className="form-group">
          <label htmlFor="destination">{t("booking_label_dest")}</label>
          <select id="destination" name="destination">
            <option value="">{t("booking_placeholder_select")}</option>
            <option value="issyk_kul">{t("booking_option_issyk_kul")}</option>
            <option value="ala_archa">{t("booking_option_ala_archa")}</option>
            <option value="song_kul">{t("booking_option_song_kul")}</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">{t("booking_label_date")}</label>
          <input type="date" id="date" name="date" />
        </div>

        <div className="form-group">
          <label htmlFor="people">{t("booking_label_people")}</label>
          <input
            type="number"
            id="people"
            name="people"
            min="1"
            defaultValue="2"
          />
        </div>

        <Link className="submit-btn" to="/places">
          <button type="submit" className="booking-submit-btn">
            {t("booking_btn_find")}
          </button>
        </Link>
      </form>
    </div>
  );
}
