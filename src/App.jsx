import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App () {
    return   <Router>
    <Routes>
        <Route path='/' component={<Login/>} />
    </Routes>
    </Router>
}

export default App