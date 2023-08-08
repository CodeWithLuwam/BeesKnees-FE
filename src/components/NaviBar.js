// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../style/NaviBar.css';
import { Icon } from '@iconify/react';

const NaviBar = () => {
  return (
    
      // <Navbar bg="dark" data-bs-theme="dark">
        <div id="container">
          {/* <Navbar.Brand href="/">Navbar</Navbar.Brand> */}
          {/* <Nav className="me-auto"> */}
            {/* <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/exercises"}>Exercises</Nav.Link> */}
            {/* <Icon icon="mdi:bee" color="gold" width="100" height="100" /> */}
            
            <Link to="/" id="home-page"> Home </Link> 
            <Link to="/exercises" id="exercises">Exercises</Link>
            <Link to="/tracker" id="tracker">Tracker</Link>
            {/* <Link to="about">Click to view our about page</Link> */}
          {/* </Nav> */}
        </div>
        );
  
  
};

export default NaviBar;