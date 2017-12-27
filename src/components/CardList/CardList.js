import React, { Component } from "react";
import "./styles/CardList.scss";
class CardList extends Component {
  render() {
    return (
      <div className="Card">
        <img
          className="Card-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png"
          alt="starwars"
        />
        <div className="Card-Container">
          <h4> {this.props.name}</h4>
          <p>
            {this.props.population ? this.props.population : this.props.height}
          </p>
        </div>
      </div>
    );
  }
}
export default CardList;
