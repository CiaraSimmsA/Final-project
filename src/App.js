import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  
  return (
    
    <Router>
      <div className='my-container'>
      {/* header */}
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="login/" element={<Login/>} />
          <Route path="dashboard/" element={<Dashboard/>} />
        </Routes>
      {/* footer */}
      </div>
    </Router>
    
  );
}

export default App;
