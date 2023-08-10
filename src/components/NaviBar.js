import { Link } from "react-router-dom";
import "../style/NaviBar.css";
import Button from "react-bootstrap/Button";

const NaviBar = ({
  show,
  setShow,
  handleShow
}) => {

  return (
    <div id="container">
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
      <Button className="nav-button" variant="primary" onClick={handleShow}>
        Sign In
      </Button>
    </div>
  );
};

export default NaviBar;
