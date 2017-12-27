import React, { Component } from "react";
import CardList from "../CardList/CardList";
import "./styles/People.scss";

class People extends Component {
  render() {
    return (
      <div className="People">
        <h1>People</h1>
        {this.props.people.map(people => {
          return <CardList key={people.id} {...people} />;
        })}
      </div>
    );
  }
}
export default People;
