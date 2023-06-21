import React, { useState } from "react";
import styles from "../StyleSheets/Mesero.module.css";
import "../StyleSheets/fonts.css";

const Carrito = ({ cartItems, setCartItems, setClientName }) => {
  const [name, setName] = useState("");

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Calcular el total del pedido
  const getTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2);
  };

  // boton para cancelar la orden
  const cancelOrder = () => {
    setCartItems([]);
    setName("");
  };

  // envio la orden a la cocina
  const sendToKitchen = () => {
    // trabajar en la logica y redireccion del item a la pagina de la cocina
    console.log("Pedido enviado a la cocina:", cartItems);
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
        </div>

        {cartItems.length === 0 ? (
          <p className={styles.nohayproductos}>
            No hay productos en el carrito
          </p>
        ) : (
          <ul className={styles.containerProductos}>
            {cartItems.map((item) => (            
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <button
                    className={styles.eliminarCarrito}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar Producto
                  </button>
                </li>            
            ))}
          </ul>
        )}

        <p className={styles.total}>Total: ${getTotal()}</p>
        <button className={styles.botonEnviar} onClick={sendToKitchen}>
          Enviar a Cocina
        </button>
        <button className={styles.botonCancelar} onClick={cancelOrder}>
          Cancelar Orden
        </button>
      </div>
    </div>
  );
};

export default Carrito;
