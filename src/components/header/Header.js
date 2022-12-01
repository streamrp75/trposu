import "./Header.css";
import logo from "./assets/Telegram_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__contacts">
          <div className="header__contacts-numbers">
            <p className="row1">
              <span>Free call</span>
              <span>+375295554400</span>
            </p>
            <p className="row2">Minsk, 28 Y.Kolasa street, office 919</p>
          </div>
          <div className="header__contacts-logo">
            <img src={logo} alt="logo" className="logoTelegram" />
          </div>
        </div>
        <div className="head__header">
          <p className="head__header-text">Health</p>
          <p className="head__header-subtext">Central clinic</p>
        </div>
        <div className="header__hours">
          <div className="header__contacts-logo">
            <img src={logo} alt="logo" className="logoTelegram" />
          </div>
          <div className="header__hours-timetable">
            <p className="row3">Open Hours</p>
            <p className="row4">
              Mon-Sat:
              <span>8:00am - 9:00pm</span>
              Sun: Closed
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
    </header>
  );
};

export default Header;
