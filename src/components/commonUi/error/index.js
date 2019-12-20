import React from "react";
import PropTypes from "prop-types";
import { Errors } from "react-redux-form";
import {
  invalidEmail,
  invalidPass,
  invalidNumber,
  required
} from "./../../../utilities/message";

const errors = ({ model, errors }) => {
  return (
    <Errors
      className="errors"
      model={model}
      show="touched"
      messages={{
        required,
        invalidEmail,
        invalidNumber,
        invalidPass,
        ...errors
      }}
    />
  );
};

errors.propTypes = {
  model: PropTypes.string.isRequired,
  errors: PropTypes.object
};

export default errors;
