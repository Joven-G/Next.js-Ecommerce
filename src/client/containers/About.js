import React from 'react';

import Layout from '../components/Layout';

export default class About extends React.Component {

  render() {
    return (
      <Layout>
        <h3>
         Site de e-commerce criado para a disciplina de MC437 no 2s/2017
        </h3>

        <ul>
          <li>Lucas Brito</li>
          <li>Samuel Chenatti</li>
          <li>Akari Ishikawa</li>
          <li>Pedro Chinen</li>
          <li>Miguel Guida</li>
        </ul>
      </Layout>
    );
  }
}
