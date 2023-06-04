import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import styles from "../StyleSheets/Mesero.module.css";
import logo from "../imagenes/logo.png";
import pedidos from "../imagenes/pedidos.png";
import NavBar from "./NavBar";
import "../StyleSheets/fonts.css";
import Carrito from "./Carrito";

const Mesero = () => {
  return (
    <div className="container">
      <img className={styles.logo} src={logo} alt="Logo" />
      <img className={styles.pedidos} src={pedidos} alt="Título pedidos" />
      <NavBar />
      <Carrito />
    </div>
  );
};

export default Mesero;
