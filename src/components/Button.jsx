import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

function Button({text, link}) {
  return (
    <Link
      to={link}
      className="flex gap-1"
    >
      <div className="text bg-secondary text-xl px-4 leading-[44px] rounded-[50px]">{text}</div>
      <Arrow customClass="bg-secondary -rotate-45"/>
    </Link>
  );
}

export default Button;
