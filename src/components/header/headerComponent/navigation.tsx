import type { JSX } from "react";
import { useLocation } from "react-router-dom";
import "../headerStyle/navigation.css";
import Buttons from "./Buttons";

import { useLanguage } from "../../../contexts/useLanguage";
import type { TranslationKeys } from "../../../i18n/translations";

interface NavLink {
  path: string;
  textKey: TranslationKeys;
}

const navLinks: NavLink[] = [
  { path: "/", textKey: "home_link" },
  { path: "/status", textKey: "status_link" },
  { path: "/bilets", textKey: "tickets_link" },
  { path: "/places", textKey: "places_link" },
];

export default function Navigation(): JSX.Element {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <nav>
      {navLinks.map((link) => (
        <Buttons
          key={link.path}
          path={link.path}
          text={t(link.textKey)}
          isActive={location.pathname === link.path}
        />
      ))}
    </nav>
  );
}
