import React, { Component } from "react";
import CardList from "../CardList/CardList";
import "./styles/Planets.scss";
import PaginationAnt from "../Pagination/PaginationAnt";

class Planets extends Component {
  render() {
    return (
      <div className="Planets">
        <h1>Planets</h1>
        {this.props.planets.map(planet => {
          return <CardList key={planet.id} {...planet} />;
        })}
        <PaginationAnt />
      </div>
    );
  }
}
export default Planets;
