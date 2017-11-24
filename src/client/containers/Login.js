import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

import Layout from '../components/Layout';

@inject('store') @observer
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cpfTitle: 'CPF' };
  }

    // Callback do botao de login (async?)
  handleLoginClick() {
    const { store } = this.props;

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
      if (data.error_code) {
          store.snackbar = { active: true, message: 'Usuario não cadastrado ou senha invalida ' + data.error_code, success: false };

      } else {
        store.userinfo = {logged: true, user_id: data.payload.id, token: data.payload.token}

        console.log(store.userinfo)

        // Segundo fetch pra pegar os dados do usuario
        fetch('http://mc437.ddns.net:5000/client/' + store.userinfo.user_id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': store.userinfo.token
          }
        }).then(response => response.json()).then((data) => {
          store.userinfo.name     = data.payload.name;
          store.userinfo.phone    = data.payload.phone;
          store.userinfo.cpf      = data.payload.cpf;
          store.userinfo.phone    = data.payload.phone;

        });

        // Volta pra home
        store.snackbar = { active: true, message: 'Bem vindo (: ', success: true };
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
