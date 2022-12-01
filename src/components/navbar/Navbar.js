import React from "react";
import "react-router-dom";
import logo from "./assets/logo.png";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../reducers/userReducer";
import { useDispatch } from "react-redux";
import { getTalons } from "../../actions/user";

function Navbar() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      {!isAuth && (
        <div className="authTrue">
          <Link to="/login">
            <div className="navbar-btn">Sign in</div>
          </Link>
          <Link to="/registration">
            <div className="navbar-btn">Sign up</div>
          </Link>
        </div>
      )}
      {isAuth && (
        <div className="authFalse">
          <Link to="/">
            <div className="navbar-btn">Home</div>
          </Link>
          <Link to="/userTalons">
            <div
              className="navbar-btn"
              onClick={() => {
                getTalons();
              }}
            >
              Ordered talons
            </div>
          </Link>
          <Link to="/">
            <div
              className="navbar-btn"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
