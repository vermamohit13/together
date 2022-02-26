import React from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const Navigate=useNavigate();
    function Handlelogout(e){
        e.preventDefault();
        localStorage.removeItem("token");
        Navigate('/');
    }
  return (
    <div className="App">
      <button onClick={Handlelogout}>logout</button>
    </div>
  );
}

export default  Dashboard;