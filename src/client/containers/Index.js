import React from 'react';
import { inject, observer } from 'mobx-react';
import Carrossel from '../components/Carrossel';

import Layout from '../components/Layout';
import GridLayout from '../components/GridLayout';

@inject('store', 'api') @observer
export default class Index extends React.Component {

  render() {
    return (
      <div>
        <Layout>
          <Carrossel />
          <h1>Produtos em destaque:</h1>
          <GridLayout produtos={this.props.produtos} />
        </Layout>
      </div>
    );
  }
}
