import React from 'react';
import { inject, observer } from 'mobx-react';
import { Notification } from 'react-notification';
import { Portal, Icon } from 'semantic-ui-react';

@inject('store', 'api') @observer
export default class SnackbarTest extends React.Component {

  componentWillUnmount = () => {
    this.hideSnackbar();
  }

  hideSnackbar = () => {
    this.props.store.snackbar = {
      active: false,
      message: '',
      success: false
    };
  };

  render() {
    const { store } = this.props;

    return (
      <Portal
        className="ui page modals dimmer transition visible active none"
        style={{ position: 'initial' }}
        open={store.snackbar.active}
      >
        <Notification
          isActive={store.snackbar.active}
          message={
            <div id="Snackbar">
              {
                store.snackbar.success ?
                  <Icon data-value="success" name="check circle" size="large" color="green" />
                :
                  <Icon data-value="error" name="exclamation circle" size="large" color="red" />
              }
              {store.snackbar.message}
            </div>
          }
          action="Dismiss"
          onClick={this.hideSnackbar}
          dismissAfter={2000}
          onDismiss={this.hideSnackbar}
        />
      </Portal>
    );
  }
}
//active, message, success, eventToggleSnackbar
