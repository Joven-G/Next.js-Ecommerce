import React from 'react';

import Header from './Header';
import Menu from './Menu';
import Carrossel from './Carrossel';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

export default class Layout extends React.Component {

  render() {
    return (<div style={layoutStyle}>
      <Header />
      <Menu />
      <Carrossel />
      {this.props.children}
    </div>);
  }
}
