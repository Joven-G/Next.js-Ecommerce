import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default class ProdutosCarrinho extends React.Component {
  state = {
    id: 123,
    nome: 'Produto',
    quantidade: 3,
    preco: 10
  }

  removerCarrinho(id) {
    alert('Remover do Carrinho produto de id: [' + id + ']');
  }

  render() {
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
          <tr id={this.state.id} >
            <th>
              {this.state.nome}
            </th>
            <td>
              {this.state.quantidade}
            </td>
            <td>
              {this.state.preco}
            </td>
            <td>
              <Button
                bsSize="xsmall"
                onClick={this.removerCarrinho.bind(this, this.state.id)}
              >
                Remover do Carrinho
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
