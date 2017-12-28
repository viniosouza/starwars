import React from "react";
import CardList from "../CardList/CardList";
import "./styles/Planets.scss";
import load from "../../img/Master_Yoda.png";

function Planets(props) {
  if (props.planets.length > 0) {
    return (
      <div className="Planets">
        <h1 className="Planets-Title">Planets</h1>
        {props.planets.map(planet => {
          return <CardList key={planet.id} {...planet} />;
        })}
      </div>
    );
  }
  return (
    <div className="Planets-Container">
      <img className="Planets-Load-Img" src={load} alt="loading" />
      <h1 className="Planets-Title">loading...</h1>
    </div>
  );
}
export default Planets;
