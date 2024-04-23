import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Aboutus from './aboutus';
import { useState } from 'react';
import MainComponent from './aboutus';

const AboutUS = () => {
  return(
    <div>
    This is the new component!
    here is the login page
    hello 
    ehiefndf
    defaultdf
    defaultdffd
    fdfd
    f
    </div>
  ) 
};

const ThemeSwitcher = () => { 
const [isOpen, setIsOpen] = useState(false);
const handleButtonClick = () => {
  setIsOpen(true);
};

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Medical Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                   <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <NavDropdown  title="Our Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">General Medicine</NavDropdown.Item>
<NavDropdown.Item href="#action4">Pediatrics</NavDropdown.Item>
<NavDropdown.Item href="#action4">Obstetrics & Gynecology</NavDropdown.Item>
<NavDropdown.Item href="#action4">Cardiology</NavDropdown.Item>
<NavDropdown.Item href="#action4">Orthopedics</NavDropdown.Item>


              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
   
<Nav.Link href="#action1">Doctors</Nav.Link>
<Nav.Link onClick={handleButtonClick}>About</Nav.Link>{isOpen && <AboutUS />}
<Nav.Link href="#action1">Contact</Nav.Link>
          </Nav>
          <Form>
          <Button  href="homepage.js" variant="outline-success" style={{marginRight: "35px"}}>Login</Button>
            <Button href="index.html" variant="outline-success">Registration</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ThemeSwitcher;