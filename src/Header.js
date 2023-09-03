import React from "react";
import logo from "./images/react-logo.png";
export default function Header(props) {
  return (
    <header>
      <nav className={`navbar ${props.darkMode ? "" : "white"}`}>
        <div className="nav-left">
          <img className="nav-left-logo" src={logo} alt="react logo" />
          <h1 className="nav-left-heading">ReactFacts</h1>
        </div>

        <div className="toggler">
          <p className="toggler-light">Light</p>
          <div className="toggler-slider" onClick={props.toggleDarkMode}>
            <div className="toggler-slider-circle"></div>
          </div>
          <p className="toggler-dark">Dark</p>
        </div>
      </nav>
    </header>
  );
}
