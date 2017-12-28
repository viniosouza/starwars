import React, { Component } from "react";
import People from "../components/People/People";
import * as PeopleActions from "../actions/PeopleActions";
import { connect } from "react-redux";

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.dispatch(PeopleActions.peopleList());
  }
  render() {
    return <People people={this.props.people} />;
  }
}
function mapStateToProps(state) {
  return {
    people: state.people.results
  };
}
export default connect(mapStateToProps)(PeopleContainer);
