import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s1 from '../img/4204968.jpg'
import { Alert} from "react-bootstrap";
function Signup() {
    const Navigate=useNavigate();
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [confirmpassword, setconfirmPassword] = useState('')
    const [error,setError]=useState('');
	async function registerUser(event) {
		event.preventDefault()
    if(password!=confirmpassword){
      setError("password does not match")
      return ;
    }
    if(password.length<7){
      setError("Password should have greater than 6 characters ")
      return;
    }
		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
		if (data.status === 'ok') {
			localStorage.setItem('token', true);
            Navigate("/home");
		}
    else{
      setError("Failed to login")
    }
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
            <input type="submit" name="signup" id="signup" onClick={registerUser} className="form-submit" defaultValue="Register" />
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
