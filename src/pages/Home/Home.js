import React, { PureComponent } from "react";
import "./styles/Home.scss";
import * as PlanetsActions from "../../actions/PlanetsActions";
import * as PeopleActions from "../../actions/PeopleActions";

class Home extends PureComponent {
  render() {
    return (
      <section className="Home">
        <div className="container">
          <div className="lists" />
        </div>
      </section>
    );
  }
}
export default Home;
