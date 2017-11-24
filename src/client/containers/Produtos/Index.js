import React from 'react';
import { inject, observer } from 'mobx-react';

import Layout from '../../components/Layout';
import GridLayout from '../../components/GridLayout';

@inject('store') @observer
export default class ProdutosIndex extends React.Component {

  static fetchData({ store, api, location }) {
    return api.get('http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000', 'products', {
      group: 'grupo6',
      name: location.query.name || ''
    })
      .then((data) => {
        store.produtos = data;
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
