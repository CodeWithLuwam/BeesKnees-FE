import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Exercise from './Exercise';
import ExercisesList from './ExercisesList';

const NaviBar = ({baseURL}) => {
  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/exercises"}>Exercises</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/exercises"
          element={<ExercisesList baseURL={baseURL}></ExercisesList>}/></Routes>
        
    
    </Router>
  );
};

export default NaviBar;