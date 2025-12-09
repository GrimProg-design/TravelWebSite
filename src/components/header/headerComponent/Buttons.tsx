import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function Buttons({ path, text }): JSX.Element {
  return <Link to={path}>{text}</Link>;
}
