import axios from "axios";
import { add } from "../components/userTalons/UserTalons";
import { setUser } from "../reducers/userReducer";

export const registration = async (
  email,
  username,
  password,
  firstname,
  lastname,
  birthday,
  isDoctor
) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      {
        email,
        username,
        password,
        firstname,
        lastname,
        birthday,
        isDoctor,
      }
    );
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/auth", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(response.data);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
      localStorage.removeItem("token");
    }
  };
};

export const talonsubmit = async (
  firstname,
  lastname,
  birthday,
  doctor,
  date,
  time,
  token
) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/talon", {
      firstname,
      lastname,
      birthday,
      doctor,
      date,
      time,
      token,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const getTalons = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/auth/talon", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    if (response.data.message.length === 0) {
      alert("У вас нет талонов");
      return 0;
    }
    await localStorage.setItem(
      "message",
      JSON.stringify(response.data.message)
    );
    add();
  } catch (e) {
    alert(e.response.data.message);
  }
};
