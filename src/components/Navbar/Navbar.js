import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        {/* <Logo /> */}
        <ul className="Navbar-list">
          <Link to="">
            <li>Home</li>
          </Link>
          <Link to="/people" onClick={() => window.reload()}>
            <li>Characteres</li>
          </Link>
          <Link to="/planets" onClick={() => window.reload()}>
            <li>Planets</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
