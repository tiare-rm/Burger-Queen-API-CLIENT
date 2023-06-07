import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import styles from "../StyleSheets/Mesero.module.css";
import logo from "../imagenes/logo.png";
import pedidos from "../imagenes/pedidos.png";
import NavBar from "./NavBar";
import "../StyleSheets/fonts.css";
import Carrito from "./Carrito";

const Mesero = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Realizar solicitud HTTP a la API para obtener los productos
        axios.get("http://localhost:8080/products")
          .then(response => {
            // Obtener los datos de la respuesta y establecerlos en el estado
            setProductos(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      
  return (
    <div className="container">
      <img className={styles.logo} src={logo} alt="Logo" />
      <img className={styles.pedidos} src={pedidos} alt="Título pedidos" />
      <NavBar />
      <Carrito productos={productos}/>
    </div>
  );
};

export default Mesero;
