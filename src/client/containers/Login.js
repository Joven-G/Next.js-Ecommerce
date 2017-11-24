import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

import Layout from '../components/Layout';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cpfTitle: 'CPF' };
  }

    // Callback do botao de login (async?)
  handleLoginClick() {
    // const data = {"cpf": "34821505754", "password": "pass"}
    const data = { cpf: this.cpf.value, password: this.pwd.value };

      // Chama a api de clientes
    fetch('http://mc437.ddns.net:5000/client/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then((data) => {
      console.log(data);
      if (data.error_code == 'NOT_FOUND') {
          // Tratar login invalido
      } else {
        const user_id = data.payload.id;
        const token   = data.payload.token;

        localStorage.setItem('user_id', user_id);
        localStorage.setItem('token',   token);
        localStorage.setItem('logged',  true);

        // Segundo fetch pra pegar os dados do usuario
        fetch('http://mc437.ddns.net:5000/client/' + user_id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
          }
        }).then(response => response.json()).then((data) => {
          localStorage.setItem('user_name', data.payload.name);
          localStorage.setItem('user_phone', data.payload.phone);
          localStorage.setItem('user_cpf', data.payload.cpf);
          localStorage.setItem('user_email', data.payload.email);

        });

        // Volta pra home
        this.props.history.push('/');
      }
    });

  }

  render() {
    return (
      <div>
        <style type="text/css">{`
            .formLogin {
              width: 30%;
            }
          `}</style>
        <Layout>
          <h1>Login</h1>
          <form className="formLogin">
            <FormGroup>
              <ControlLabel>
                {this.state.cpfTitle}
              </ControlLabel>
              <FormControl inputRef={(ref) => { this.cpf = ref; }} type="text" placeholder="Usuario" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>
                   Senha
                 </ControlLabel>
              <FormControl type="password" inputRef={(ref) => { this.pwd = ref; }} />
            </FormGroup>
            <Button onClick={(e) => { this.handleLoginClick(e); }}>
                Entrar
               </Button>
          </form>
        </Layout>
      </div>
    );
  }
}
