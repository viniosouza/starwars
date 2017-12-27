import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
import Logo from "../Logo/LogoStar";
class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        {/* <Logo /> */}
        <ul className="Navbar-list">
          <Link to="">
            <li>Home</li>
          </Link>
          <Link to="/people">
            <li>Characteres</li>
          </Link>
          <Link to="/planets">
            <li>Planets</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
