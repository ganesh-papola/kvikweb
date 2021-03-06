/*
 * @file: home.js
 * @description: Reducers and actions for store/manipulate user's  data
 * @author: smartData
 */

import * as TYPE from "../../actions/constants";

/******** Reducers ********/
const initialState = {
  list: [],
  activeBid: [],
  completedBid: [],
  userJobDetails: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.GET_ACTIVE_BID:
      return {
        ...state,
        activeBid: action.data,
        count: 10
      };
    case TYPE.GET_COMPLETED_BID:
      return {
        ...state,
        completedBid: action.data,
        count: 10
      };
    case TYPE.USER_JOB_DETAILS:
      return {
        ...state,
        userJobDetails: action.data
      };
    case TYPE.RESET_USER_JOB_DETAILS:
      return {
        ...state,
        userJobDetails: {}
      };
    case TYPE.APPROVED_BID_WORK:
      return {
        ...state,
        userJobDetails: {}
      };
    case TYPE.LOGOUT_USERS:
      return initialState;
    default:
      return state;
  }
}
