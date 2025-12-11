import type { JSX } from "react";
import "./QuickBookingForm.css";

export default function QuickBookingForm(): JSX.Element {
  return (
    <div className="quick-booking-form">
      <h2>Быстрое Бронирование</h2>

      <form>
        <div className="form-group">
          <label htmlFor="destination">Куда</label>
          <select id="destination" name="destination">
            <option value="">Выберите направление</option>
            <option value="issyk_kul">Иссык-Куль</option>
            <option value="ala_archa">Ала-Арча</option>
            <option value="song_kul">Сон-Куль</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Дата</label>
          <input type="date" id="date" name="date" />
        </div>

        <div className="form-group">
          <label htmlFor="people">Кол-во человек</label>
          <input
            type="number"
            id="people"
            name="people"
            min="1"
            defaultValue="2"
          />
        </div>

        <button type="submit" className="booking-submit-btn">
          Найти Туры
        </button>
      </form>
    </div>
  );
}
