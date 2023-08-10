import React from "react";
import "../style/Signup.css";

const Signup = ({
  onFormSwitch,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  handleSubmit,
  show,
  setShow,
  handleClose,
  handleShow

}) => {
  return (
    <div className="auth-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Full name</label>
        <input
          className="login-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="full name"
          id="name"
          name="name"
        />
        <label htmlFor="email">email </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <button id="log-in-button" type="submit">
          Sign Up
        </button>
      </form>
      <button id="switch" onClick={() => onFormSwitch("login")}>
        Already have an account? Login here
      </button>
    </div>
  );
};

export default Signup;
