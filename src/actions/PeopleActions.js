import * as Endpoint from "../constants/Endpoint";
import axios from "axios";
import { PEOPLE, PEOPLE_FAILED } from "../constants/ActionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

//People list
export const peopleList = () => dispatch =>
  axios
    .get(`${Endpoint.ENDPOINT_URL}/people`, config)
    .then(response =>
      dispatch({
        type: PEOPLE,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({
        type: PEOPLE_FAILED,
        payload: error
      })
    );
