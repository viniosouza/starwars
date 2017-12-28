import { PLANETS } from "../constants/ActionTypes";

const initialState = {
  results: []
};

export default function planetsReducer(state = initialState, action) {
  switch (action.type) {
    case PLANETS:
      return {
        ...state,
        data: action.payload,
        results: action.payload.results
      };
    default:
      return state;
  }
}
