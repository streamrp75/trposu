import React, { useEffect } from "react";
import "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Registration from "../registration/Registration";
import Login from "../authorization/Login";
import TalonForm from "../TalonForm";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "../actions/user";
import UserTalons from "./userTalons/UserTalons";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <div className="beforeRoutes">
      <Header></Header>
      <BrowserRouter>
        <div className="app">
          {!isAuth && (
            <Routes>
              <Route path="/registration" element={<Registration />}></Route>
              <Route exact path="/" element={<TalonForm />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          )}

          {isAuth && (
            <div>
              <Routes>
                <Route path="/" element={<TalonForm />}></Route>
                <Route path="/usertalons" element={<UserTalons />}></Route>
              </Routes>
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
