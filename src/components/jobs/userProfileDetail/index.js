import React, { useState } from "react";
import { Button, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm } from "react-redux-form";
import JobAddress from "../jobDetail/JobAddress/jobAddress";
import UserInfo from "../bidderProfile/userInfo/userInfo";
import InputCell from "../../commonUi/input/inputCell";
import UserImage from "../jobDetail/userImage/userImage";
import "./userProfileDetail.scss";
const UserProfile = ({ path, user, _handleSubmit }) => {
  const [cardType, setCardType] = useState();

  return (
    <div className="data-page user-profl-blc">
      <div className="d-flex user-profl-blc-rw">
        <div className="user-profl-col flex-fill">
          <div className="user-profl-rw d-flex">
            <div className="user-profl-l flex-fill">
              <LocalForm onSubmit={values => _handleSubmit(values)}>
                {path ? (
                  <JobAddress job_seeker_id={user} />
                ) : (
                  <>
                    <div
                      className={`job-address peace d-flex ${
                        !path ? "editMode" : ""
                      }`}
                    >
                      <UserImage />
                      <div className="job-user-info flex-fill">
                        <div className="edit-profile-blc">
                          <Label>Address</Label>
                          <InputCell
                            Name={"address"}
                            Placeholder={"Card Number"}
                            Model=".address"
                            InputType={"text"}
                            className="input-line-blc"
                            Errors={{ required: "required" }}
                          />
                          <Label>Email</Label>
                          <InputCell
                            Name={"email"}
                            Placeholder={"Card Number"}
                            Model=".email"
                            InputType={"text"}
                            className="input-line-blc"
                            Errors={{ required: "required" }}
                          />
                          <Label>Phone</Label>
                          <InputCell
                            Name={"phone"}
                            Placeholder={"Card Number"}
                            Model=".phone"
                            InputType={"text"}
                            className="input-line-blc"
                            Errors={{ required: "required" }}
                          />
                          <Label>About Me </Label>
                          <InputCell
                            Name={"aboutme"}
                            Placeholder={"Card Number"}
                            Model=".aboutme"
                            InputType={"textarea"}
                            className="input-line-blc"
                            Errors={{ required: "required" }}
                          />
                        </div>
                        <div className="edit-profile-btns">
                          <Button color="secondary" type="submit">
                            Submit
                          </Button>
                          <Button
                            color="link"
                            className="btn-dark cancel"
                            type="button"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </LocalForm>
            </div>
            {path && (
              <div className="user-profl-edit flex-shrink-0">
                <Link className="btn btn-link" to={"/edit-profile"}>
                  <Button color="link" className="edit-btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19.446"
                        height="19.435"
                        viewBox="0 0 19.446 19.435"
                      >
                        <path
                          id="edit"
                          d="M18.987,1.513a4.29,4.29,0,0,0-6.07,0L1.788,12.633a.556.556,0,0,0-.157.319l-.825,6.1a.555.555,0,0,0,.157.468.566.566,0,0,0,.394.166.452.452,0,0,0,.075,0l3.679-.5a.56.56,0,1,0-.149-1.11l-2.95.4.576-4.258L7.071,18.7a.566.566,0,0,0,.394.166.549.549,0,0,0,.394-.166L18.987,7.58a4.283,4.283,0,0,0,0-6.067ZM13.132,2.88,15,4.748,4.846,14.9,2.977,13.031ZM7.468,17.516,5.641,15.69,15.8,5.539l1.827,1.826ZM18.4,6.566,13.932,2.1A3.175,3.175,0,0,1,18.4,6.566Z"
                          transform="translate(-0.8 -0.255)"
                          fill="#9d9d9d"
                        />
                      </svg>
                    </span>
                    <label className="text-secondary mb-0">Edit</label>
                  </Button>
                </Link>
              </div>
            )}
          </div>
          {path && <UserInfo handleSsubmit={_handleSubmit} />}
        </div>

        <div className="user-profl-col-r">
          <h2>Add Card</h2>
          <div className="user-cards-rw">
            <div className="card-chip">
              <div className="card-chip-hd text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44.679"
                  height="25"
                  viewBox="0 0 44.679 25"
                >
                  <g
                    id="Group_8125"
                    data-name="Group 8125"
                    transform="translate(-1139.321 -235)"
                  >
                    <g
                      id="Group_8055"
                      data-name="Group 8055"
                      transform="translate(1139.321 235.032)"
                    >
                      <path
                        id="Path_3530"
                        data-name="Path 3530"
                        d="M305.717,156.524a12.314,12.314,0,1,1,0-16.421"
                        transform="translate(-284.224 -136)"
                        fill="#eb001b"
                      />
                    </g>
                    <g
                      id="Group_8056"
                      data-name="Group 8056"
                      transform="translate(1159 235)"
                    >
                      <circle
                        id="Ellipse_369"
                        data-name="Ellipse 369"
                        cx="12.5"
                        cy="12.5"
                        r="12.5"
                        fill="#ffd100"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="card-chip-no">
                <span>1234</span>
                <span>5678</span>
                <span>
                  125<span className="grey-digit">X</span>
                </span>
                <span className="last-digit grey-digit">XXXX</span>
              </div>
              <div className="card-chip-btm d-flex">
                <div className="card-chip-col flex-fill">
                  <h2>CARDHOLDER NAME</h2>
                  <h3>NAME SURNAME</h3>
                </div>
                <div className="card-chip-col rt">
                  <h2>VALID THRU</h2>
                  <h3 className="mb-0">MM/YY</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="user-cards-rw card-detail">
            <h2>Type your card details</h2>
            <LocalForm>
              <ul className="card-detail-item">
                <li>
                  <Label>Card Number</Label>
                  <InputCell
                    Name={"cardnumber1"}
                    Placeholder={"Card Number"}
                    Model=".cardnumber1"
                    InputType={"text"}
                    ClassName="input-line-blc"
                    Errors={{ required: "required" }}
                  />
                </li>
                <li>
                  <Label>Card Number</Label>
                  <InputCell
                    Name={"cardnumber2"}
                    Placeholder={"Card Number"}
                    Model=".cardnumber2"
                    InputType={"text"}
                    ClassName="input-line-blc"
                    Errors={{ required: "required" }}
                  />
                </li>
                <li>
                  <Label>Card Number</Label>
                  <InputCell
                    Name={"cardnumber3"}
                    Placeholder={"Card Number"}
                    Model=".cardnumber3"
                    InputType={"text"}
                    ClassName="input-line-blc"
                    Errors={{ required: "required" }}
                  />
                </li>
              </ul>
              <div className="card-detail-btn text-center">
                <Button color="secondary">Make Payment</Button>
              </div>
            </LocalForm>
          </div>
          <div className="user-cards-rw">
            <div className="user-cards">
              <span className="d-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59.434"
                  height="39.623"
                  viewBox="0 0 59.434 39.623"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#fd752e" />
                      <stop offset="1" stop-color="#ffbf2b" />
                    </linearGradient>
                  </defs>
                  <g id="credit-card" transform="translate(0 0)">
                    <g
                      id="Group_8031"
                      data-name="Group 8031"
                      transform="translate(0 0)"
                    >
                      <g id="Group_8030" data-name="Group 8030">
                        <path
                          id="Path_3493"
                          data-name="Path 3493"
                          d="M53.243,85.333H6.191A6.2,6.2,0,0,0,0,91.524v27.241a6.2,6.2,0,0,0,6.191,6.191H53.243a6.2,6.2,0,0,0,6.191-6.191V91.524A6.2,6.2,0,0,0,53.243,85.333Zm3.715,33.432a3.719,3.719,0,0,1-3.715,3.715H6.191a3.719,3.719,0,0,1-3.715-3.715V91.524a3.719,3.719,0,0,1,3.715-3.715H53.243a3.719,3.719,0,0,1,3.715,3.715v27.24Z"
                          transform="translate(0 -85.333)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8033"
                      data-name="Group 8033"
                      transform="translate(0 7.429)"
                    >
                      <g id="Group_8032" data-name="Group 8032">
                        <path
                          id="Path_3494"
                          data-name="Path 3494"
                          d="M58.2,149.333H1.238A1.239,1.239,0,0,0,0,150.571V158a1.239,1.239,0,0,0,1.238,1.238H58.2A1.239,1.239,0,0,0,59.434,158v-7.429A1.239,1.239,0,0,0,58.2,149.333Zm-1.238,7.429H2.476v-4.953H56.957v4.953Z"
                          transform="translate(0 -149.333)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8035"
                      data-name="Group 8035"
                      transform="translate(7.429 24.764)"
                    >
                      <g id="Group_8034" data-name="Group 8034">
                        <path
                          id="Path_3495"
                          data-name="Path 3495"
                          d="M80.1,298.667H65.238a1.238,1.238,0,1,0,0,2.476H80.1a1.238,1.238,0,1,0,0-2.476Z"
                          transform="translate(-64 -298.667)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8037"
                      data-name="Group 8037"
                      transform="translate(7.429 29.717)"
                    >
                      <g id="Group_8036" data-name="Group 8036">
                        <path
                          id="Path_3496"
                          data-name="Path 3496"
                          d="M80.1,341.333H65.238a1.238,1.238,0,0,0,0,2.477H80.1a1.238,1.238,0,0,0,0-2.477Z"
                          transform="translate(-64 -341.333)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8039"
                      data-name="Group 8039"
                      transform="translate(42.099 22.288)"
                    >
                      <g id="Group_8038" data-name="Group 8038">
                        <path
                          id="Path_3497"
                          data-name="Path 3497"
                          d="M368.858,277.333h-2.476a3.719,3.719,0,0,0-3.715,3.715v2.476a3.719,3.719,0,0,0,3.715,3.715h2.476a3.719,3.719,0,0,0,3.715-3.715v-2.476A3.719,3.719,0,0,0,368.858,277.333Zm1.238,6.191a1.239,1.239,0,0,1-1.238,1.238h-2.476a1.239,1.239,0,0,1-1.238-1.238v-2.476a1.239,1.239,0,0,1,1.238-1.238h2.476a1.239,1.239,0,0,1,1.238,1.238Z"
                          transform="translate(-362.667 -277.333)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <label>Debit Card</label>
            </div>
          </div>
          <div className="user-cards-rw">
            <div className="user-cards">
              <span className="d-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59.434"
                  height="39.623"
                  viewBox="0 0 59.434 39.623"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#fd752e" />
                      <stop offset="1" stop-color="#ffbf2b" />
                    </linearGradient>
                  </defs>
                  <g id="credit-card" transform="translate(0 0)">
                    <g
                      id="Group_8031"
                      data-name="Group 8031"
                      transform="translate(0 0)"
                    >
                      <g id="Group_8030" data-name="Group 8030">
                        <path
                          id="Path_3493"
                          data-name="Path 3493"
                          d="M53.243,85.333H6.191A6.2,6.2,0,0,0,0,91.524v27.241a6.2,6.2,0,0,0,6.191,6.191H53.243a6.2,6.2,0,0,0,6.191-6.191V91.524A6.2,6.2,0,0,0,53.243,85.333Zm3.715,33.432a3.719,3.719,0,0,1-3.715,3.715H6.191a3.719,3.719,0,0,1-3.715-3.715V91.524a3.719,3.719,0,0,1,3.715-3.715H53.243a3.719,3.719,0,0,1,3.715,3.715v27.24Z"
                          transform="translate(0 -85.333)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8033"
                      data-name="Group 8033"
                      transform="translate(0 7.429)"
                    >
                      <g id="Group_8032" data-name="Group 8032">
                        <path
                          id="Path_3494"
                          data-name="Path 3494"
                          d="M58.2,149.333H1.238A1.239,1.239,0,0,0,0,150.571V158a1.239,1.239,0,0,0,1.238,1.238H58.2A1.239,1.239,0,0,0,59.434,158v-7.429A1.239,1.239,0,0,0,58.2,149.333Zm-1.238,7.429H2.476v-4.953H56.957v4.953Z"
                          transform="translate(0 -149.333)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8035"
                      data-name="Group 8035"
                      transform="translate(7.429 24.764)"
                    >
                      <g id="Group_8034" data-name="Group 8034">
                        <path
                          id="Path_3495"
                          data-name="Path 3495"
                          d="M80.1,298.667H65.238a1.238,1.238,0,1,0,0,2.476H80.1a1.238,1.238,0,1,0,0-2.476Z"
                          transform="translate(-64 -298.667)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8037"
                      data-name="Group 8037"
                      transform="translate(7.429 29.717)"
                    >
                      <g id="Group_8036" data-name="Group 8036">
                        <path
                          id="Path_3496"
                          data-name="Path 3496"
                          d="M80.1,341.333H65.238a1.238,1.238,0,0,0,0,2.477H80.1a1.238,1.238,0,0,0,0-2.477Z"
                          transform="translate(-64 -341.333)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8039"
                      data-name="Group 8039"
                      transform="translate(42.099 22.288)"
                    >
                      <g id="Group_8038" data-name="Group 8038">
                        <path
                          id="Path_3497"
                          data-name="Path 3497"
                          d="M368.858,277.333h-2.476a3.719,3.719,0,0,0-3.715,3.715v2.476a3.719,3.719,0,0,0,3.715,3.715h2.476a3.719,3.719,0,0,0,3.715-3.715v-2.476A3.719,3.719,0,0,0,368.858,277.333Zm1.238,6.191a1.239,1.239,0,0,1-1.238,1.238h-2.476a1.239,1.239,0,0,1-1.238-1.238v-2.476a1.239,1.239,0,0,1,1.238-1.238h2.476a1.239,1.239,0,0,1,1.238,1.238Z"
                          transform="translate(-362.667 -277.333)"
                          fill="url(#linear-gradient)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <label>Credit Card</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
