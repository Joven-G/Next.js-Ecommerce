import React from 'react';
import { Form, ControlLabel, FormGroup, FormControl, Button, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

import Layout from '../../components/Layout';
import ProdutosCarrinho from '../../components/ProdutosCarrinho';
import InformacoesCliente from '../../components/InformacoesCliente';

@inject('store', 'api') @observer
export default class CarrinhoIndex extends React.Component {

  state = {
      // logged: this.props.store.user || false;
    logged: false,
    frete: {
      preco: null,
      prazo: null
    },
    values: {
      endereco: '',
      cidade: '',
      estado: '',
      numero: '',
      cep: ''
    }
  }

  frete = () => {
    const cpf = document.getElementById('txtCpf').value;
    const endereco = document.getElementById('txtEndereco').value;
    alert('[' + cpf + '] [' + endereco + ']');
    this.setState({ preco: 20 });
  }

  handleBuyButton() {
    const { store } = this.props;


    if (!this.state.frete.preco) {
      alert('Calcule o frete antes de finalizar a compra!');
      store.snackbar = { active: true, message: 'Frete ainda nao foi calculado', success: false };
    } else if (!store.userinfo.logged) {
      store.snackbar = { active: true, message: 'Faça login para finalizar sua compra!', success: true };
      this.props.history.push('login');
    }
  }

  handleChange = (e, name) => {
    this.setState({ values: { ...this.state.values, [name]: e.target.value } });
  }

  calcularFrete = async () => {
    const { api, store } = this.props;
    const { cep, numero, estado, cidade, endereco } = this.state.values;
    let volume = 0;

    Object.values(store.carrinho.produtos).forEach((produto) => {
      volume += produto.quantidade * (parseInt(produto.dimensions[0], 10) * parseInt(produto.dimensions[1], 10) * parseInt(produto.dimensions[2], 10));
    });

    const data = await api.get('http://site-env.mxvnckfmbb.us-east-2.elasticbeanstalk.com', 'api/consulta', {
      id_site: 9,
      destino_cep: cep,
      destino_numero: numero,
      destino_estado: estado,
      destino_cidade: cidade,
      destino_endereco: endereco,
      volume
    });

    if (data.erro) {
      store.snackbar = { active: true, message: data.erro, success: false };
      return;
    }

    this.setState({ frete: { preco: data.preco, prazo: data.tempo } });
  }

  render() {
    const { store } = this.props;
    const { frete, values } = this.state;
    const dadosPreenchidos = values.endereco && values.cidade && values.estado && values.numero && values.cep;
    let precoProdutos = 0;

    Object.values(store.carrinho.produtos).forEach((produto) => {
      precoProdutos += produto.quantidade * (produto.price);
    });

    return (
      <div>
        <Layout>
          <div>
            <h1>Informações Cliente</h1>
            <InformacoesCliente />
          </div>
          <div>
            <h1>Produtos no Carrinho</h1>
            <ProdutosCarrinho />
          </div>

          {
            Object.values(store.carrinho.produtos).length ?
              <Panel header="Endereço de Entrega">
                <Form horizontal style={{ padding: '32px' }}>
                  <FormGroup>
                    <ControlLabel>Endereço</ControlLabel>
                    <FormControl
                      type="text"
                      value={values.endereco}
                      onChange={e => this.handleChange(e, 'endereco')}
                    />
                    <ControlLabel>Cidade</ControlLabel>
                    <FormControl
                      type="text"
                      value={values.cidade}
                      onChange={e => this.handleChange(e, 'cidade')}
                    />
                    <ControlLabel>Estado</ControlLabel>
                    <FormControl
                      type="text"
                      value={values.estado}
                      onChange={e => this.handleChange(e, 'estado')}
                    />
                    <ControlLabel>Número</ControlLabel>
                    <FormControl
                      type="text"
                      value={values.numero}
                      onChange={e => this.handleChange(e, 'numero')}
                    />
                    <ControlLabel>CEP</ControlLabel>
                    <FormControl
                      type="text"
                      value={values.cep}
                      onChange={e => this.handleChange(e, 'cep')}
                    />
                    <Col
                      componentClass={Button}
                      smOffset={1}
                      disabled={!dadosPreenchidos}
                      onClick={() => this.calcularFrete()}
                    >
                      {!frete.preco ? 'Calcular frete' : 'Re-Calcular Frete'}
                    </Col>
                  </FormGroup>
                  {
                    frete.preco ?
                      <div>
                        <Col>
                          <ListGroup>
                            <ListGroupItem header="Preço Frete">
                          R$ {frete.preco}
                            </ListGroupItem>
                            <ListGroupItem header="Preço Final">
                          R$ {frete.preco + precoProdutos}
                            </ListGroupItem>
                            <ListGroupItem header="Prazo Final">
                              {frete.prazo} dias
                      </ListGroupItem>
                          </ListGroup>
                        </Col>

                        <FormGroup>
                          <Col smOffset={2} sm={10}>
                            <Button onClick={() => { this.handleBuyButton(); }} bsSize="large">
                      Finalizar Compra
                    </Button>
                          </Col>
                        </FormGroup>
                      </div>
                  :
                  null
                  }
                </Form>
              </Panel>
            :
              null
          }
        </Layout>
      </div>
    );
  }
}
