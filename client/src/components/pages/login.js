import React from 'react'
import { useState } from 'react'
import { useAuth } from "../../context/authcontext";
import { useNavigate, useLocation } from "react-router-dom";
import useMounted from "../../hooks/useMounted";
import s1 from '../../img/4204968.jpg';
import { Alert} from "react-bootstrap";
function Login() {
    const Navigate = useNavigate();
    const { login } = useAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = useLocation();
    const [error, seterror] = useState("");
    const mounted = useMounted();
  
    function handleRedirectToOrBack() {
      console.log(location?.state);
      Navigate("/home", { replace: true });
    }
    
  async function handlesubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      seterror("Failed to login");
      return;
    }
    login(email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
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
            <section className="sign-in">
  <div className="container">
    <div className="signin-content">
      <div className="signin-image">
       <img src={s1} alt="sing up image" />
        <a href="/signup" className="signup-image-link">Create an account</a>
      </div>
     
      <div className="signin-form">
        <h2 className="form-title">Login </h2>
        {error&& <Alert id="alert" variant="danger">{error}</Alert> }
        <form method="POST" className="register-form" id="login-form">
          <div className="form-group">
            <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
            <input  name="your_name" id="your_name" 	value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
            <input  name="your_pass" id="your_pass" value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"/>
          </div>
         
          <div className="form-group form-button">
            <input type="submit" name="signin" id="signin" className="form-submit" onClick={handlesubmit} defaultValue="Log in" />
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

		</div>
	)
}

export default Login;