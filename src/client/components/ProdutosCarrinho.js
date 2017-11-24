import React from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';

@inject('store') @observer
export default class ProdutosCarrinho extends React.Component {
  state = {
    id: 123,
    nome: 'Produto',
    quantidade: 3,
    preco: 10
  }

  aumentaQtd = (produto) =>{
      const { store } = this.props;
      if(produto.stock>0)
      {
          produto.stock -= 1;

          store.carrinho.produtos[produto._id].quantidade += 1;
      }
      this.setState({});
      return;
  }

  diminuiQtd = (produto) =>{
      const { store } = this.props;
      if(store.carrinho.produtos[produto._id].quantidade>0)
      {
          store.carrinho.produtos[produto._id].quantidade -= 1;

          produto.stock += 1;
      }

      this.setState({});
      return;

  }

  removerCarrinho = (id) => {
    const { store } = this.props;

    delete store.carrinho.produtos[id];

    store.snackbar = { active: true, message: 'Produto retirado do carrinho com sucesso', success: true };
    alert('Remover do Carrinho produto de id: [' + id + ']');

    this.setState({});
  }

  render() {
    const produtos = Object.values(this.props.store.carrinho.produtos);

    return (
      <Table bordered striped responsive>
        <thead>
          <tr>
            <th>
                  Produto
                </th>
            <th>
                  Quantidade
                </th>
            <th>
                  Preço
                </th>
            <th>
                  Ações
                </th>
          </tr>
        </thead>
        <tbody>
          {/* 1 produto por linha*/}
          {
            produtos.length ?
              produtos.map(produto => <tr id={produto._id}>
                <th>
                  {produto.name}
                </th>
                <td>
                  {produto.quantidade}

                  <Button bsSize="xsmall" onClick={() => this.aumentaQtd(produto)}>+</Button>
                  <Button bsSize="xsmall" onClick={() => this.diminuiQtd(produto)}>-</Button>
                </td>
                <td>
                  {produto.price * produto.quantidade}
                </td>
                <td>
                  <Button
                    bsSize="xsmall"
                    onClick={() => this.removerCarrinho(produto._id)}
                  >
                    Remover do Carrinho
                  </Button>
                </td>
              </tr>)
              :
              <div>
                <p>Ops! Nenhum produto foi adicionado ao carrinho.</p>
                <Button as={Link} to="/" primary>
                  Procurar por produtos
                </Button>
              </div>
          }
        </tbody>
      </Table>
    );
  }
}
