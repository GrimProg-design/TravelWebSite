import type { JSX } from "react";

export default function BurgerMenu({ toggleMenu }: { toggleMenu: () => void }): JSX.Element {
  return (
      <div 
        className={`burger-menu`}
        onClick={toggleMenu}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
  );
}
