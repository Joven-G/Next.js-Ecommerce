import React from 'react';
import { inject, observer } from 'mobx-react';
import { Segment, Table, Loader } from 'semantic-ui-react';
import { Button } from 'react-bootstrap';

import Layout from '../../components/Layout';

@inject('store') @observer
export default class ProdutosItem extends React.Component {

  static fetchData({ store, api, params }) {
    return api.get('http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000', 'products', {
      group: 'grupo6',
      _id: params.produto_id
    })
      .then((data) => {
        store.produto = data[0];
        return data;
      });
  }

  componentWillUnmount() {
    this.props.store.produto = null;
  }

  adicionarCarrinho = (produto) => {
    const { store } = this.props;

    if (store.carrinho.produtos[produto._id]) {
      store.carrinho.produtos[produto._id].quantidade += 1;
    } else {
      const novoProduto = { ...produto };

      novoProduto.quantidade = 1;

      store.carrinho.produtos[produto._id] = novoProduto;
    }

    store.snackbar = { active: true, message: 'Produto adicionado ao carrinho com sucesso', success: true };
  }

  render() {
    const { produto } = this.props.store;

    return (
      <div>
        <Layout>
          {
            !produto ?
              <Loader active />
             :
              <div>
                <h1>{produto.name}</h1>
                <Segment style={{ display: 'flex' }}>
                  <img
                    className="img-thumb"
                    src={produto.img[0]}
                    alt={produto.name}
                  />
                  <div style={{ margin: '20px 30px', fontSize: '14px' }}>
                    <p style={{ fontWeight: 'bold' }}>{produto.description}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Preço:</span> R$ {produto.price}</p>
                    <Button bsStyle="primary" onClick={() => this.adicionarCarrinho(produto)}>Adicionar ao carrinho</Button>&nbsp;
                  </div>
                </Segment>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell textAlign="right">Nome</Table.Cell>
                      <Table.Cell textAlign="left">{produto.name}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="right">Categoria</Table.Cell>
                      <Table.Cell textAlign="left">{produto.category}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="right">Modelo</Table.Cell>
                      <Table.Cell textAlign="left">{produto.model}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="right">Cor</Table.Cell>
                      <Table.Cell textAlign="left">{produto.color}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="right">Marca</Table.Cell>
                      <Table.Cell textAlign="left">{produto.brand}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
          }
        </Layout>
      </div>
    );
  }
}
