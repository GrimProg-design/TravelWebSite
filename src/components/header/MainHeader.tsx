import type { JSX } from "react";
import "./Header.css";
import Navigation from "./headerComponent/Navigation";
import BurgerMenu from "./headerComponent/BurgerMenu";

export default function Header(): JSX.Element {
  return (
    <header className="header-con">
      <h1>Tour.KG</h1>
      <Navigation />
      <BurgerMenu />
    </header>
  );
}
