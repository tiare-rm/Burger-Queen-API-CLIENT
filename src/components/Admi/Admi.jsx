import styles from "../StyleSheets/Admi.module.css";
import "../StyleSheets/fonts.css";
import logo from "../imagenes/logo.png";
import admi from "../imagenes/admi.png";

const Admi = () => {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="Logo" />
      <img className={styles.admi} src={admi} alt="Title" />
    </div>
  );
};

export default Admi;
