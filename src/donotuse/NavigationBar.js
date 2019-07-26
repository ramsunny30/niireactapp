import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
//import { whileStatement } from '@babel/types';

const Styles = styled.div`
  .navbar { 
      background-color : #222;
     }

a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color: white;
    }
}
`;
 export const NavigationBar = () => (
     <Styles>
         <Navbar expand="lg">
         <Navbar.Brand href="/">NII</Navbar.Brand>
         <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/Events">Events</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/Test">Test</Nav.Link></Nav.Item>
         {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/Join">Join</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
          </Nav>
          </Navbar.Collapse>
         </Navbar>
     </Styles>
 )