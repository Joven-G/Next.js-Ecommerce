import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup, Tabs, Tab} from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

import Layout from '../components/Layout';

@inject('store') @observer
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cpfTitle: 'CPF' };
  }

  handleNewUer(){
    const { store } = this.props;

    const data = {
      "username": this.cpf.value,
      "name": this.nome.value,
      "password": this.pwd.value,
      "phone": this.telefone.value,
      "cpf": this.cpf.value,
      "email": this.email.value
    }

    console.log(data);

    // Fetch para cadastro de usuario
    fetch('http://mc437.ddns.net:5000/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then((data) => {
      console.log("Tentando registrar");
      console.log(data);

      if (data.error_code){
        store.snackbar = { active: true, message: 'Erro ao cadastrar ' + data.error_code, success: false };
      }else{
        console.log("SAOISADJAOSJDSOIJDSAIODJSOIADJSADASJOIJ");
        const data2 = {
          "api_key": "mc437_key_2017",
          "cpf": this.cpf.value,
          "name": this.nome.value,
          "street": "street name",
          "neighborhood": "neighborhood name",
          "city": "city name",
          "state": "sp"
        }

        console.log(data2);
        
        // Fetch para registrar no modulo de credito
        fetch('https://mc437.viniciusfabri.com/sc/api/person', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data2)
        }).then(response => response.json()).then((data) => {
          console.log("Tentando registrar no modulo de credito");
          console.log(data);
        });

        store.snackbar = { active: true, message: 'Usuario cadastrado com sucesso!', success: true };
      }

    });

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
          <p />
          <Tabs >
            <Tab eventKey={1} title="Login">
                <p />
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
              </Tab>
            <Tab eventKey={2} title="Novo Cliente">
                <p />
                <h1>Cadastro Cliente</h1>
               <form className="formCadastroCliente">
                 <FormGroup>
                   <ControlLabel>
                     {this.state.cpfTitle}
                   </ControlLabel>
                   <FormControl inputRef={(ref) => { this.cpf = ref; }} type="text" placeholder="Usuario" />
                 </FormGroup>
                 <FormGroup>
                   <ControlLabel>
                        Nome
                      </ControlLabel>
                   <FormControl type="text" inputRef={(ref) => { this.nome = ref; }} />
                 </FormGroup>
                 <FormGroup>
                   <ControlLabel>
                        Telefone
                      </ControlLabel>
                   <FormControl type="text" inputRef={(ref) => { this.telefone = ref; }} />
                 </FormGroup>
                 <FormGroup>
                   <ControlLabel>
                        Endereco
                      </ControlLabel>
                   <FormControl type="text" inputRef={(ref) => { this.endereco = ref; }} />
                 </FormGroup>
                 <FormGroup>
                   <ControlLabel>
                        CEP
                      </ControlLabel>
                   <FormControl type="text" inputRef={(ref) => { this.cep = ref; }} />
                 </FormGroup>
                 <FormGroup>
                   <ControlLabel>
                        E-mail
                      </ControlLabel>
                   <FormControl type="text" inputRef={(ref) => { this.email = ref; }} />
                 </FormGroup>
                 <FormGroup>
                   <ControlLabel>
                        Senha
                      </ControlLabel>
                   <FormControl type="password" inputRef={(ref) => { this.pwd = ref; }} />
                 </FormGroup>
                 <FormGroup>
                   <ControlLabel>
                        Confirmar Senha
                      </ControlLabel>
                   <FormControl type="password" inputRef={(ref) => { this.pwd = ref; }} />
                 </FormGroup>
                 <Button onClick={(e) => { this.handleNewUer(e); }}>
                     Cadastrar
                    </Button>
               </form>
            </Tab>
          </Tabs>
        </Layout>
      </div>
    );
  }
}
