// debo crear un formulario de inicio de sesion
// uso de credenciales (ver el mock)
// debo determinar el rol de usuario ya sea cocina, admin, mesero
// buscar acerca de las bibliotecas de enrutamiento
import React, { useState } from "react";
import { loginApi } from "../api";
import styles from "./StyleSheets/Login.module.css";
import loginImg from "./imagenes/loginImg.png";

const Login = () => {
  const [email, password] = useState("");

  return (
    <div>
      <img className={styles.loginImg} src={loginImg}></img>
      <div className="{styles.containerCafe}">
        <form>
          <input
            type="email"
            placeholder="Ingresar Correo Electrónico"
            className="{styles.inputLogin}"
          />
          <input
            type="password"
            placeholder="Ingresar Clave"
            className="{styles.inputLogin}"
          />
          <button type="submit" className="{styles.buttonLogin}">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

/* Mira pudes probar el siguiente codigo, es una funcion que lanza una peticion POST al endpoint de login

const getToken = async (email, password) => {
  const url = "http://localhost:8080/login"
  const data = {email, password};
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

getToken("anita.borg@systers.xyz", "123456").then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
}); */
