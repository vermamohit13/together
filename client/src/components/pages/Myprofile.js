import React, { PureComponent, useState,useEffect } from 'react';
import { useAuth } from '../../context/authcontext';
import Button from 'react-bootstrap/Button'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Fields from "./fields";
import pic from './profile.png';
import { useNavigate } from "react-router-dom";
import { collection, addDoc,setDoc,doc,getDoc } from "firebase/firestore";
import { db, auth, storage } from '../../firebase';
export default function Myprofile() {
    const navigate=useNavigate();
    const routeChange = () => {
        let path = `/home`;
        navigate(path);
    }
    const {currentUser}=useAuth();
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        if(currentUser){
            const getPosts = async () => {
                const docRef=doc(db,"userData",currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                  console.log("Document data:", docSnap.data());
                  setUserData(docSnap.data());
                } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                }
              };
              getPosts();
            }
    },[currentUser]);
    return (

        <div>
            {userData.length!==0&&
            <>
            <div className=" register">
                <div className="row container">
                    <div className="col-md-6 register-left">
                        <img src={pic} class="rounded-circle" alt="User" />
                        {currentUser && <h3>Hey!!<br />{currentUser.displayName}</h3>}
                        <br />
                        <h5>Please enter your interest in order to have a better experience!!</h5>
                        <br />
                        <Button size='lg' onClick={routeChange}>Back to home</Button>

                        <br />
                        <br />
                    </div>
                    <div className="col-md-6 register-right">

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Edit Your Profile:</h3>
                                <div className="row register-form">
                                    <div className="col-md-6" id="change">
                                        <div className="form-group">
                                            <input type="text" className="form-control" disabled={true} placeholder={userData.fname} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  disabled={true} placeholder={userData.lname} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"   disabled={true} placeholder={userData.State} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  disabled={true} placeholder={userData.city} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" disabled={true} placeholder={userData.college} />
                                        </div>

                                    </div>
                                    <div className="col-md-6" id="change">
            
                                            {userData.ai&&<span>AI</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
}
        </div>

    )
}

