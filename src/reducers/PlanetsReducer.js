import { PLANETS, PLANETS_FAILED } from "../constants/ActionTypes";

const initialState = {
  error: false,
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
    case PLANETS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
