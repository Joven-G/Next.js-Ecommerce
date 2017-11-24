import React from 'react';
import { Table } from 'react-bootstrap';

export default class InformacoesCliente extends React.Component {

  state = {
    usuario: 'Usuario',
    nome: 'Nome',
    endereco: 'Endereco'
  }

  render() {
    return (
      <Table bordered striped responsive>
        {/* Aqui estão as Informações do Cliente
            Cada linha tem na primeira coluna um th, para deixar o label em negrito
            a segunda coluna é o valor que esta no cadastro do usuario*/}
        <tbody>
          <tr>
            <th>
              Cliente:
            </th>
            <td>
              {this.state.usuario}
            </td>
          </tr>
          <tr>
            <th>
              Nome:
            </th>
            <td>
              {this.state.nome}
            </td>
          </tr>
          <tr>
            <th>
              Endereço:
            </th>
            <td>
              {this.state.endereco}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
