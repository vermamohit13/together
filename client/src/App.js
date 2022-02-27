import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import PrivateRoute from './components/privateRoute';
import Dashboard from './components/pages/dashboard';
import Community from './components/Community';
import Group from './components/Group'
import Profile from './components/pages/profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mygroup from './components/Mygroup';
import AuthContextProvider from './context/authcontext';
function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<PrivateRoute />}>
              <Route exact path="/home" element={<Dashboard />} />
            </Route>
            <Route exact path="/mycommunity" element={<PrivateRoute />}>
              <Route exact path="/mycommunity" element={<Community/>} />
            </Route>
            <Route exact path="/group" element={<PrivateRoute />}>
              <Route exact path="/group" element={<Group/>} />
            </Route>
            <Route exact path="/mygroup" element={<PrivateRoute />}>
              <Route exact path="/mygroup" element={<Mygroup/>} />
            </Route>
            <Route exact path="/profile" element={<PrivateRoute />}>
              <Route exact path="/profile" element={<Profile/>} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
          </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;