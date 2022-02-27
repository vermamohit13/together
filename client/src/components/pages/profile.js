import React, { PureComponent, useState } from 'react';
import { useAuth } from '../../context/authcontext';
import Button from 'react-bootstrap/Button'
import Fields from "./fields";
import pic from './profile.png';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, auth, storage } from '../../firebase';
export default function Profile() {
    const routeChange = () => {
        let path = `/home`;
        navigate(path);
    }
    const { currentUser } = useAuth();
    let navigate = useNavigate();
    const postsCollectionRef = collection(db, "posts");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [isdisabled, setIsDisabled] = useState(false)
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [error, seterror] = useState("");
    const [email, setemail] = useState("");
    const [college, setcollege] = useState("");
    const handleFormData = async (e) => {
        e.preventDefault();
        setIsDisabled(true);
        if ((fname === "" || lname === "" || state === "" || city === "" || email === "" || college === "")) {
            seterror("please fill all fields")
            setIsDisabled(false);
            return;
        }
        const added = await addDoc(postsCollectionRef, {
            fname,
            lname,
            state,
            city,
            email,
            college,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        if (added)
            navigate("/home");
    };
    return (

        <div>
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
                                            <input type="text" className="form-control" onChange={(event) => {
                                                setfname(event.target.value);
                                            }} placeholder="First Name *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={(event) => {
                                                setlname(event.target.value);
                                            }} placeholder="Last Name *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={(event) => {
                                                setstate(event.target.value);
                                            }} placeholder="Your  State" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={(event) => {
                                                setcity(event.target.value);
                                            }} placeholder="Your City" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={(event) => {
                                                setcollege(event.target.value);
                                            }} placeholder="Your College" />
                                        </div>

                                    </div>
                                    <div className="col-md-6" id="change">
                                        <div className="form-group">

                                            <input type="email" className="form-control" onChange={(event) => {
                                                setemail(event.target.value);
                                            }} placeholder="Your Email *" />

                                        </div>

                                        <Fields />


                                        <input type="submit" onClick={handleFormData} className="btnRegister" defaultValue="Register" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

