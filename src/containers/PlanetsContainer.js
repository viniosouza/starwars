import React, { Component } from "react";
import { connect } from "react-redux";
import Planets from "../components/Planets";
import * as PlanetsActions from "../actions/PlanetsActions";

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(PlanetsActions.planetsList());
  }
  render() {
    return <Planets planets={this.props.planets} />;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    planets: state.planets.results
  };
}
export default connect(mapStateToProps)(PlanetsContainer);
