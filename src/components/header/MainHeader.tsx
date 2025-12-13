import type { JSX } from "react";
import "./Header.css";
import Navigation from "./headerComponent/Navigation.tsx";
import BurgerMenu from "./headerComponent/BurgerMenu.tsx";

export default function Header({ toggleMenu }: { toggleMenu: () => void }): JSX.Element {
  return (
    <header className="header-con">
      <h1>Tour.KG</h1>
      <Navigation />
      <BurgerMenu toggleMenu={toggleMenu} /> 
    </header>
  );
}
