import React from "react";
import "../style/Signup.css";
import { Modal, Button } from "react-bootstrap";

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
    <Modal show={show} onHide={handleClose} className="auth-form-container">
    <Modal.Header closeButton>
        <Modal.Title>Hello Friend =]</Modal.Title>
      </Modal.Header>
      {/* body starts */}
      <Modal.Body > 
    {/* <div className="auth-form-container"> */}
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
      </form> 
      </Modal.Body>
      {/* body ends */}

      {/* footer starts */}
      <Modal.Footer> 
        <Button id="log-in-button" type="submit">
          Sign Up
        </Button>
      
      <Button id="switch" onClick={() => onFormSwitch("login")}>
        Already have an account? Login here
      </Button>
      </Modal.Footer>

    {/* </div> */}
    </Modal>

  );
};

export default Signup;
