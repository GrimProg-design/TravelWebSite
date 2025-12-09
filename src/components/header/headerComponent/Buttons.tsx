import type { JSX } from "react";
import { Link } from "react-router-dom";

interface ButtonsProps {
  path: string;
  text: string;
  isActive: boolean; 
}

export default function Buttons({ path, text, isActive }: ButtonsProps): JSX.Element {
  return (
    <Link 
      to={path} 
      className={isActive ? 'active-link' : ''}
    >
      {text}
    </Link>
  );
}