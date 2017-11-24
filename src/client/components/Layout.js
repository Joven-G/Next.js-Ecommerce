import React from 'react';

import Header from './Header';
import Menu from './Menu';

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
      {this.props.children}
    </div>);
  }
}
