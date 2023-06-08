import React, { useState } from "react"; // useState se usa para manejar el estado de componentes
import styles from "./StyleSheets/Login.module.css";
import loginImg from "./imagenes/loginImg.png";
import logo from "./imagenes/logo.png";
import "./StyleSheets/fonts.css";
// useNavigate se usa para navegar las rutas de mi app
import { Link, useNavigate } from "react-router-dom";
// solicito las HTTP como en mdLinks
import axios from "axios";
import atras from "./imagenes/atras.png";

const Login = () => {
  //inicializo el hook de react donde la variable navigate me permite usar navigate para cambiar de ruta
  const navigate = useNavigate();
 // constante para la flecha de atras y se vaya a pagina principal 
  const handleBackClick = () => {
    navigate("/");
  }; 
   // cada estado tiene las variable a usar que son correo y clave para el inicio de sesion
  const [email, setEmail] = useState("");
  // los valores estan vacios por el usario a logearse en la app
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // API de Sergio donde se enviarán los datos de inicio de sesión
  //al menos los de Ari (mesera) me sale POST /login 200
  const API_URL = "http://localhost:8080/login";

  //este controlador de eventos se ejecutara con el form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // uso try para reconocer los errores los cuales son captados por el catch de mi lógica
    try {
      //con el post envio los datos de inicio de sesion al servidor para ser aceptados
      const response = await axios.post(API_URL, {
        email,
        password,
      });
      //si la respuesta es exitosa se extrae la informacion rol de la propiedad user dentro de la data
      const { rol } = response.data.user;

      //con if hago comparaciones y declaro condiciones pero con switch gestiono una seleccion y
      // si no es valida hago lo del default
      switch (
        rol //se determina el valor rol
      ) {
        case "mesero":
          navigate("/mesero");
          break;
        case "cocina":
          navigate("/cocina");
          break;
        case "admin":
          navigate("/admin");
          break;
        default:
          navigate("/login");
      }
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

  // construcción del HTML de la interfaz
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
        {/*onSubmit se dispara cuando el formulario se ejecuta disparando el handleSubmit*/}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ingresar  Correo  Electrónico"
            className={styles.inputEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className={styles.error}>{emailError}</p>}
          <input
            type="password"
            placeholder="Ingresar  Clave"
            className={styles.inputPassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className={styles.error}>{passwordError}</p>}

          <button type="submit" className={styles.buttonLogin}>
            ENTRAR
          </button>
        </form>
      </section>
      <Link to="/">
        <img className={styles.atras} src={atras} alt="atras" onClick={handleBackClick} />
      </Link>
    </div>
  );
};

export default Login;
