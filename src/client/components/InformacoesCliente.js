import React from 'react';
import { Table } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class InformacoesCliente extends React.Component {
  state = {
    usuario: " ",
    nome: " ",
    endereco: " "
  }

  render() {
    const { store } = this.props;
    console.log(store);
    console.log("PNSI");

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
              {store.userinfo.cpf}
            </td>
          </tr>
          <tr>
            <th>
              Nome:
            </th>
            <td>
              {store.userinfo.name}
            </td>
          </tr>
          <tr>
            <th>
              Endereço:
            </th>
            <td>
              {"Rua 10"}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
