import React from 'react';

import Snackbar from '../components/Snackbar';
import NoJavascript from '../components/NoJavascript';

export default class App extends React.Component {

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
