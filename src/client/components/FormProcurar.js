import React from 'react';
import { Button, FormControl, FormGroup, Navbar } from 'react-bootstrap';

export default class FormProcurar extends React.Component {

  handleSubmit(e) {
    const string = document.getElementById('formBasicText').value;
    alert(string);
  }

  render() {
    return (
      <Navbar.Form>
        <FormGroup
          controlId="formBasicText"
        >
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
