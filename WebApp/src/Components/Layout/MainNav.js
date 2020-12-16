import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Navbar, Nav, FormControl } from 'react-bootstrap';

const navStyles = {
    width: '100%',    
};

class MainNav extends React.Component {

  render() {
    
    const isAlert = false; 
    return (
      <div>            
        <Navbar bg="dark" variant="dark" fixed="top" width="100">
            <Navbar.Brand href="#home">ReactJS File Upload Demo</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#upload">Upload File</Nav.Link>
            </Nav>
        </Navbar>        
      </div>
    )
  }
}

export default MainNav
