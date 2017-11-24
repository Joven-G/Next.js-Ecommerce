import React from 'react';
import { inject, observer } from 'mobx-react';

import Layout from '../components/Layout';
import GridLayout from '../components/GridLayout';

@inject('store', 'api') @observer
export default class Index extends React.Component {

  render() {
    return (
      <div>
        <Layout>
          <h1>Produtos em destaque:</h1>
          <GridLayout produtos={this.props.produtos} />
        </Layout>
      </div>
    );
  }
}
