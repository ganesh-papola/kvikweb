import * as TYPE from "../constants";
import ApiClient from "../../api-client";
import { apiUrl } from "../../environment";
import { toastAction } from "../toast-actions";

export const is_fetching = status => ({ type: TYPE.IS_FETCHING, status });
export const about_us = data => ({ type: TYPE.ABOUT_US, data });
// export const is_fetching = status => ({ type: TYPE.IS_FETCHING, status });

/****** action creator for list users cpmpleted job ********/
export const contactUs = (params, callback) => {
  return (dispatch, getState) => {
    const {
      data: { token }
    } = getState().user;
    ApiClient.delete(`${apiUrl}/contact-us}`, params, token).then(response => {
      if (response.status === 200) {
        console.log("response: ", response);
        callback(true);
        toastAction(true, response.msg);
      } else if (response.status === 401) {
        console.log("errror with 401 : ");
        callback(false);
        toastAction(false, response.msg);
      } else {
        dispatch(is_fetching(false));
      }
    });
  };
};

/****** action creator for get the about us details ********/
export const getCustomPageDetails = (page_name, callback) => {
  console.log("page_name:", page_name);

  return (dispatch, getState) => {
    const {
      data: { token }
    } = getState().user;
    ApiClient.fetch(`${apiUrl}/content/${page_name}`).then(response => {
      console.log("response:", response);

      if (response.status === 200) {
        console.log("response: ", response);
        callback(true);
        toastAction(true, response.msg);
        dispatch(about_us(response.data));
      } else if (response.status === 401) {
        console.log("errror with 401 : ");
        callback(false);
        toastAction(false, response.msg);
      } else {
        dispatch(is_fetching(false));
      }
    });
  };
};