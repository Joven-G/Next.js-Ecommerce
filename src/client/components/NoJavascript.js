import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

import i18n, { __ } from '../i18n';

export default class NoJavascript extends React.Component {
  render() {
    return (<noscript>
      <Menu fixed="top" borderless style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }} inverted>
        <Menu.Item>
          <span><strong>{__('The Javascript is not enabled on your browser.')}</strong> {__('Enable so that our app can work properly!')}</span>
          <Button
            as="a"
            href={i18n.currentLocale() === 'pt' ? 'http://www.enable-javascript.com/pt/' : 'http://www.enable-javascript.com'}
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginLeft: '1.5rem' }}
            content={__('See how')}
            basic
            inverted
          />
        </Menu.Item>
      </Menu>
    </noscript>);
  }
}
