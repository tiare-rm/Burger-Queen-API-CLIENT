// import { jsx } from "react/jsx-runtime";
import React from "react";
import { createRoot } from "react-dom/client"; //ReactDOM no lo soporta mi version de react 
import App from "./App";
// aquí se renderiza mi proyecto, tomar el código fuente de la app para ser 
// procesado y convertido a estructura DOM con sus nodos correspondientes.
// como SPA pero con react 
// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);


// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
