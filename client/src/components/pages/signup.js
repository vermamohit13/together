import React from 'react'
import { useState } from 'react'
import { useAuth } from "../../context/authcontext";
import { auth } from '../../firebase';
import { useNavigate, useLocation } from "react-router-dom";
import useMounted from "../../hooks/useMounted";
import s1 from '../../img/4204968.jpg';
import { Alert} from "react-bootstrap";
import { updateProfile } from "firebase/auth";
function Signup() {
    const Navigate = useNavigate();
    const { register } = useAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName]= useState("");
    const [confirmpassword,setconfirmPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = useLocation();
    const [error, seterror] = useState("");
    const mounted = useMounted();
  
    async function handleRedirectToOrBack() {
      console.log(location?.state);
      Navigate("/home", { replace: true });
    }
    async function handlesubmit(e) {
      e.preventDefault();
      console.log(location?.state);
      if (password !== confirmpassword) {
        seterror("Password doesn't match");
        return;
      }
      if(password.length<6)
     {  seterror("Password should be of atleast 6 Characters");
       return;
    }
    if(name===""){
      seterror("Please enter all mandatory fields")
      return;
    }
      setIsSubmitting(true);
      register(email, password)
        .then((response) => {
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          
          updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
         console.log(auth.currentUser.displayName)
          }).catch((error) => {
            // An error occurred
            // ...
          });
          handleRedirectToOrBack();
        })
        .catch((error) => {
          console.log(error.message);
          seterror("Failed to login");
        })
        .finally(() => {
          mounted.current && setIsSubmitting(false);
        });
    }

	return (
		<div className='main'>
            <section className="signup">
              
  <div className="container">
    <div className="signup-content">
      <div className="signup-form">
        <h2 className="form-title">Sign up</h2>
        {error&&<Alert id="alert" variant="danger">{ error} </Alert>}
        <form method="POST" className="register-form" id="register-form">
          <div className="form-group">
            <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
            <input type="text" name="name" id="name" value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
            <input type="email" name="email" id="email"	value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
                    placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
            <input type="password" name="pass" id="pass" value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
            <input type="password" name="re_pass" id="re_pass" value={confirmpassword}
					onChange={(e) => setconfirmPassword(e.target.value)}
					placeholder="confirm your Password"/>
          </div>
          <div className="form-group form-button">
            <input type="submit" name="signup" id="signup" onClick={handlesubmit} className="form-submit" defaultValue="Register" />
          </div>
        </form>
      </div>
      <div className="signup-image">
        <img src={s1} alt="sing up image" />
        <a href="/login" className="signup-image-link">I am already member</a>
      </div>
    </div>
  </div>
</section>

		</div>
	)
}

export default Signup