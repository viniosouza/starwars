import React, { PureComponent } from "react";
import "./styles/Home.css";
import * as PlanetsActions from "../../actions/PlanetsActions";
import * as PeopleActions from "../../actions/PeopleActions";

class Home extends PureComponent {
  componentDidMount() {
    this.props.dispatch(PlanetsActions.planetsList());
    this.props.dispatch(PeopleActions.peopleList());
  }
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
