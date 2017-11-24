import React from 'react';
import { inject, observer } from 'mobx-react';

import Layout from '../../components/Layout';
import GridLayout from '../../components/GridLayout';

@inject('store') @observer
export default class IndexProdutos extends React.Component {

  static fetchData({ store, api }) {
    return api.get('http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000', 'products', { group: 'grupo6' })
      .then((data) => {
        store.carrinho.produtos = data;
        return data;
      });
  }

  render() {
    return (
      <div>
        <Layout>
          <h1>Produtos em destaque:</h1>
          <GridLayout />
        </Layout>
      </div>
    );
  }
}
