import * as Endpoint from "../constants/Endpoint";
import axios from "axios";
import { PLANETS } from "../constants/ActionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

//Planets list
const rand = Math.floor(Math.random() * 6 + 1);
export const planetsList = () => dispatch =>
  axios
    .get(`${Endpoint.ENDPOINT_URL}/planets/?page=${rand}`, config)
    .then(response =>
      dispatch({
        type: PLANETS,
        payload: response.data
      })
    );
