import React from "react";
import "../style/Login.css";

const Login = ({
  onFormSwitch,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email </label>
        <input
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password </label>
        <input
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <button id="login-button" type="submit">
          Log In
        </button>
      </form>
      <button id="switch" onClick={() => onFormSwitch("Signup")}>
        Don't have an account? Register here
      </button>
    </div>
  );
};

export default Login;
