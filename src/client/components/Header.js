import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

import FormProcurar from './FormProcurar';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    const isLogged = localStorage.getItem('logged');

    if (isLogged) {
      this.state = {
        logged: true,
        user_name: localStorage.getItem('user_name')
      }

    } else {
      this.state = {
        logged: false
      };
    }
  }

  render() {
    let NavUsuario;
    let NavLogin;

    if (this.state.logged === true) {
      NavUsuario = (
        <Navbar.Text pullRight>
                  Signed in as: <Navbar.Link href="#">{this.state.user_name}</Navbar.Link>
        </Navbar.Text>
              );
      NavLogin = (
        <Nav pullRight>
          <NavItem onClick={(e) => { localStorage.clear();
                                     window.location.reload(); } }>
            Logout
          </NavItem>
        </Nav>
              );
    } else {
      NavUsuario = (
        <Navbar.Text pullRight>
                  Signed in as: Visitante
                </Navbar.Text>
              );
      NavLogin = (
        <Nav pullRight>
          <NavItem eventKey={2} href="/login">
                    Login
                  </NavItem>
        </Nav>
              );
    }

    console.log(this.state.logged);
    console.log(NavUsuario);
    console.log(NavLogin);

    return (
      <div className="header">
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
            <NavItem eventKey={3} href="/carrinho">Carrinho</NavItem>
          </Nav>
          <FormProcurar />
        </Navbar>
      </div>
    );
  }
}
