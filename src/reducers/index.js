import PeopleReducer from "./PeopleReducer";
import PlanetsReducer from "./PlanetsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  people: PeopleReducer,
  planets: PlanetsReducer
});
