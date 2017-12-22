import * as Endpoint from "../constants/Endpoint";
import axios from "axios";
import { PLANETS, PLANETS_FAILED } from "../constants/ActionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

//Planets list
export const planetsList = () => dispatch =>
  axios
    .get(`${Endpoint.ENDPOINT_URL}/planets`, config)
    .then(response =>
      dispatch({
        type: PLANETS,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({
        type: PLANETS_FAILED,
        payload: error
      })
    );
