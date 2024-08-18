import React, { useState } from 'react';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../api.call';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();  // Prevent the default form submission

    try {
      if (!email || !password) {
        return console.log("Details Not Given");
        ;
      }

      const data = { email, password };

      const usersignin = await signIn(data);
      console.log("Sign-in response:", usersignin);

      if (usersignin && usersignin.status === "success") {
         localStorage.setItem("token", usersignin.token);
         navigate('/task');
         window.location.reload();
      } 
    } catch (error) {
      console.log("Sign-in error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={handleSignIn}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-up-button">Sign In</button>
      </form>
      <hr />
      <p className='test'>Not Registered? Register Now  
        <Link to="/signup" className="sign-up-button">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
