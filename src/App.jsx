import React from 'react';
import createRoot from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App () {
    return   <Router>
    <Routes>
        <Route path='/' element={<Login/>} />
    </Routes>
    </Router>
}

export default App