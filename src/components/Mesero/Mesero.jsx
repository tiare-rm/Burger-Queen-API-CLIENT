import React, { useState, useEffect } from "react";
import styles from "../StyleSheets/Mesero.module.css";
import logo from "../imagenes/logo.png";
import pedidos from "../imagenes/pedidos.png";
import axios from "axios";
import Carrito from "./Carrito";

const productsTypes = { desayuno: "Desayuno", menu: "Menu" };

const Mesero = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState(productsTypes.desayuno);
  const [cartItems, setCartItems] = useState([]);
  const [clientName, setClientName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await axios.get("http://localhost:8080/products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
         
          setOriginalData(response.data);
          setLoading(false);

          const filtered = response.data.filter(
            (product) => product.type === productsTypes.desayuno
          );
          setFilteredData(filtered);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === productsTypes.desayuno) {
      const filtered = originalData.filter(
        (product) => product.type === productsTypes.desayuno
      );
      setFilteredData(filtered);
    } else if (buttonName === productsTypes.menu) {
      const filtered = originalData.filter(
        (product) => product.type === productsTypes.menu
      );
      setFilteredData(filtered);
    } 
  };

 const addToCart = (product) => {
    const productWithClientName = { ...product, clientName };
    setCartItems([...cartItems, productWithClientName]);
  };
  
  const handleProductClick = (product) => {
    if (selectedProduct && selectedProduct.id === product.id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
      addToCart(product);
    }
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
                selectedButton === productsTypes.desayuno
                  ? styles.selectedButton
                  : ""
              }`}
              onClick={() => handleButtonClick(productsTypes.desayuno)}
            >
              DESAYUNO
            </button>
          </li>
          <li>
            <button
              className={`${styles.button} ${
                selectedButton === productsTypes.menu
                  ? styles.selectedButton
                  : ""
              }`}
              onClick={() => handleButtonClick(productsTypes.menu)}
            >
              MENU
            </button>
          </li>
        </ul>
      </nav>
      
      {/* se filtra cada producto dependiendo del boton del nav */}
      <div className={styles.divMayor}>
        {filteredData.map((product) => (
          <div
            key={product.id}
            className={`${styles.container} ${
              selectedProduct && selectedProduct.id === product.id
                ? styles.selectedContainer
                : ""
            }`}
            onClick={() => handleProductClick(product)
          }
          >
            <img src={product.image} className={styles.image} />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>

        {/* se agrega aquí el componente del Carrito*/}
        <Carrito cartItems={cartItems} setCartItems={setCartItems} setClientName={setClientName} />
    </div>
  );
};

export default Mesero;
