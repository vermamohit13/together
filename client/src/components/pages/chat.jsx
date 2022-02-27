import React, { useRef, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../../context/authcontext";

export default function Chats() {
  const didMountRef = useRef(false);
  const navigate=useNavigate();
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if ((!user&& currentUser)) { 
      if(!user)
      setUser(currentUser);
        let formdata = new FormData();
        console.log("please work")
      //  formdata.append("email", user.email);
        formdata.append("username", currentUser.email);
        formdata.append("secret", currentUser.uid);
          axios
            .put("https://api.chatengine.io/users/", formdata, {
              headers: {
                "PRIVATE-KEY": "bbf8acba-424e-4da8-8953-0f082de9ecb8",
              },
            })
            .then(() => setLoading(false))
            .catch((e) => console.log("e", e.response));
          }
  }, [currentUser]);
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
}
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
        <Button size='lg' onClick={routeChange}>TOGETHER</Button>
        </div>
      </div>
      {user && (!loading) &&
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="dbd8427c-68dd-495e-938e-e5686df0fda7"
        userName={user.email}
        userSecret={user.uid}
      />
}
    </div>
    
  );
}
