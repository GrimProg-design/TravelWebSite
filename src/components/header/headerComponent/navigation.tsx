import type { JSX } from "react";
import "../headerStyle/navigation.css"

export default function Navigation(): JSX.Element {
  return (
    <nav>
      <p>Главная</p>
      <p>Статус поездки</p>
      <p>Купить билеты</p>
      <p>Места</p>
    </nav>
  );
}
