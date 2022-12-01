import "./Login.css";
import React from "react";
import { useState } from "react";
import Input from "../utils/input/Input";
import { useDispatch } from "react-redux";
import { login } from "../actions/user";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  return (
    <div className="loginComponent">
      <form id="login" className="loginList">
        <h1>Sign in</h1>
        <fieldset id="inputs">
          <Input
            value={username}
            setValue={setUsername}
            type="text"
            placeholder="Логин"
          />
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Пароль"
          />
          <Link to="/">
            <button
              className="submit"
              type="button"
              onClick={() => dispatch(login(username, password))}
            >
              Sign in
            </button>
          </Link>

          <Link
            style={{
              textDecoration: "none",
              font: "bold 15px Arial, Helvetica",
              color: "#8f5a0a",
            }}
            to="/registration"
          >
            <button className="reg">Sign up </button>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              font: "bold 15px Arial, Helvetica",
              color: "#8f5a0a",
            }}
            to="/"
          >
            <button className="continue">Continue without registration</button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
