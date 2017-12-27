import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/star_wars_logo.png";
import "./styles/Logo.scss";

function LogoStar() {
  return (
    <Link to="/">
      <img src={Logo} className="Logo" alt="Home" />
    </Link>
  );
}

export default LogoStar;
