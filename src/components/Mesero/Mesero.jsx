import React, { useState, useEffect } from "react";
import styles from "../StyleSheets/Mesero.module.css";
import logo from "../imagenes/logo.png";
import pedidos from "../imagenes/pedidos.png";
import "../StyleSheets/fonts.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Mesero = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  
  // declaro esta variable para almacenar el token de acceso traido de Login

  useEffect(() => {
    const fetchData = async () => {
      try {
        //verifico si el token esta disponible para usarlo en la solicitud get
        const token = localStorage.getItem("token");
  
        if (token) {
          const response = await axios.get("http://localhost:8080/products ", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

       {/* Renderiza los datos obtenidos */}
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}


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
              className={`${styles.button} ${
                selectedButton === "desayuno" ? styles.selectedButton : ""
              }`}
              onClick={() => handleButtonClick("desayuno")}
            >
              DESAYUNO
            </button>
          </li>
          <li>
            <button
              className={`${styles.button} ${
                selectedButton === "menu" ? styles.selectedButton : ""
              }`}
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
