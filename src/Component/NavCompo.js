import React from 'react'
import { Navbar,Container,NavDropdown } from 'react-bootstrap'
import { CryptoState } from '../Context/CryptoContext'

const Header = () => {
    
const{currency, setCurr}= CryptoState()
console.log(currency)
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/" sticky="top" id='Nav-head'>
        Crypto Hunter
      </Navbar.Brand>
      <NavDropdown title={currency} id="navbarScrollingDropdown" 
    //    onChange={(e)=>setCurr(e.target.value)}
       >
              <NavDropdown.Item onClick={()=>setCurr('INR')}>INR</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>setCurr('USD')}>USD</NavDropdown.Item>
            
            </NavDropdown>
    </Container>
  </Navbar>
  )
}

export default Header