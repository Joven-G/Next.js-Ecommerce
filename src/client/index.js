import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, RouterContext, browserHistory } from 'react-router';
import difference from 'lodash/difference';
import isEqual from 'lodash/isEqual';

import { createStore } from './store';
import createRoutes from './routes';

import autorun from './autorun';
import utils from './utils';
import { createAPI } from './api';

// Import our styles
require('./assets/css/styles.scss');

// Inject server-side store into front-end
const store = createStore(window.__STORE);

const api = createAPI();

// Setup autorun ( for document title change )
autorun(store);

// Wrap RouterContext with Provider for store transfer
function createElement(props) {
  return (
    <Provider store={store} api={api}>
      <RouterContext {...props} />
    </Provider>
  );
}

let ignoreFirstLoad = true;
function onRouterUpdate() {
  const { params, location, components } = this.state;

  // Get difference in components from previous routes to only fetch necessary data
  const diff = !isEqual(params, store.previous.params) ? components :
    difference(components, store.previous.components);
  store.previous.components = components;
  store.previous.params = params;
  store.previous.location = location;
  store.history.push(location.pathname);

  if (ignoreFirstLoad) {
    ignoreFirstLoad = false;
    return;
  }

  if (diff.length === 0) {
    const last = components[components.length - 1];
    diff.push(last);
  }

  const fetchDataMethods = diff.filter(c => c.fetchData).map(c => c.fetchData);

  if (fetchDataMethods.length) {
    store.pageLoading = true;
  }

  utils.mapSeries(fetchDataMethods, (method => method({ store, params, location, api })))
    .then(() => (store.pageLoading = false));
}


// Render HTML on the browser
function renderRouter() {
  render(
    <Router
      history={browserHistory}
      render={createElement}
      routes={createRoutes(store)}
      onUpdate={onRouterUpdate}
    />,
  document.getElementById('root'));
}

renderRouter();
