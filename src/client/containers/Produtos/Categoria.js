import React from 'react';
import { inject, observer } from 'mobx-react';
import Carrossel from '../../components/Carrossel';

import Layout from '../../components/Layout';
import GridLayout from '../../components/GridLayout';

const categoryTypes = {
  eletronicos: 'Eletrônicos',
  moda: 'Moda',
  moveis: 'Móveis',
  materialescolar: 'Material Escolar'
};

@inject('store') @observer
export default class ProdutosIndex extends React.Component {

  static fetchData({ store, api, params }) {
    return api.get('http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000', 'products', {
      group: 'grupo6',
      category: categoryTypes[params.category]
    }).then((data) => {
      store.produtos = data;
      return data;
    });
  }

  render() {
    const { params } = this.props;

    return (
      <div>
        <Layout>
        <Carrossel />
          <h1>{`Produtos da categoria: ${categoryTypes[params.category]}`}</h1>
          <GridLayout />
        </Layout>
      </div>
    );
  }
}
