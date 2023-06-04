import React, { useState } from "react";
import styles from "../StyleSheets/Carrito.module.css";
import "../StyleSheets/fonts.css";

function Carrito() {
  const [clientName, setClientName] = useState("");
  const [cart, setCart] = useState([]);

  const handleCustomerNameChange = (event) => {
    setClientName(event.target.value);
  };

  const renderCartItem = (product, index) => {
    return (
      <div key={index} className="cart-item">
        <section className="item-info">
          <h4 className="name">{product.name}</h4>
          <p>Precio: ${product.price}</p>
          <p>Cantidad: {product.quantity}</p>
          <div className="button-group">
            <button onClick={() => increaseQuantity(product)}>+</button>
            <button onClick={() => decreaseQuantity(product)}>-</button>
          </div>
          <button onClick={() => removeFromCart(product)}>Eliminar producto</button>
        </section>
      </div>
    );
  };

  const increaseQuantity = (product) => {
    // Incrementar la cantidad del producto en el carrito
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    // Decrementar la cantidad del producto en el carrito
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    // Eliminar el producto del carrito
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    // Calcular el total de la compra
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const sendOrder = () => {
    // Enviar la orden
    // Aquí puedes agregar la lógica para enviar la orden o realizar alguna acción adicional
    console.log("Order sent!");
  };

  const backToMenu = () => {
    // Volver al menú principal
    // Aquí puedes agregar la lógica para volver al menú principal o realizar alguna acción adicional
    console.log("Back to menu!");
  };

  return (
    <section className={styles.containerCarrito}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="mb-4">
              <h3 className="fw-normal mb-0 text-black">Carrito de Pedidos</h3>
            </div>

            <div className="card mb-4">
              <div className="card-body p-4">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="NombreCliente"
                    placeholder="Nombre Cliente"
                    className="form-control form-control-lg"
                    value={clientName}
                    onChange={handleCustomerNameChange}
                  />
                </div>

                <div className="row d-flex justify-content-between align-items-center">
                  {cart.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                  ) : (
                    <>
                      {cart.map((product, index) => renderCartItem(product, index))}
                      <button className="Send" onClick={sendOrder}>
                        Enviar Orden: ${calculateTotal()}
                      </button>
                      <h4 onClick={backToMenu}>Volver al Menú</h4>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrito;


