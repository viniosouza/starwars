import { PEOPLE } from "../constants/ActionTypes";
const initialState = {
  results: []
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case PEOPLE:
      return {
        ...state,
        data: action.payload,
        results: action.payload.results
      };
    default:
      return state;
  }
}
