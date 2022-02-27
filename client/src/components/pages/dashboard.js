import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Navbr from "../Navbar";
import Footer from "../Footer";


function Dashboard() {
  const Navigate = useNavigate();
  const [postLists, setPostList] = useState([]);
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
  return (
    <>
       <Navbr />
      <div className="Container">
        {postLists.map((post)=>{
        return (
      <div className="card" key={post.id} id="f">
      <div className="card-header">
        <h5 className="card-title">{post.gname}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{post.author}</p>
        <a href="#" className="btn btn-primary" id="hill">Go somewhere</a>
      </div>
    </div>
        )
      })}
     
      <Footer/>
      </div>
    </>
  );
}

export default Dashboard;