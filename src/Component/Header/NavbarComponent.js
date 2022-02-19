import React from 'react'
import {Navbar, Nav , Container} from 'react-bootstrap';
import { FaFonticons} from "react-icons/fa";
const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home"><div className='logo'><FaFonticons/></div></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Dashboard</Nav.Link>
              <Nav.Link href="#pricing">All Projects</Nav.Link>
              <Nav.Link href="#pricing">Members</Nav.Link>
              <Nav.Link href="#pricing">Stats</Nav.Link>
              <Nav.Link href="#pricing">Help</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"> Dhiraj <br />Verma</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                  <img src="../images/pro.png" alt="Admin Image"></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent