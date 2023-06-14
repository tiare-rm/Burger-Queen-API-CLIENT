import styles from "../StyleSheets/Cocina.module.css";
import "../StyleSheets/fonts.css";
import logo from "../imagenes/logo.png";
import titlecocina from "../imagenes/titlecocina.png";
import atras from "../imagenes/atras.png";
import { Link } from "react-router-dom";

const Cocina = () => {
  // constante para la flecha de atras y se vaya a pagina principal
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <img className={styles.logo} src={logo} alt="Logo" />
      <img className={styles.titlecocina} src={titlecocina} alt="Title" />


      <Link to="/">
        <img
          className={styles.atras}
          src={atras}
          alt="atras"
          onClick={handleBackClick}
        />
      </Link>
    </div>
  );
};

export default Cocina;
