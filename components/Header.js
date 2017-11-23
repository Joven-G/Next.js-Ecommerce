import React from 'react';
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import { HelpBlock } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

import FormProcurar from './FormProcurar';

const linkStyle = {
  marginRight: 15
}

export default class Header extends React.Component {

  state = {
    logged: true
  }

    render() {
          var NavUsuario
          var NavLogin

          if(this.state.logged === true){
              NavUsuario = (
                <Navbar.Text pullRight>
                  Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
                </Navbar.Text>
              )
              NavLogin = (
                <Nav pullRight>
                  <NavItem eventKey={2} href="#">
                    Logout
                  </NavItem>
                </Nav>
              )
          }else{
              NavUsuario = (
                <Navbar.Text pullRight>
                  Signed in as: Visitante
                </Navbar.Text>
              )
              NavLogin = (
                <Nav pullRight>
                  <NavItem eventKey={2} href="/login">
                    Login
                  </NavItem>
                </Nav>
              )
          }

          console.log(this.state.logged);
          console.log(NavUsuario);
          console.log(NavLogin);

          return (
            <div class="header">
              <Navbar fluid>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/">E-Commerce</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <NavItem eventKey={1} href="/">Home</NavItem>
                </Nav>
                <Nav>
                  <NavItem eventKey={2} href="/about">About</NavItem>
                </Nav>
                {NavLogin}
                {NavUsuario}
                <Nav pullRight>
                  <NavItem eventKey={3} href="#">Carrinho</NavItem>
                </Nav>
                <FormProcurar />
              </Navbar>
            </div>
      );
    }
}
