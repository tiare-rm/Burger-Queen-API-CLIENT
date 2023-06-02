// debo crear un formulario de inicio de sesion
// uso de credenciales (ver el mock)
// debo determinar el rol de usuario ya sea cocina, admin, mesero
// buscar acerca de las bibliotecas de enrutamiento
import React, { useState } from "react";
import styles from "./StyleSheets/Login.module.css";
import loginImg from "./imagenes/loginImg.png";
import logo from "./imagenes/logo.png";
import "./StyleSheets/fonts.css";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const history = useHistory(); //inicializo el hook de react 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const API_URL = 'http://localhost:8080/login';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, {
        email,
        password,
      }
      );
      const token = response.data.token;
      console.log(token);
      //aquí redireccionare al usuario a otra pagina despues de la autenticación
      history.push("/Pedidos")
    } catch (error) {
      console.error("Error en la autenticación:", error);
      if (!email) {
        setEmailError("Ingrese un correo electrónico válido");
      } else {
        setEmailError("");
      }
      if (!password) {
        setPasswordError("Ingrese una contraseña válida");
      } else {
        setPasswordError("");
      }
    }
  };

  return (
    <div>
      <img className={styles.logo} src={logo} alt="Logo" />
      <img className={styles.logoBottom} src={logo} alt="Logo" />
      <img
        className={styles.loginImg}
        src={loginImg}
        alt="Imagen de inicio de sesión"
      />
      <section className={styles.containerCafe}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ingresar Correo Electrónico"
            className={styles.inputEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className={styles.error}>{emailError}</p>}{"Ingresar Correo Válido"}
          <input
            type="password"
            placeholder="Ingresar Clave"
            className={styles.inputPassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className={styles.error}>{passwordError}</p>}{"Ingresar Clave Correcta"}
          <button type="submit" className={styles.buttonLogin}>
            ENTRAR
          </button>
        </form>
      </section>
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
