import * as TYPE from "../constants";
import ApiClient from "../../api-client";
import { apiUrl } from "../../environment";
import { toastAction, toastErrorAction } from "../toast-actions";
import { pagination } from "../../utilities/constants";

export const bid_list = data => ({ type: TYPE.BID_LIST, data });
export const bid_details = data => ({ type: TYPE.BID_DETAILS, data });
export const get_active_bid = data => ({ type: TYPE.GET_ACTIVE_BID, data });
export const get_completed_bid = data => ({ type: TYPE.GET_COMPLETED_BID, data });
export const user_job_details = data => ({ type: TYPE.USER_JOB_DETAILS, data });

/****** action creator for register users ********/
export const getBidList = (params, callback) => {
    return dispatch => {
        ApiClient.post(`${apiUrl}/register`, params).then(response => {
            if (response.status === 200) {
                dispatch(bid_list(response));
            } else {
                console.log("errror with 401 : ", response);
                toastErrorAction(dispatch, response.msg);
            }
        });
    };
};


/****** action creator for register users ********/
export const getUserBidDetails = (params, callback) => {
    return dispatch => {
        ApiClient.post(`${apiUrl}/bid/user_job_detail`, params).then(response => {
            if (response.status === 200) {
                dispatch(bid_details(response));
            } else {
                console.log("errror with 401 : ", response);
                toastErrorAction(dispatch, response.msg);
            }
        });
    };
};

/****** action creator for list users cpmpleted bid ********/
export const getUserCompletedBid = ({
    page,
    search = "",
    long = "",
    lat = "",
    category = ""
}) => {
    return (dispatch, getState) => {
        const skip = (page - 1) * pagination.limit;
        const {
            data: { token }
        } = getState().user;
        ApiClient.get(
            `${apiUrl}/api/user_completed_bid?lat=${lat}&long=${long}&category=${category}&skip=${skip}&limit=${pagination.limit}&search=${search}`, {},
            token
        ).then(response => {
            if (response.status === 200) {
                dispatch(get_completed_bid(response.data));
            } else if (response.status === 401) {
                console.log("errror with 401 : ");
                toastErrorAction(dispatch, response.msg);
            } else {
            }
        });
    };
}

/****** action creator for list users active bid ********/
export const getUserActiveBid = ({
    page,
    search = "",
    long = "",
    lat = "",
    category = ""
}) => {
    return (dispatch, getState) => {
        const skip = (page - 1) * pagination.limit;
        const {
            data: { token }
        } = getState().user;

        ApiClient.get(
            `${apiUrl}/api/user_active_bid?lat=${lat}&long=${long}&category=${category}&skip=${skip}&limit=${pagination.limit}&search=${search}`,
            {}, token
        ).then(response => {
            if (response.status === 200) {
                dispatch(get_active_bid(response.data));
            } else if (response.status === 401) {
                console.log("errror with 401 : ");
                toastErrorAction(dispatch, response.msg);
            } else {
            }
        });
    };
}


/****** action creator for get user bid details ********/
export const getUserJobDetails = (params) => {
    return (dispatch, getState) => {
        const {
            data: { token }
        } = getState().user;

        ApiClient.get(`${apiUrl}/bid/user_job_detail`, params, token).then(response => {
            if (response.status === 200) {
                dispatch(user_job_details(response.data));
            } else if (response.status === 401) {
                console.log("errror with 401 : ");
                toastErrorAction(dispatch, response.msg);
            } else {
            }
        });
    };
}

