import "./StyleSheets/fonts.css";
// useNavigate se usa para navegar las rutas de mi app
// uso LINk para crear enlaces en la interfaz de usuario haciendo click entre ellos
// mientras que navigate usa l anavegación programatica para cambiar de ruta en respuesta
// a acciones o eventos especificos
import { Link } from "react-router-dom";
import styles from "./StyleSheets/Index.module.css";
import logofinal from './imagenes/logofinal.png';

function Principal() {
    return (
      <div>
        <div className="containerFoto">
          <img className={styles.logofinal} src={logofinal} alt="Logo" />
        </div>
        <div className={styles.containerPrincipal}>
          <Link to="/login">
            <button className={styles.buttonAdmi}>
              <span className={styles.buttonText}>ADMINISTRADOR</span>
            </button>
          </Link>
          <Link to="/login">
            <button className={styles.buttonMesero}>
              <span className={styles.buttonText}>MESERO</span>
            </button>
          </Link>    
          <Link to="/login">
            <button className={styles.buttonCocina}>
              <span className={styles.buttonText}>COCINA</span>
            </button>
          </Link>      
        </div>
      </div>
    );
  }
  
  export default Principal;
  