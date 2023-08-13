import React, { useState } from "react";
import "../style/Signup.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

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
  handleShow,
  baseURL,
  setCurrentUser,
  currentUser,
}) => {
  // const [newUserData, setNewUserData] = useState({
  //   name: "",
  //   email: "",
  //   passowrd: "",
  // });

  const addNewUser = (name, email) => {
    axios
      .post(`${baseURL}users/`, { name: name, email: email })
      .then((response) => {
        console.log(`response: ${response.data}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const createUser = (event, name, email) => {
  //   console.log(`NEW USER: ${name} • ${email}`);
  //   addNewUser(newUserData);
  //   setNewUserData({
  //     name: "",
  //     email: "",
  //     passowrd: "",
  //   });
  // };

  return (
    <Modal show={show} onHide={handleClose} className="auth-form-container">
      <Modal.Header closeButton>
        <Modal.Title>Hello Friend =]</Modal.Title>
      </Modal.Header>
      {/* body starts */}
      <Modal.Body>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Full name</label>
          <input
            className="login-input"
            // value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="full name"
            id="name"
            name="name"
          />
          <label htmlFor="email">email </label>
          <input
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password </label>
          <input
            // value={password}
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
        <Button
          id="log-in-button"
          type="submit"
          onClick={() => {
            addNewUser(name, email);
            setCurrentUser({ ...currentUser, email: email });
            console.log(`CURRENT USER person: ${currentUser.email} • ${email}`);
            handleClose();
            // createUser(null, newUserData.name, newUserData.email);
          }}
        >
          Sign Up
        </Button>

        <Button id="switch" onClick={() => onFormSwitch("login")}>
          Already have an account? Login here
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Signup;
