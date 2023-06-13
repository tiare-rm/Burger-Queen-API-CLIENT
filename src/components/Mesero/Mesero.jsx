import React, { useState, useEffect } from "react";
import styles from "../StyleSheets/Mesero.module.css";
import logo from "../imagenes/logo.png";
import pedidos from "../imagenes/pedidos.png";
import "../StyleSheets/fonts.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Mesero = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  console.log("Token de acceso:", token);

  const [name, setName] = useState("");
  const [products, setProducts] = useState("");

  // Estado del carrito de compra
  const [cartItems, setCartItems] = useState([]);

  // agregar un producto al carrito
  const addToCart = (product) => {
    const productWithClientName = { ...product, clientName: name };
    setCartItems([...cartItems, productWithClientName]);
  };

  // eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Calcula el total del pedido
  const getTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  
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
                selectedButton === "desayuno" ? styles.selected : ""
              }`}
              onClick={() => handleButtonClick("desayuno")}
            >
              DESAYUNO
            </button>
          </li>
          <li>
            <button
              className={`${styles.button} ${
                selectedButton === "menu" ? styles.selected : ""
              }`}
              onClick={() => handleButtonClick("menu")}
            >
              MENÚ
            </button>
          </li>
        </ul>
      </nav>

      {/* pendiente debo mostrar los productos de la carta */}
      {selectedButton === "desayuno" && (
        <div>
          {/* que debe pasar cuando se cumple la condicion del boton */}
          {products
            .filter((product) => product.category === "desayuno")
            .map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>
                  Agregar al carrito
                </button>
              </div>
            ))}
        </div>
      )}

      {selectedButton === "menu" && (
        <div>
          {/* que debe pasar cuando se cumple la condicion del boton*/}
          {products
            .filter((product) => product.category === "menu")
            .map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>
                  Agregar al carrito
                </button>
              </div>
            ))}
        </div>
      )}

      {/* Renderizar el carrito de compra */}
      <div className={styles.carrito}>
        <h2 className={styles.carritoTitle}>Carrito de Compra</h2>

        <div className={styles.informacionCliente}>
          <input
            type="text"
            placeholder="Nombre del cliente"
            className={styles.inputNombreCliente}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className={styles.productosSeleccionados}></div>
        </div>

        {cartItems.length === 0 ? (
          <p className={styles.nohayproductos}>
            No hay productos en el carrito
          </p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button
                  className={styles.eliminarCarrito}
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className={styles.total}>Total: ${getTotal()}</p>
      </div>
    </div>
  );
};

export default Mesero;
