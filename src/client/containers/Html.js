//--------------------------------
// This is rendered ONLY on SERVER
//--------------------------------
/*eslint prefer-const: off*/
/*eslint-env es6*/
/*eslint import/no-unresolved: 0 */
/*eslint global-require: 0 */
import React from 'react';
import { inject } from 'mobx-react';
import fs from 'fs';
import path from 'path';
import config from '../../../config/server.config';

if (process.env.IS_CLIENT === true) {
  throw new Error('React Component <Html/> should not be included in the client');
}

@inject('store')
export default class Html extends React.Component {
  render() {
    const { store } = this.props;

    // Setup devServerURL accordingly ( webpack dev server has a different port )
    const isProd = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'stage';
    const isCi = process.env.NODE_ENV === 'ci';
    const devServerURL = isProd ? config.assets.cdn :
                          isCi ? '/public' :
                          `http://${store.app.host.replace(config.http.port, config.webpack.dev_port)}`;
    const env = process.env.NODE_ENV;
    const name = process.env.NAME;

    let hash = '';
    try {
      if (isProd) {
        const hashString = fs.readFileSync(path.resolve(__dirname, '../../../public/hash'));
        if (hashString) hash = '?hash=' + hashString;
      }
    } catch (ex) {
      console.error(ex);
    }

    // Setup metadata
    const metadata = {
      locale: store.app.locale,
      title: store.app.title,
      description: store.app.description,
      keywords: '',
      color: store.app.color
    };

    // Inject store ( used for mobx-connect )
    const injected_store = `window.__STORE = ${JSON.stringify(store, null, isProd ? 0 : 4)};`;

    return (
      <html lang={metadata.locale}>
        <head>
          <title>{(metadata.title) ? (metadata.title + ' • ' + store.app.name) : store.app.name}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <link
            rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
          />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href={`${devServerURL}/bundle${name ? '.' + name : ''}.${env}.css${hash}`} />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <script dangerouslySetInnerHTML={{ __html: injected_store }} />
        </head>
        <body>
          <div id="root">{this.props.children}</div>
          <script src={`${devServerURL}/bundle${name ? '.' + name : ''}.${env}.js${hash}`} />
        </body>
      </html>
    );
  }
}
