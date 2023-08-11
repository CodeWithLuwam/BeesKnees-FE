import { Link } from "react-router-dom";
import "../style/NaviBar.css";
import Button from "react-bootstrap/Button";
import Login from "./Login";
import Signup from "./Signup";

const NaviBar = ({
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
  currentForm,
  setCurrentForm,
  currentUser,
  setCurrentUser,
  userData,
  setUserData,
  exerciseData,
  setExerciseData,
}) => {
  return (
    <div id="container">
      {currentForm === "login" ? (
        <Login
          id="login"
          onFormSwitch={onFormSwitch}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          show={show}
          setShow={setShow}
          handleShow={handleShow}
          handleClose={handleClose}
          currentForm={currentForm}
        />
      ) : (
        <Signup
          onFormSwitch={onFormSwitch}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          show={show}
          setShow={setShow}
          handleShow={handleShow}
          handleClose={handleClose}
          name={name}
          setName={setName}
          currentForm={currentForm}
        />
      )}

      <Link to="/" id="home-page">
        Home
      </Link>
      <Link to="/exercises" id="exercises">
        Exercises
      </Link>
      <Link to="/tracker" id="tracker">
        Tracker
      </Link>
      <Link to="/history" id="tracker">
        History
      </Link>

      {/* condition ? <expression if true> : <expression if false> */}

      {/* 
      condition = currentUSer 
      true === Sign out
      false = Sign in
      */}

      {currentUser ? (
        <Button
          className="nav-button"
          variant="primary"
          onClick={() => {
            setCurrentUser("");
            setEmail("");
          }}
        >
          Sign Out
        </Button>
      ) : (
        <Button className="nav-button" variant="primary" onClick={handleShow}>
          Sign In
        </Button>
      )}
    </div>
  );
};

export default NaviBar;
