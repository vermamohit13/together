import React from "react";
import Navbr from '../Navbar';
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const Navigate = useNavigate();
  function Handlelogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    Navigate('/');
  }
  function Handleredirect(e) {
    e.preventDefault();
    Navigate('/mycommunity');
  }
  return (
      <>
        <Navbr />
      </>
      );
}

      export default  Dashboard;