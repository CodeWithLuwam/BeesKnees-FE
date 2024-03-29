import React from "react";
import "../style/Login.css";
import { Modal, Button } from "react-bootstrap";

const Login = ({
  onFormSwitch,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  show,
  setShow,
  handleClose,
  handleShow
}) => {
  return (
    <Modal show={show} onHide={handleClose} className="auth-form-container">
      <Modal.Header closeButton>
          <Modal.Title>Hello Friend =]</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email </label>
        <input
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password </label>
        <input
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
      </form>
      </Modal.Body>     
      <Modal.Footer> 
        <Button id="login-button" type="submit" onClick={handleClose}>
          Log In
        </Button>
      <Button id="switch" onClick={() => onFormSwitch("Signup")}>
        Don't have an account? Register here
      </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Login;
