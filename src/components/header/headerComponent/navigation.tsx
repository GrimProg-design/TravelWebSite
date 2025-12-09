import type { JSX } from "react";
import { useLocation } from "react-router-dom";
import "../headerStyle/navigation.css"
import Buttons from "./Buttons";

const navLinks = [
  { path: "/", text: "Главная" },
  { path: "/status", text: "Статус поездки" },
  { path: "/bilets", text: "Купить билеты" },
  { path: "/places", text: "Места" },
];

export default function Navigation(): JSX.Element {
  const location = useLocation(); 

  return (
    <nav>
      {navLinks.map((link) => (
        <Buttons
          key={link.path}
          path={link.path}
          text={link.text}
          isActive={location.pathname === link.path}
        />
      ))}
    </nav>
  );
}