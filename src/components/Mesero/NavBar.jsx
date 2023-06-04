import React, { useState } from "react";
import "../StyleSheets/NavBar.css";
import "../StyleSheets/fonts.css";

const NavBar = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <nav>
      <ul>
        <li>
          <button
            className={`font-custom ${
              selectedButton === "desayuno" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("desayuno")}
          >
            DESAYUNO
          </button>
        </li>
        <li>
          <button
            className={`font-custom ${
              selectedButton === "menu" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("menu")}
          >
            MENÚ
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
