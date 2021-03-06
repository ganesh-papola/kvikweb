import React, { useState } from "react";
import { Button, Label, Modal, ModalHeader, ModalBody } from "reactstrap";
import { LocalForm, actions } from "react-redux-form";
import _ from "lodash";
import Heading from "../../commonUi/heading/heading";
import JobAddress from "../jobDetail/JobAddress/jobAddress";
import UserInfo from "../bidderProfile/userInfo/userInfo";
import InputCell from "../../commonUi/input/inputCell";
import UserImage from "../jobDetail/userImage/userImage";
import UserPayment from "./userPayment";
import "./userProfileDetail.scss";
import RatingBlock from "../ratingBock/ratingBlock";
import Review from "../Review";
import { getTranslations } from "../../../utilities/translations";

const UserProfile = ({
  user,
  handleImageUpload,
  imegeUploading,
  isEdit,
  handleSubmit,
  _toggleEdit,
  reviews
}) => {
  const [modal, setModal] = useState(false);
  const [skillError, setSkillError] = useState(false);
  let [skills, setSkills] = useState([...user.skills] || []);
  const toggle = () => setModal(!modal);
  return (
    <div className="job-detail-blc d-flex flex-column flex-fill">
      <div className="detail-blc-hd d-flex align-items-center mb-3">
        <Heading className="h3 flex-fill mb-0 mr-3">
          {getTranslations("profile")}
        </Heading>
        <div className="user-profl-edit">
          <Button
            color="link"
            className="edit-btn"
            onClick={() => _toggleEdit(!isEdit)}
          >
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
            <label className="text-secondary mb-0">
              {getTranslations("edit")}
            </label>
          </Button>
        </div>
      </div>

      <div className="data-page user-profl-blc">
        <div className="d-flex user-profl-blc-rw">
          <div className="user-profl-col flex-fill">
            <div className="user-profl-rw d-flex">
              <div className="user-profl-l flex-fill">
                <LocalForm
                  initialState={user}
                  onSubmit={(values) => handleSubmit({ ...values, skills })}
                  getDispatch={(dispatch) => dispatch(actions.change(user))}
                >
                  {!isEdit ? (
                    <JobAddress
                      job_seeker_id={user}
                      handleImageUpload={handleImageUpload}
                      imegeUploading={imegeUploading}
                      editimage={true}
                      showSeekerName
                      showEmail
                    />
                  ) : (
                    <React.Fragment>
                      <div
                        className={`job-address d-flex ${
                          isEdit ? "editMode" : ""
                        }`}
                      >
                        <UserImage
                          image={user.image}
                          handleImageUpload={handleImageUpload}
                          imegeUploading={imegeUploading}
                          edit={isEdit}
                        />
                        <div className="job-user-info flex-fill">
                          <div className="edit-profile-blc text-left">
                            <Label className="input-title">
                              {getTranslations("email")}
                            </Label>
                            <InputCell
                              Name={"email"}
                              Placeholder={getTranslations("email")}
                              Model=".email"
                              InputType={"text"}
                              Disabled={true}
                              className="input-line-blc"
                              Errors={{
                                required: "required",
                                invalidEmail: "invalidEmail"
                              }}
                            />
                            <Label className="input-title">
                              {getTranslations("first_name")}
                            </Label>
                            <InputCell
                              Name={"fname"}
                              Placeholder={getTranslations("first_name")}
                              Model=".fname"
                              InputType={"text"}
                              className="input-line-blc"
                              Errors={{
                                required: "required"
                              }}
                            />
                            <Label className="input-title">
                              {getTranslations("last_name")}
                            </Label>
                            <InputCell
                              Name={"lname"}
                              Placeholder={getTranslations("last_name")}
                              Model=".lname"
                              InputType={"text"}
                              className="input-line-blc"
                              Errors={{
                                required: "required"
                              }}
                            />

                            <Label className="input-title">
                              {getTranslations("mobile")}
                            </Label>
                            <InputCell
                              Name={"mobile"}
                              Placeholder={getTranslations("mobile")}
                              Model=".mobile"
                              InputType={"text"}
                              className="input-line-blc"
                              Errors={{
                                required: "required",
                                invalidNumber: "invalidNumber"
                              }}
                            />
                            <Label className="input-title">
                              {getTranslations("zip_code")}
                            </Label>
                            <InputCell
                              Name={"zip"}
                              Placeholder={getTranslations("zip_code")}
                              Model=".zip_code"
                              InputType={"text"}
                              className="input-line-blc"
                              Errors={{
                                required: "required",
                                invalidNumber: "invalidNumber"
                              }}
                            />
                            <Label className="input-title">
                              {getTranslations("city")}
                            </Label>
                            <InputCell
                              Name={"city"}
                              Placeholder={getTranslations("city")}
                              Model=".city"
                              InputType={"text"}
                              className="input-line-blc"
                              Errors={{
                                required: "required"
                              }}
                            />
                            <Label className="input-title">
                              {getTranslations("about_me")}{" "}
                            </Label>
                            <InputCell
                              Name={"aboutme"}
                              Placeholder={getTranslations("about_me")}
                              Model=".about"
                              InputType={"textarea"}
                              className="input-line-blc"
                              Errors={{ required: "required" }}
                            />
                          </div>
                          <div className="edit-profile-btns">
                            <Button color="secondary" type="submit">
                              {getTranslations("submit")}
                            </Button>
                            <Button
                              color="link"
                              className="btn-dark cancel"
                              onClick={() => _toggleEdit(!isEdit)}
                              type="button"
                            >
                              {getTranslations("cancel")}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </LocalForm>
              </div>
              {!isEdit && (
                <div className="flex-shrink-0">
                  <div className="user-review-blc d-flex flex-column align-items-end">
                    <RatingBlock rating={user.average_rating} />
                    <Button
                      color="link"
                      className="user-rating-btn p-0 text-primary"
                      onClick={toggle}
                    >
                      {getTranslations("see_your_review")}
                    </Button>
                    {/* Review Modal Start */}
                    <Modal
                      isOpen={modal}
                      toggle={toggle}
                      size="lg"
                      className="d-flex flex-column align-items-center  
                      justify-content-center users-review-mdl"
                    >
                      {/* <Spinner className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center with-overlay overlay-opacity" /> */}
                      <ModalHeader className="flex-shrink-0">
                        {getTranslations("user_reviews")}
                        <Button
                          color="link"
                          className="close-btn btn2"
                          onClick={toggle}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="357"
                            height="357"
                            viewBox="0 0 357 357"
                          >
                            <path
                              id="Forma_1"
                              data-name="Forma 1"
                              d="M357,35.7,321.3,0,178.5,142.8,35.7,0,0,35.7,142.8,178.5,0,321.3,35.7,357,178.5,214.2,321.3,357,357,321.3,214.2,178.5Z"
                            />
                          </svg>
                        </Button>
                      </ModalHeader>
                      <ModalBody className="users-review-blc overflow-auto">
                        <Review reviews={reviews} />
                      </ModalBody>
                    </Modal>
                    {/* Review Modal Ends */}
                  </div>
                  <div className="profile-bar ml-auto user-profile-bar">
                    <span className="profile-percentage">
                      {`${((user && user.percent) || 0) * 100}%`}
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{
                          width: `${((user && user.percent) || 0) * 100}%`
                        }}
                      ></div>
                    </div>
                    <span className="d-block profile-bar-txt text-left">
                      {getTranslations("profile_completion")}
                    </span>
                  </div>
                </div>
              )}
            </div>
            {!isEdit && <UserInfo description={user.about} />}
            <div className="bidder-profl-rw bidder-profile-desc bidder-profile-l-padd">
              <h3>{getTranslations("skills")}</h3>
              {isEdit && (
                <div class="form-group">
                  {" "}
                  <div className="position-relative d-flex flex-wrap align-items-center ">
                    <input
                      type="text"
                      name="skill"
                      placeholder={getTranslations("enter_skill")}
                      className="form-control"
                      onKeyDown={(event) => {
                        if (
                          event.keyCode === 32 &&
                          !_.isEmpty(event.target.value.trim())
                        ) {
                          if (!skills.includes(event.target.value.trim())) {
                            setSkillError(false);
                            setSkills([...skills, event.target.value.trim()]);
                          } else {
                            setSkillError(true);
                          }
                          event.target.value = null;
                        }
                      }}
                    />
                  </div>
                  {skillError && (
                    <p className="error">{getTranslations("skill_error")}</p>
                  )}
                </div>
              )}
              <div className="skils-blc">
                {skills.map((item, key) => (
                  <span
                    key={key}
                    onClick={() => {
                      if (isEdit) {
                        skills.splice(key, 1);
                        setSkills([...skills]);
                      }
                    }}
                  >
                    {item}
                    {isEdit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="357"
                        height="357"
                        viewBox="0 0 357 357"
                      >
                        <path
                          id="Forma_1"
                          data-name="Forma 1"
                          d="M357,35.7,321.3,0,178.5,142.8,35.7,0,0,35.7,142.8,178.5,0,321.3,35.7,357,178.5,214.2,321.3,357,357,321.3,214.2,178.5Z"
                        ></path>
                      </svg>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <UserPayment />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
