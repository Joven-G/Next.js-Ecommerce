import React from 'react';
import { inject, observer } from 'mobx-react';

import Layout from '../components/Layout';

@inject('store') @observer
export default class Finalizado extends React.Component {

  componentWillUnmount() {
    this.props.store.finalizado = {};
  }

  render() {

    return (
      <div>
        <Layout>
          <div>
            <h1>Compra efetuada</h1>
            <p>
              Muito obrigado por comprar na nossa loja! A compra foi efetuafa com sucesso!!
            </p>

            <p>O id do seu pedido para consulta é: {this.props.store.finalizado.id}</p>
          </div>
        </Layout>
      </div>
    );
  }
}
