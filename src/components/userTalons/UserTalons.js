import Navbar from "../navbar/Navbar";
import "./UserTalons.css";

const UserTalons = () => {
  return (
    <div className="userTalons-page">
      <Navbar></Navbar>
      <div className="userTalons-wrapper">
        <h2 className="headerText">Просмотр талонов</h2>
        <div className="userTalons-space">{}</div>
      </div>
    </div>
  );
};

export default UserTalons;

export const add = () => {
  const space = document.querySelector(".userTalons-space");
  space.innerHTML = "";
  let mas = localStorage
    .getItem("message")
    .slice(2, localStorage.getItem("message").lastIndexOf("]") - 1)
    .split("},{");

  mas.forEach((elem) => {
    const card = document.createElement("div");
    card.classList.add("userTalon-card");

    let inputs = elem.split(",");
    let inputsValue = [];
    inputs.forEach((el) => {
      el.split(":").forEach((elem) => {
        inputsValue.push(elem);
      });
    });
    let firstnameInput = document.createElement("p");
    firstnameInput.classList.add("userTalon-input");
    firstnameInput.innerText = `Фамилия: ${inputsValue[3].slice(
      1,
      inputsValue[3].lastIndexOf('"')
    )}`;
    let lastnameInput = document.createElement("p");
    lastnameInput.classList.add("userTalon-input");
    lastnameInput.innerText = `Имя: ${inputsValue[5].slice(
      1,
      inputsValue[5].lastIndexOf('"')
    )}`;
    let birthdayInput = document.createElement("p");
    birthdayInput.classList.add("userTalon-input");
    birthdayInput.innerText = `Дата рождения: ${inputsValue[7].slice(
      1,
      inputsValue[7].lastIndexOf('"')
    )}`;
    let doctorInput = document.createElement("p");
    doctorInput.classList.add("userTalon-input");
    doctorInput.innerText = `Доктор: ${inputsValue[9].slice(
      1,
      inputsValue[9].lastIndexOf('"')
    )}`;
    let dateInput = document.createElement("p");
    dateInput.classList.add("userTalon-input");
    dateInput.innerText = `Дата приема: ${inputsValue[11].slice(
      1,
      inputsValue[11].lastIndexOf('"')
    )}`;
    let timeInput = document.createElement("p");
    timeInput.classList.add("userTalon-input");
    timeInput.innerText = `Время приема: ${inputsValue[13].slice(
      1
    )}:${inputsValue[14].slice(0, 2)}`;
    card.appendChild(firstnameInput);
    card.appendChild(lastnameInput);
    card.appendChild(birthdayInput);
    card.appendChild(doctorInput);
    card.appendChild(dateInput);
    card.appendChild(timeInput);
    const insert = document.querySelector(".userTalons-space");
    insert.appendChild(card);
  });
};
