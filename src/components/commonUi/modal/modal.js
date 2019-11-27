import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import { LocalForm, Control } from "react-redux-form";

import Checkbox from "../checkbox/checkbox";
import Logo from "../../commonUi/logo/logo";
import LoginType from "./loginType/loginType";
import { Link } from "react-router-dom";

import "./modal.scss";
import "./../input/inputCell";

const SignInModal = ({
  _isOpen,
  _toggleModal,
  _modalType,
  _handleSubmit,
  _handleForgotPassword,
  ...props
}) => {
  return (
    <div>
      <Modal
        isOpen={_isOpen}
        size="lg"
        className={
          "d-flex flex-column align-items-center justify-content-center " +
          (_modalType ? "signup" : "")
        }
      >
        <Button
          color="link"
          className="position-absolute close-btn secondary-100-hover"
          onClick={() => _toggleModal()}
        >
          <svg
            id="cancel"
            xmlns="http://www.w3.org/2000/svg"
            width="475.2"
            height="475.2"
            viewBox="0 0 475.2 475.2"
          >
            <g id="Group_1" data-name="Group 1">
              <path
                id="Path_1"
                data-name="Path 1"
                d="M405.6,69.6a237.588,237.588,0,1,0-336,336,237.588,237.588,0,1,0,336-336ZM386.5,386.5a210.519,210.519,0,0,1-297.8,0C6.6,304.4,6.6,170.8,88.7,88.7a210.519,210.519,0,0,1,297.8,0C468.6,170.8,468.6,304.4,386.5,386.5Z"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M342.3,132.9a13.46,13.46,0,0,0-19.1,0l-85.6,85.6L152,132.9A13.506,13.506,0,1,0,132.9,152l85.6,85.6-85.6,85.6a13.55,13.55,0,0,0,9.5,23.1,13.173,13.173,0,0,0,9.5-4l85.6-85.6,85.6,85.6a13.588,13.588,0,0,0,9.5,4,13.01,13.01,0,0,0,9.5-4,13.46,13.46,0,0,0,0-19.1l-85.4-85.6L342.3,152A13.46,13.46,0,0,0,342.3,132.9Z"
              />
            </g>
          </svg>
        </Button>
        <ModalBody className={"overflow-auto " + (_modalType ? "p-0" : "")}>
          <div className="signup-modal-blc d-flex">
            <div className="signup-modal-pic d-flex align-items-center justify-content-center position-relative">
              <span className="curl position-absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53.005"
                  height="245.634"
                  viewBox="0 0 53.005 245.634"
                >
                  <path
                    id="Shape_1"
                    data-name="Shape 1"
                    d="M679.7,250.128C661.9,338.756,627,344.316,627,344.316s52.729,37.911,52.7,124.855S680.4,157.336,679.7,250.128Z"
                    transform="translate(-627 -236.026)"
                    fill="#fff"
                  />
                </svg>
              </span>
              <h3 className="text-center position-relative">
                Welcome to
                <span className="d-block">
                  <Logo className="signup-logo" />
                </span>
              </h3>
            </div>

            <div className="signup-modal-frm flex-fill">
              <LocalForm onSubmit={values => _handleSubmit(values)}>
                {_modalType === "/register" && (
                  <div className="position-relative d-flex align-items-center">
                    <h2>
                      Welcome <label className="d-block">Sign Up</label>
                    </h2>
                    <span className="input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="54"
                        viewBox="0 0 46 54"
                      >
                        <path
                          id="Forma_1"
                          data-name="Forma 1"
                          d="M41.014,42.889l-9.553-4.776A2.63,2.63,0,0,1,30,35.748V32.367c.229-.28.47-.6.719-.951a22.886,22.886,0,0,0,2.954-5.8A3.968,3.968,0,0,0,36,22V18a3.988,3.988,0,0,0-1-2.625V10.056a8.965,8.965,0,0,0-2.092-6.525C30.854,1.188,27.521,0,23,0s-7.854,1.188-9.908,3.53A8.967,8.967,0,0,0,11,10.056v5.319A3.988,3.988,0,0,0,10,18v4a3.976,3.976,0,0,0,1.5,3.109A20.988,20.988,0,0,0,15,32.346v3.309a2.642,2.642,0,0,1-1.377,2.32L4.7,42.841A9.018,9.018,0,0,0,0,50.762V54H46V50.957A8.973,8.973,0,0,0,41.014,42.889Z"
                        />
                      </svg>
                    </span>
                    <Control.text
                      className="input-icon-cell"
                      model=".fname"
                      placeholder="First Name"
                    />
                    <span className="input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="54"
                        viewBox="0 0 46 54"
                      >
                        <path
                          id="Forma_1"
                          data-name="Forma 1"
                          d="M41.014,42.889l-9.553-4.776A2.63,2.63,0,0,1,30,35.748V32.367c.229-.28.47-.6.719-.951a22.886,22.886,0,0,0,2.954-5.8A3.968,3.968,0,0,0,36,22V18a3.988,3.988,0,0,0-1-2.625V10.056a8.965,8.965,0,0,0-2.092-6.525C30.854,1.188,27.521,0,23,0s-7.854,1.188-9.908,3.53A8.967,8.967,0,0,0,11,10.056v5.319A3.988,3.988,0,0,0,10,18v4a3.976,3.976,0,0,0,1.5,3.109A20.988,20.988,0,0,0,15,32.346v3.309a2.642,2.642,0,0,1-1.377,2.32L4.7,42.841A9.018,9.018,0,0,0,0,50.762V54H46V50.957A8.973,8.973,0,0,0,41.014,42.889Z"
                        />
                      </svg>
                    </span>
                    <Control.text
                      className="input-icon-cell"
                      model=".lname"
                      placeholder="Last Name"
                    />
                    <span className="input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="146"
                        height="114.714"
                        viewBox="0 0 146 114.714"
                      >
                        <path
                          id="Forma_1"
                          data-name="Forma 1"
                          d="M13.536,114.857a12.549,12.549,0,0,1-9.207-3.83A12.548,12.548,0,0,1,.5,101.82V37.131A43.159,43.159,0,0,0,8.729,44.22Q38.223,64.262,49.221,72.328q4.644,3.422,7.536,5.336a46.578,46.578,0,0,0,7.7,3.911,23.468,23.468,0,0,0,8.962,2h.165a23.46,23.46,0,0,0,8.96-2,46.506,46.506,0,0,0,7.7-3.911q2.893-1.913,7.537-5.336,13.848-10.022,40.572-28.108a44.921,44.921,0,0,0,8.149-7.088V101.82a13.076,13.076,0,0,1-13.036,13.037ZM73.5,73.14h-.082a12.933,12.933,0,0,1-4.074-.734,24.609,24.609,0,0,1-4.685-2.2q-2.487-1.465-4.238-2.647t-4.4-3.1q-2.649-1.913-3.462-2.484-7.414-5.214-21.346-14.868T14.513,35.5a40.441,40.441,0,0,1-9.533-9.41Q.5,20.106.5,14.971A16.45,16.45,0,0,1,3.881,4.378Q7.261.144,13.535.143H133.464a12.592,12.592,0,0,1,9.166,3.829,12.491,12.491,0,0,1,3.871,9.207,21.516,21.516,0,0,1-3.993,12.3A38.685,38.685,0,0,1,132.568,35.5Q101.935,56.767,94.44,61.98q-.815.571-3.463,2.484t-4.4,3.1q-1.752,1.181-4.236,2.647a24.608,24.608,0,0,1-4.685,2.2,12.933,12.933,0,0,1-4.074.734Z"
                          transform="translate(-0.5 -0.143)"
                        />
                      </svg>
                    </span>
                    <Control.text
                      className="input-icon-cell"
                      model=".email"
                      placeholder="Email"
                    />
                    <span className="input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="14.001"
                        viewBox="0 0 12 14.001"
                      >
                        <path
                          id="Forma_1"
                          data-name="Forma 1"
                          d="M850.148,402.653h-.3v-1.277a4.6,4.6,0,0,0-4.7-4.376c-.071,0-.214,0-.285,0a4.6,4.6,0,0,0-4.7,4.376v1.277h-.3a.917.917,0,0,0-.851.97v6.4a.921.921,0,0,0,.851.973h10.3a.921.921,0,0,0,.851-.973v-6.4A.917.917,0,0,0,850.148,402.653Zm-4.184,4.165v1.935a.439.439,0,0,1-.454.409h-1.021a.439.439,0,0,1-.454-.409v-1.935a1.094,1.094,0,0,1-.379-.828,1.214,1.214,0,0,1,1.2-1.165c.071,0,.214,0,.285,0a1.214,1.214,0,0,1,1.2,1.165A1.1,1.1,0,0,1,845.964,406.818Zm1.875-4.165H842.16v-1.277a2.854,2.854,0,0,1,5.679,0Z"
                          transform="translate(-839 -396.999)"
                          fill="#6d6d6d"
                        />
                      </svg>
                    </span>
                    <Control.password
                      className="input-icon-cell"
                      model=".password"
                      placeholder="Password"
                    />
                    <div className="signup-agree d-flex align-items-start">
                      <label className="d-flex align-items-start">
                        <Checkbox /> I agree with terms and conditions
                      </label>
                    </div>
                    <div className="text-center">
                      <Button size="lg" className="signup">
                        SIGN UP
                      </Button>
                    </div>
                  </div>
                )}
                {_modalType === "/login" && (
                  <div>
                    <h2>
                      Welcome Back, <label className="d-block">Login</label>
                    </h2>
                    <Control.text
                      className="input-icon-cell"
                      model=".email"
                      placeholder="Email"
                    />
                    <Control.password
                      className="input-icon-cell"
                      model=".password"
                      placeholder="Password"
                    />
                    <div className="signup-agree d-flex align-items-start">
                      <label className="d-flex align-items-start">
                        <Checkbox /> Remember me
                      </label>
                      <Button
                        color="link"
                        className="forgot-btn btn btn-link flex-shrink-0 ml-auto p-0 text-primary-hover"
                        onClick={_handleForgotPassword("")}
                      >
                        Forgot Password?
                      </Button>
                    </div>
                    <div className="text-center">
                      <Button size="lg" className="signup">
                        LOGIN
                      </Button>
                    </div>
                    <LoginType {...props} />
                    <p className="signup-link-rw text-center">
                      <span>Don't have an account?</span>
                      <Link className="text-black" to={"/register"}>
                        Sign Up Now
                      </Link>
                    </p>
                  </div>
                )}
              </LocalForm>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default SignInModal;
