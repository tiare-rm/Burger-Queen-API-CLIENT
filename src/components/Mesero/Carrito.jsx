import React, { useState } from "react";
import styles from "../StyleSheets/Mesero.module.css";

const Carrito = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState("");

  // Estado del carrito de compra
  const [cartItems, setCartItems] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    const productWithClientName = { ...product, clientName: name };
    setCartItems([...cartItems, productWithClientName]);
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Calcular el total del pedido
  const getTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2);
  };

  return (
    <div>
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

export default Carrito;