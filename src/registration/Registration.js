import "./Registration.css";
import Input from "../utils/input/Input";
import { useState } from "react";
import { registration } from "../actions/user";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [birthday, setBirthday] = useState();
  return (
    <div className="registrationComponent">
      <form id="registr">
        <h1>Sign up</h1>
        <fieldset id="inputs">
          <Input
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="Email"
          />
          <Input
            value={username}
            setValue={setUsername}
            type="text"
            placeholder="Username"
          />
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Password"
          />
          <Input
            value={firstname}
            setValue={setFirstname}
            type="text"
            placeholder="Last name"
          />
          <Input
            value={lastname}
            setValue={setLastname}
            type="text"
            placeholder="First name"
          />
          <Input
            value={birthday}
            setValue={setBirthday}
            type="date"
            placeholder="Birthday"
          />
          <fieldset id="actions">
            <button
              type="button"
              id="submit"
              onClick={() =>
                registration(
                  email,
                  username,
                  password,
                  firstname,
                  lastname,
                  birthday
                )
              }
            >
              Sign up
            </button>
            <Link
              style={{
                textDecoration: "none",
                font: "bold 15px Arial, Helvetica",
                color: "#8f5a0a",
              }}
              to="/login"
            >
              <button className="log">Sign in</button>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                font: "bold 15px Arial, Helvetica",
                color: "#8f5a0a",
              }}
              to="/"
            >
              <button className="continue">
                Continue without registration
              </button>
            </Link>
          </fieldset>
        </fieldset>
      </form>
    </div>
  );
};

export default Registration;
