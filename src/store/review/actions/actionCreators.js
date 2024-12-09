/* eslint-disable no-unused-vars */
import { Toast } from "react-bootstrap";
import * as actionTypes from "./actionTypes";
import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;
export const getReviews = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });
  try {
    const response = await axios.post(`${API_URL}api/v1/review/get-reviews`, data)
    dispatch({
      type: actionTypes.REVIEWS_DATA,
      payload: response.data,
    });
  } catch (error) {
    console.log(error)
  } finally {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: false,
    });
  }
};

