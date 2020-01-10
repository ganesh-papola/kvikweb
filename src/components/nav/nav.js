import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "./../../actions/user";
import "./nav.scss";

const Nav = props => {
  const stopPropagationHandler = e => {
    e.nativeEvent.stopImmediatePropagation();
  };
  const { user } = useSelector(state => state);

  const navVisibleHander = () => {
    props.navVisibleProp(false)
    console.log('click')
  }
  return (
    <nav
      className={"d-flex align-items-center " + props.className}
      onClick={stopPropagationHandler}
    >
      {
        <ul className="d-flex align-items-center flex-wrap">
          <li>
            <Link className="btn btn-link" to={"/"} onClick={navVisibleHander}>
              Home
            </Link>
          </li>
          <li>
            <Link className="btn btn-link" to={"/about-us"} onClick={navVisibleHander}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="btn btn-link" to={"/contact-us"} onClick={navVisibleHander}>
              Contact Us
            </Link>
          </li>
          {!user.loggedIn && (
            <li>
              <Link className="btn btn-link" to={"/register"} onClick={navVisibleHander}>
                Create an Account
              </Link>
            </li>
          )}
          <li>
            {!user.loggedIn && (
              <Link className={`login-btn btn btn-info`} to={"/login"} onClick={navVisibleHander}>
                Login
              </Link>
            )}
          </li>
        </ul>
      }
    </nav>
  );
};

export default Nav;
