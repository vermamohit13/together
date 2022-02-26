
import './App.css';
import React from 'react';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import PrivateRoute from './components/privateroute';
import Dashboard from './components/pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<PrivateRoute />}>
              <Route exact path="/home" element={<Dashboard />} />
            </Route>
            <Route exact path="/login" element={<Login />} />

            <Route exact path="/signup" element={<Signup />} />
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
