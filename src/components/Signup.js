import React from 'react';
import { useState } from 'react';
import "../style/Signup.css";



const Signup = (props) => {
  const [ email, setEmail] = useState ('');
  const [ password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="auth-form-container">
    <form className="signup-form" onSubmit={handleSubmit}> 
      <label>Full name</label>    
      <input className="login-input" value={name} name="name" id="name" placeholder="full name" /> 
      <label htmlFor="email">email </label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
      <label htmlFor="password">password </label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"/>
      <button id="log-in-button" type="submit">Sign Up</button>
    </form>
      <button id="switch" onClick={()=> props.onFormSwitch('login')}>Already have an account? Login here</button>
    </div>

  )
}

export default Signup;