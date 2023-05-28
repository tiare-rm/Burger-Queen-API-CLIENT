import React, { useState } from "react";
import login from "../imagenes";
import { useHistory } from "react-router-dom";
import { login } from "../api";
// debo crear un formulario de inicio de sesion
// uso de credenciales (ver el mock)
// debo determinar el rol de usuario ya sea cocina, admin, mesero
// buscar acerca de las bibliotecas de enrutamiento

const loginForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // ?????? aqui debo verificar las credenciales seguir buscando info de eso
    // y como usarlo de acuerdo a mis usuarios y codigo
    // usar bloque catch??? para manejar los errores
    // revisar de nuevo :(
    // redireccion de acuerdo al rol
    if (role === "admin") {
      history.push("/admin");
    } else if (role === "mesero") {
      history.push("/mesero");
    } else if (role === "cocina") {
      history.push("/cocina");
    }
  };
  return (
    <div>
      <img src={login} alt="login" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
export default loginForm;
