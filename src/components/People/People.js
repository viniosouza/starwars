import React from "react";
import CardList from "../CardList/CardList";
import "./styles/People.scss";

function People(props) {
  return (
    <div className="People">
      <h1 className="People-title">People</h1>
      {props.people.map(people => {
        return <CardList key={people.id} {...people} />;
      })}
    </div>
  );
}

export default People;
