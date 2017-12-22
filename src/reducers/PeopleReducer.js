import { PEOPLE, PEOPLE_FAILED } from "../constants/ActionTypes";
const initialState = {
  error: false
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case PEOPLE:
      return {
        ...state,
        data: action.payload
      };
    case PEOPLE_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}