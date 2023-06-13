import styles from "../StyleSheets/Cocina.module.css";
import "../StyleSheets/fonts.css";
import logo from "../imagenes/logo.png";
import cocina from "../imagenes/cocina.png";

const Cocina = () => {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="Logo" />
      <img className={styles.cocina} src={cocina} alt="Title" />
    </div>
  );
};

export default Cocina;
