import styles from "../StyleSheets/Admi.module.css";
import "../StyleSheets/fonts.css";
import logo from "../imagenes/logo.png";
import titleAdmi from "../imagenes/titleAdmi.png";
import React from 'react';
import { Link } from 'react-router-dom';
import atras  from "../imagenes/atras.png";

const Admi = () => {
   // constante para la flecha de atras y se vaya a pagina principal
   const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <img className={styles.logo} src={logo} alt="Logo" />
      <img className={styles.titleAdmi} src={titleAdmi} alt="Title" />
   {}
    <section className={styles.containerAdmi}>
    <Link to="/trabajadores" className={styles.buttonTrabajadores}>
        Trabajadores
      </Link>
      <Link to="/inventario" className={styles.buttonInventario}>
        Inventario
      </Link>
    </section>

    <Link to="/">
        <img
          className={styles.atras}
          src={atras}
          alt="atras"
          onClick={handleBackClick}
        />
      </Link>
    </div>
  );
};

export default Admi;
