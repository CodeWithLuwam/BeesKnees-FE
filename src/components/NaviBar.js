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
  currentUser,
  setCurrentUser,
  baseURL,
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
          baseURL={baseURL}
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
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

      {currentUser.name ? (
        <Button
          className="nav-button"
          variant="primary"
          onClick={() => {
            setCurrentUser({});
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
