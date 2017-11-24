import React from 'react';
import { Grid, Thumbnail, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
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

export default class FormProcurar extends React.Component {

  handleSubmit(e) {
      var string = document.getElementById('formBasicText').value;
      alert(string);
  }

  render() {
    return (
      <Navbar.Form>
        <FormGroup
          controlId="formBasicText" >
          <FormControl
            type="text"
            placeholder="Procurar Produtos"
          />
          {' '}
        <Button type="submit" onClick={this.handleSubmit}>Procurar</Button>
        </FormGroup>
      </Navbar.Form>
    );
  }
}
