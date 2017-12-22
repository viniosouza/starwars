import { PLANETS, PLANETS_FAILED } from "../constants/ActionTypes";

const initialState = {
  error: false
};

export default function planetsReducer(state = initialState, action) {
  switch (action.type) {
    case PLANETS:
      return {
        ...state,
        data: action.payload
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
