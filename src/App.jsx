import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Mesero from './components/Mesero/Mesero';
import Principal from './components/Principal';
import Admi from './components/Admi/Admi';
import Cocina from './components/Cocina/Cocina';
import './components/StyleSheets/fonts.css';
// IMPORTAR LAS PAGINAS QUE HAY QUE HACER !

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mesero" element={<Mesero />} />
        <Route path="/admi" element={<Admi />} />
        <Route path="/cocina" element={<Cocina />} />
        {/* <Route path="/trabajadores" element={<Trabajadores />} />
        <Route path="/inventario" element={<Inventario/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
