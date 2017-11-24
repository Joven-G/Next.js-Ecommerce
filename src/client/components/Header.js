import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';

import FormProcurar from './FormProcurar';

@inject('store') @observer
export default class Header extends React.Component {
  constructor (props){
    super(props);

    const { store } = this.props;

    if (store.userinfo.logged) {
      this.state = {
        logged: true,
        user_name: store.userinfo.user_name
      }

    } else {
      this.state = {
        logged: false
      };
    }
  }

  handleLogoutClick(){
    const { store } = this.props;
    store.userinfo.logged = false;
    window.location.reload();
  }

  render() {
    const { store } = this.props;
    let NavUsuario;
    let NavLogin;

    if (this.state.logged === true) {
      NavUsuario = (
        <Navbar.Text pullRight>
                  Signed in as: <Navbar.Link href="#">{store.userinfo.name}</Navbar.Link>
        </Navbar.Text>
              );
      NavLogin = (
        <Nav pullRight>
          <NavItem onClick={(e) => {this.handleLogoutClick(e)} }>
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


    return (
      <div className="header">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">E-Commerce</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/">
                Home
              </Link>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={2}>
              <Link to="/about">
                About
              </Link>
            </NavItem>
          </Nav>
          {NavLogin}
          {NavUsuario}
          <Nav pullRight>
            <NavItem eventKey={3}>
              <Link to="/carrinho">
                Carrinho
              </Link>
            </NavItem>
          </Nav>
          <FormProcurar />
        </Navbar>
      </div>
    );
  }
}
