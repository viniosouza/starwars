import * as Endpoint from "../constants/Endpoint";
import axios from "axios";
import { PEOPLE } from "../constants/ActionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

//People list
const rand = Math.floor(Math.random() * 8 + 1);
console.log(rand);
export const peopleList = () => dispatch =>
  axios
    .get(`${Endpoint.ENDPOINT_URL}/people/?page=${rand}`, config)
    .then(response =>
      dispatch({
        type: PEOPLE,
        payload: response.data
      })
    );
