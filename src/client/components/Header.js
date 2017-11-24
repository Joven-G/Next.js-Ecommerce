import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

import FormProcurar from './FormProcurar';

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logged: false
    };
  }
  // constructor(props) {
  //   super(props);
  //
  //   const isLogged = localStorage.getItem('logged');
  //   if (isLogged) {
  //
  //
  //   } else {
  //     this.state = { logged: false };
  //   }
  //
  //     // this.state = {
  //     //   logged:  localStorage.getItem("logged"),
  //     //   user_id: localStorage.getItem("user_id"),
  //     //   token:   }
  // }

  render() {
    let NavUsuario;
    let NavLogin;

    if (this.state.logged === true) {
      NavUsuario = (
        <Navbar.Text pullRight>
                  Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
        </Navbar.Text>
              );
      NavLogin = (
        <Nav pullRight>
          <NavItem eventKey={2} href="#">
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

    // console.log(this.state.logged);
    // console.log(NavUsuario);
    // console.log(NavLogin);

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
