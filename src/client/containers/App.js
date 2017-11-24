import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store', 'api') @observer
export default class App extends React.Component {

  render() {
    return this.props.children;
  }
}
