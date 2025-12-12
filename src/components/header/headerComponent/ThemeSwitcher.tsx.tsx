import { useState } from "react";

export default function ThemeSwitcher() {
  const [rating, setRating] = useState(0);

  return (
    <div className="theme-switcher">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`star ${num <= rating ? "active" : ""}`}
            onClick={() => setRating(num)}
          ></div>
        ))}
      </div>
    </div>
  );
}

