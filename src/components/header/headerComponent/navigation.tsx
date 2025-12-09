import type { JSX } from "react";
import "../headerStyle/navigation.css"
import Buttons from "./Buttons";

export default function Navigation(): JSX.Element {
  return (
    <nav>
      <Buttons path="/" text="Главная"/>
      <Buttons path="/status" text="Статус поездки"/>
      <Buttons path="/bilets" text="Купить билеты"/>
      <Buttons path="/places" text="Места"/>
    </nav>
  );
}
