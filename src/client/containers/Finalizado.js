import React from 'react';

import Layout from '../components/Layout';

export default class Finalizado extends React.Component {
  render() {

    return (
      <div>
        <Layout>
          <div>
            <h1>Compra efetuada</h1>
            <p>
              Muito obrigado por comprar na nossa loja! A compra foi efetuafa com sucesso!!
            </p>
          </div>
        </Layout>
      </div>
    );
  }
}
