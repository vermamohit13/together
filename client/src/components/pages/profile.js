import React, { PureComponent, useState } from 'react';
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
import { collection, addDoc,setDoc,doc } from "firebase/firestore";
import { db, auth, storage } from '../../firebase';
export default function Profile() {
    const routeChange = () => {
        let path = `/home`;
        navigate(path);
    }
    const [ml,setMl]=useState(false);
  const [cp,setCp]=useState(false);
  const [cs,setCs]=useState(false);
  const [ai,setAi]=useState(false);
  const [sig,setSig]=useState(false);
  const [com,setCom]=useState(false);
  const [mat,setMat]=useState(false);

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
        const newRef= doc(db,"userData",currentUser.uid);
        const added = await setDoc(newRef, {
            fname,
            lname,
            state,
            city,
            email,
            college,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            interests:{ml:ml,cp:cp,cs: cs,ai:ai,sig:sig,com:com,mat:mat},
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

                                        <FormControl component="fieldset">
      <label>Please indicate the fields in which you are interested :</label>
      <FormGroup aria-label="position" row>
        <FormLabel component="legend">Technical:</FormLabel>

        <FormControlLabel
          value="ml"
          onChange={(e) => setMl((d)=>(!d))}
          control={<Checkbox />}
          label="Machine Learning"
        />
        <FormControlLabel
          value="cp"
          onChange={(e) => setCp((d)=>(!d))}
          control={<Checkbox />}
          label="Competitive Programming"
        />
        <FormControlLabel
          value="cybersecurity"
          onChange={(e) => setCs((d)=>(!d))}
          control={<Checkbox />}
          label="Cyber Security"
        />
        <FormControlLabel
          value="AI"
          onChange={(e) => setAi((d)=>(!d))}
          control={<Checkbox />}
          label="Artificial Intelligence "
        />
        <FormLabel component="legend">Electrical:</FormLabel>

        <FormControlLabel
          value="signals"
          onChange={(e) => setSig((d)=>(!d))}
          control={<Checkbox />}
          label="Analog / Mixed Signals"
        />
        <FormControlLabel
          value="material"
          onChange={(e) => setMat((d)=>(!d))}
          control={<Checkbox />}
          label="Materials And Devices"
        />
        <FormLabel component="legend">Others:</FormLabel>

        <FormControlLabel
          value="games"
          control={<Checkbox />}
          label="Games"
        />
        <FormControlLabel
          value="communication"
          control={<Checkbox />}
          label="Communication "
        />
        <FormControlLabel
          value="material"
          control={<Checkbox />}
          label="Materials And Devices"
        />
        <FormControlLabel
          value="photonics"
          control={<Checkbox />}
          label="Photonics"
        />


      </FormGroup>
    </FormControl>


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

