import React from 'react';
import { inject, observer } from 'mobx-react';
import Snackbar from '../components/Snackbar';
import NoJavascript from '../components/NoJavascript';

@inject('store', 'api') @observer
export default class NotLoggedIn extends React.Component {

  componentWillUnmount() {
    this.props.store.snackbar = {
      active: false,
      message: '',
      success: false
    };
  }

  renderPrepends = () => this.props.store.prepends.map((prepend, i) =>
    <div key={i}>{prepend}</div>
  )

  renderAppends = () => this.props.store.appends.map((append, i) =>
    <div key={i}>{append}</div>
  )

  render() {
    return (
      <div>
        <NoJavascript />
        <Snackbar />
        {this.props.children}
      </div>
    );
  }
}
