import "./TalonForm.css";
import Input from "./utils/input/Input";
import { useState } from "react";
import { talonsubmit } from "./actions/user";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";

const TalonForm = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [birthday, setBirthday] = useState();
  const [date, setDate] = useState();
  const token = localStorage.getItem("token");
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <div>
      <Navbar></Navbar>
      <div className="talonPage">
        <section className="banner">
          <div className="banner-text">
            <span>Welcome to Health!</span>
            <br />
            <span className="subspan">Become Healthier</span>
          </div>
        </section>
        <section className="talonSection">
          <div className="talonSection__wrapper">
            <div className="column1">
              <div className="consultation">
                <h3 className="headerText">Medical center</h3>
                <p className="subtitle">
                  Medical specialty concerned with the care of acutely ill
                  hospitalized patients
                </p>
              </div>
            </div>
            <div className="column2">
              <div className="orderTalon">
                <div className="text-center">
                  <h3 className="headerText">Orden talon</h3>
                </div>
                <form className="talonForm">
                  <fieldset className="talonFieldset">
                    {!isAuth && (
                      <Input
                        value={firstname}
                        setValue={setFirstname}
                        type="text"
                        placeholder="Last name"
                      />
                    )}
                    {!isAuth && (
                      <Input
                        value={lastname}
                        setValue={setLastname}
                        type="text"
                        placeholder="First name"
                      />
                    )}
                    {!isAuth && (
                      <Input
                        value={birthday}
                        setValue={setBirthday}
                        type="date"
                        placeholder="Birthday"
                      />
                    )}
                    <select name="Choose specialist" id="select">
                      <option value={"Бабарень"}>Бабарень</option>
                      <option value={"Пупкин"}>Пупкин</option>
                      <option value={"Уткин"}>Уткин</option>
                      <option value={"Марков"}>Марков</option>
                      <option value={"Милфин"}>Милфин</option>
                      <option value={"Бабкин"}>Бабкин</option>
                    </select>
                    <Input
                      value={date}
                      setValue={setDate}
                      type="date"
                      placeholder="Date"
                    />
                    <select name="Time" id="time">
                      <option value={"8:00"}>8:00</option>
                      <option value={"9:00"}>9:00</option>
                      <option value={"10:00"}>10:00</option>
                      <option value={"11:00"}>11:00</option>
                      <option value={"12:00"}>12:00</option>
                      <option value={"13:00"}>13:00</option>
                      <option value={"14:00"}>14:00</option>
                      <option value={"15:00"}>15:00</option>
                      <option value={"16:00"}>16:00</option>
                      <option value={"17:00"}>17:00</option>
                      <option value={"18:00"}>18:00</option>
                    </select>
                    <button
                      type="button"
                      className="talonSubmit"
                      onClick={() =>
                        talonsubmit(
                          firstname,
                          lastname,
                          birthday,
                          document.getElementById("select").value,
                          date,
                          document.getElementById("time").value,
                          token
                        )
                      }
                    >
                      Order talon
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="column3">
              <div className="consultation">
                <h3 className="headerText">Our doctors</h3>
                <p className="subtitle">
                  licensed health professionals who maintain and restore human
                  health through the practice of medicine.
                </p>
                <a href="#" className="btn-custom">
                  Doctors
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TalonForm;
