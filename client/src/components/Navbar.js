import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav ,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Navbr() {
  const Navigate = useNavigate();
  function Handlelogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    Navigate('/');
  }
  function Handleredirect(e) {
    e.preventDefault();
    Navigate('/mycommunity');
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Together</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Search</Nav.Link>
              <Nav.Link href="#features">Invitations</Nav.Link>
              <Nav.Link href="#pricing" onClick={Handleredirect}>Community</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={Handlelogout}>logout</Nav.Link>
              <Nav.Link href="/profile" >Profile</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
