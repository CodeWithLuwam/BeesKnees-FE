import React from 'react';
import { useState } from 'react';
import "../style/Login.css";

const Login = (props) => {
  const [ email, setEmail] = useState ('');
  const [ password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return (
      <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>     
        <label htmlFor="email">email </label>
        <input className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
        <label htmlFor="password">password </label>
        <input className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"/>
        <button id="login-button" type="submit">Log In</button>
      </form>
      <button id="switch" onClick={()=> props.onFormSwitch('Signup')}>Don't have an account? Register here</button>
      </div>

  )
}

export default Login;