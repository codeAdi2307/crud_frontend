import React, { useState } from 'react';
import './login.css';
import { signUp } from '../api.call';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

 



const SignUp = () => {

  const navigate = useNavigate();


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      if(!fullName && !email && !password){
        return "Data not entered"
      }
      let data = {
        fullname:fullName,
        email:email,
        password:password
      }
      const usersignup = await signUp(data);
      console.log("details");
      console.log(usersignup);

      // toast(usersignup.message);
      if(usersignup &&  usersignup.status === "success" ){
     
        navigate('/signin');

      }
      
    } catch (error) {
      console.log(error);
      // toast.error("Something Went Wrong");
    }

    
    console.log('Signing up...');
  };

  const handleSignIn = () => {
    // Implement sign in logic here
    console.log('Signing in...');
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <hr />

      <div className="input-group">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="sign-up-button" onClick={handleSignUp}>Sign Up</button>
      <hr />
      <p>Already have an account? <Link to="/signin" className="sign-in-button">
                  Sign In
                  </Link></p>
    </div>
  );
};

export default SignUp;
