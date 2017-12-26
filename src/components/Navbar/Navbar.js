import React, { Component } from "react";
import './styles/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul className="Navbar-list">
          <li>Characteres</li>
          <li>Planets</li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
