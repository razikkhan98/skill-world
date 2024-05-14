import React from "react";
import Logo from "../../../src/assets/images/timeline/logo1.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!--Start sidebar-wrapper--> */}
      <div
        id="sidebar-wrapper"
        data-simplebar=""
        data-simplebar-auto-hide="true"
      >
        <div className="brand-logo">
          <a href="/home">
            <img src={Logo} className="logo-icon" alt="logo icon" />
            <h5 className="logo-text">Intelligence World</h5>
          </a>
        </div>
        <ul className="sidebar-menu do-nicescrol">
          <li>
            <Link to="/home">
              <i className="zmdi zmdi-view-dashboard"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/from">
              <i className="zmdi zmdi-format-list-bulleted"></i>
              <span>Forms</span>
            </Link>
          </li>

          <li>
            <Link to="/tables">
              <i className="zmdi zmdi-grid"></i> <span>Tables</span>
            </Link>
          </li>

          <li>
            <Link to="/calender">
              <i className="zmdi zmdi-calendar-check"></i> <span>Calendar</span>
              <small className="badge float-right badge-light">New</small>
            </Link>
          </li>

          <li>
            <Link to="/" target="_blank">
              <i className="zmdi zmdi-lock"></i> <span>Login</span>
            </Link>
          </li>

          <li>
            <Link to="/register">
              <i className="zmdi zmdi-account-circle"></i>
              <span>Registration</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!--End sidebar-wrapper--> */}
    </>
  );
};
export default Navbar;
