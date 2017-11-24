import React from 'react';
import { Button, FormControl, FormGroup, Navbar } from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class FormProcurar extends React.Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = () => {
    browserHistory.push(`?name=${this.state.value}`);
    this.setState({ value: '' });
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
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
          {' '}
          <Button type="submit" onClick={() => this.handleSubmit()}>Procurar</Button>
        </FormGroup>
      </Navbar.Form>
    );
  }
}
