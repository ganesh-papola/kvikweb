import React from "react";
import { Button, Form } from "reactstrap";
import InputCell from "../../input/inputCell";
import "./loginType.scss";
import SocialButton from "../../social-button";
const LoginType = props => {
  return (
    <div className="login-type login-type text-center">
      <h4>or Login Using Social Media</h4>
      <div className="login-type-list">
        <SocialButton
          provider="facebook"
          appId="369320740685834"
          onLoginSuccess={props.handleSocialLogin}
          onLoginFailure={props.handleSocialLoginFailure}
        >
          <div className="rounded-circle p-0 secondary-100-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51.969"
              height="96.123"
              viewBox="0 0 51.969 96.123"
            >
              <g id="facebook-logo" transform="translate(-22.077)">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M72.089.02,59.624,0C45.62,0,36.57,9.285,36.57,23.656V34.563H24.037a1.96,1.96,0,0,0-1.96,1.961v15.8a1.96,1.96,0,0,0,1.96,1.96H36.57V94.163a1.959,1.959,0,0,0,1.96,1.96H54.882a1.96,1.96,0,0,0,1.96-1.96V54.287H71.5a1.959,1.959,0,0,0,1.96-1.96l.006-15.8A1.961,1.961,0,0,0,71.5,34.563H56.842V25.317c0-4.444,1.059-6.7,6.848-6.7l8.4,0a1.96,1.96,0,0,0,1.959-1.96V1.98A1.961,1.961,0,0,0,72.089.02Z"
                />
              </g>
            </svg>
          </div>
        </SocialButton>
        <SocialButton
          provider="google"
          appId="1:764433117337:web:10cdc678baa74ad5f6c808"
          onLoginSuccess={props.handleSocialLogin}
          onLoginFailure={props.handleSocialLoginFailure}
        >
          <div color="link" className="rounded-circle p-0 secondary-100-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94.003"
              height="96.997"
              viewBox="0 0 94.003 96.997"
            >
              <path
                id="Forma_1"
                data-name="Forma 1"
                d="M0,78.907c0-2.263.7-10.066,9.693-15.431,7.616-4.7,18.041-5.412,23.642-5.8l.39-.027-.22-.284c-1.746-2.24-3.552-4.557-3.552-8.313a10.536,10.536,0,0,1,1.061-4.476l.188-.458c-1.274.119-2.719.254-4.023.254-13.563,0-20.883-10.235-20.883-19.866a22.862,22.862,0,0,1,8.04-16.942C20.736,2.262,27.849,0,38.124,0H61.183a.5.5,0,0,1,.265.924l-6.59,4.157a.489.489,0,0,1-.266.077H46.94c2.9,2.4,8.924,7.4,8.924,17.077,0,9.623-5.629,14.072-10.595,18l-.163.166c-1.562,1.559-3.331,3.326-3.331,6,0,2.724,1.769,4.194,3.191,5.375l4.6,3.588c5.451,4.605,10.587,8.942,10.584,17.729,0,11.878-11.37,23.9-33.1,23.9C8.363,97,0,87.911,0,78.907ZM21.884,63.234c-7.169,2.605-10.809,6.989-10.809,13.019,0,9.238,8.9,15.443,22.145,15.443,11.411,0,18.5-5.234,18.5-13.664,0-6.616-4.456-10.091-13.724-16.707a20.16,20.16,0,0,0-2.889-.127A50.669,50.669,0,0,0,21.884,63.234ZM20.132,8.954c-1.862,2.313-2.767,5.377-2.767,9.367,0,7.849,4.613,22.507,15.729,22.507a12.875,12.875,0,0,0,8.556-3.538c3.144-3.171,3.144-7.735,3.144-9.236,0-9.512-5.644-23.274-15.851-23.274A11.64,11.64,0,0,0,20.132,8.954Zm55.492,55.39a.5.5,0,0,1-.5-.5V51.619H63.037a.5.5,0,0,1-.5-.5V45.8a.5.5,0,0,1,.5-.5H75.126V33.158a.5.5,0,0,1,.5-.5h5.228a.5.5,0,0,1,.5.5V45.3H93.5a.5.5,0,0,1,.5.5v5.313a.5.5,0,0,1-.5.5H81.351V63.843a.5.5,0,0,1-.5.5Z"
                transform="translate(0.002 -0.002)"
              />
            </svg>
          </div>
        </SocialButton>
      </div>
    </div>
  );
};

export default LoginType;
