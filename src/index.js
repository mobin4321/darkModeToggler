import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header";
import MainContent from "./MainContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("here");
const Page = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }
  console.log(darkMode);
  return (
    <div className="container">
      <div className="window">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};
root.render(<Page />);
