import React from "react";
import { Button } from "reactstrap";
import "./rating.scss";
const Rating = ({ disablestar = false, classname, _ratingClick }) => {
  return (
    <Button
      color="link"
      type="button"
      className={`${classname} ${disablestar ? "disable-star" : ""}`}
      onClick={e => _ratingClick(e.target.value)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55.864"
        height="52.948"
        viewBox="0 0 55.864 52.948"
      >
        <path
          id="Forma_1"
          data-name="Forma 1"
          d="M11.354,52.94a1,1,0,0,1-.588-.19.99.99,0,0,1-.4-.973L13.46,33.856.37,21.165a.993.993,0,0,1,.555-1.7l18.089-2.615L27.1.549A1,1,0,0,1,28-.006h0a1,1,0,0,1,.9.555l8.09,16.305,18.09,2.615a1,1,0,0,1,.808.677.99.99,0,0,1-.253,1.018L42.54,33.858l3.09,17.921a1,1,0,0,1-1.451,1.048L28,44.366l-16.181,8.46A1.012,1.012,0,0,1,11.354,52.94ZM3.217,21.147,15.232,32.8a.991.991,0,0,1,.287.88L12.682,50.127l14.853-7.766a1,1,0,0,1,.931,0l14.851,7.766L40.481,33.678a.992.992,0,0,1,.287-.88l12.015-11.65-16.6-2.4a1,1,0,0,1-.753-.544L28,3.238,20.573,18.2a1,1,0,0,1-.753.544Z"
          transform="translate(-0.068 0.006)"
        />
      </svg>
    </Button>
  );
};

export default Rating;
