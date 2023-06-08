import React, { useState } from "react";
import styles from "../StyleSheets/Mesero.module.css";
import logo from "../imagenes/logo.png";
import pedidos from "../imagenes/pedidos.png";
import "../StyleSheets/fonts.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Mesero = () => {
    // nav bar botones de filtro 
    const [selectedButton, setSelectedButton] = useState("");
    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName);
    };
  
    return (
        <div>
          <img className={styles.logo} src={logo} alt="Logo" />
          <img className={styles.pedidos} src={pedidos} alt="Pedidos" />
          <nav>
            <ul>
              <li>
                <button
                  className={`${styles.button} ${selectedButton === "desayuno" ? styles.selected : ""}`}
                  onClick={() => handleButtonClick("desayuno")}
                >
                  DESAYUNO
                </button>
              </li>
              <li>
                <button
                  className={`${styles.button} ${selectedButton === "menu" ? styles.selected : ""}`}
                  onClick={() => handleButtonClick("menu")}
                >
                  MENÚ
                </button>
              </li>
            </ul>
          </nav>
        </div>
      );
    };      

export default Mesero;