
import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Ho from "./components/About";

import './App.css';
import Home from './components/Home';
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
            <Route exact path="/mycommunity" element={<PrivateRoute />}>
              <Route exact path="/mycommunity" element={<Dashboard />} />
            </Route>
            <Route exact path="/mycommunity" element={<PrivateRoute />}>
              <Route exact path="/mycommunity" element={<Dashboard />} />
            </Route>
            <Route exact path="/search" element={<PrivateRoute />}>
              <Route exact path="/search" element={<Dashboard />} />
            </Route>
            <Route exact path="/invitation" element={<PrivateRoute />}>
              <Route exact path="/invitation" element={<Dashboard />} />
            </Route>
            <Route exact path="/login" element={<Login />} />

            <Route exact path="/signup" element={<Signup />} />
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
