import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Message, Divider, Grid } from 'semantic-ui-react';
import { __ } from '../i18n';

@inject('store', 'api') @observer
export default class NotFound extends React.Component {

  static fetchData({ store }) {
    store.app.title = __('Not found');
  }

  render() {
    return (
      <Container id="NotFound">
        <Grid stackable>
          <Grid.Column width={4} />
          <Grid.Column stretched width={8}>
            <Container textAlign="center">
              <Message size="large" compact negative>
                <Message.Header>{__('Error (404) - Not Found')}</Message.Header>
                <p>{__('The requested url %s was not found.', this.props.location.pathname)}</p>
              </Message>
              <Divider section hidden />
            </Container>
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid>
      </Container>
    );
  }
}
