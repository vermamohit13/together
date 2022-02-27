import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Navbr from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import {useAuth} from "../../context/authcontext";
function Dashboard() {
  const Navigate = useNavigate();
  const [postLists, setPostList] = useState([]);
  const [user,setUser]=useState([]);
  const {currentUser}=useAuth();
  function Handlelogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    Navigate('/');
  }
  function Handleredirect(e) {
    e.preventDefault();
    Navigate('/mycommunity');
  }
  useEffect(() => {
    const getPosts = async () => {
      const postsCollectionRef = collection(db, "Community");
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    
    };
    getPosts();
  }, []);
  useEffect(() => {
   setUser(currentUser);
  }, [currentUser]);
  return (
    <>
       <Navbr />
     
      <Footer/>
    </>
  );
}

export default Dashboard;