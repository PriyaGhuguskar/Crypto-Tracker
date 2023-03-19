import React from 'react'
import { Container,Navbar ,Nav} from 'react-bootstrap';


const NavCompo = () => {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SPACEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Falcon 9</Nav.Link>
            <Nav.Link href="#pricing">Falcon Heavy</Nav.Link>
            <Nav.Link href="#pricing">Dragon</Nav.Link>
            <Nav.Link href="#pricing"> Starship</Nav.Link>
           
            <Nav.Link href="#pricing">Mission</Nav.Link>
            <Nav.Link href="#pricing">Launches</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            <Nav.Link href="#pricing">Updates</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">Shop</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    </>
  )
}

export default NavCompo