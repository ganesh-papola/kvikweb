/*
 * @file: messages.js
 * @description: It is Container home screen .
 * @author: smartData
 */
import React from "react";
import { getTranslations } from "../../../../utilities/translations";

const Users = ({ rooms, setRoomId, _handlePageChange }) => {
  return rooms.length > 0 ? (
    <React.Fragment>
      <div className="message-main">
        <ul className="pad0">
          {rooms.map((val, index) => (
            <li key={index}>
              <span className="message-name">
                <i className="fa fa-circle" aria-hidden="true"></i>
                {`${val &&
                  val.user &&
                  val.user.userId &&
                  val.user.userId.firstName} ${val &&
                  val.user &&
                  val.user.userId &&
                  val.user.userId.lastName}`}
              </span>
              <button
                onClick={() =>
                  setRoomId(
                    val._id,
                    val &&
                      val.user &&
                      val.user.userId &&
                      val.user.userId.firstName
                  )
                }
                className="btn-transparent"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
      <div className="pull-right pagination-wrap d-md-flex justify-content-md-end align-items-md-center"></div>
    </React.Fragment>
  ) : (
    <p className="text-center">{getTranslations("no_msg")}</p>
  );
};

export default Users;
