import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Mesero from './components/Mesero/Mesero';
import './components/StyleSheets/fonts.css';
import Principal from './components/Principal';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mesero" element={<Mesero />} />
      </Routes>
    </Router>
  );
}

export default App;
