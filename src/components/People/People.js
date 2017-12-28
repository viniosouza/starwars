import React from "react";
import CardList from "../CardList/CardList";
import "./styles/People.scss";
import load from "../../img/load.png";

function People(props) {
  if(props.people.length > 0){
  return (
    <div className="People">
      <h1 className="People-title">People</h1>
      {props.people.map(people => {
        return <CardList key={people.id} {...people} />;
      })}
    </div>
  );
}
return(
  <div className="People-Container">
  <img className="People-Load-Img" src={load} alt="loading" />
  <h1 className="People-title">loading...</h1>
</div>
);
}

export default People;
