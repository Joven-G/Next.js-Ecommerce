import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'mobx-react';
import 'isomorphic-fetch';

import Html from '../client/containers/Html';
import utils from '../client/utils';
import { createAPI } from '../client/api';

import { createStore } from '../client/store';
import createRoutes from '../client/routes';

/**
 * Execute fetchDataMap methods for each component
 * @param renderProps
 * @param store - contains our store
 * @returns {Promise} - returns a promise
 */
const fetchDataMap = (renderProps, store, api, client) => {
  const params = renderProps.params;
  const location = renderProps.location;

  const fetchDataMethods = renderProps.components.filter(c => c.fetchData).map(c => c.fetchData);

  return utils.mapSeries(fetchDataMethods, (method => method({ store, params, location, api, client })));
};

// Handles page rendering ( for isomorphic / server-side-rendering too )
//----------------------
export default (req, res, next) => {
  // Create store to transfer
  const store = createStore();

  // Environment set
  const env = process.env.NODE_ENV || 'stage';

  // Set host variable to header's host
  store.app.host = req.headers.host;
  store.app.locale = req.lang;
  store.app.env = env;

  const api = createAPI();

  // Prepare for routing
  const matchRoutes = {
    routes: createRoutes(store),
    location: req.originalUrl
  };

  // Route
  match(matchRoutes, (error, redirectLocation, renderProps) => {
    if (error) return next({ store, status: 500, message: error.message });
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + (redirectLocation.state.nextPathname ? '?next=' + redirectLocation.state.nextPathname : ''));
    if (!renderProps) return next({ store, status: 404 });

    const statusCode = renderProps.routes[1].path !== '*' ? 200 : 404; // Check for "Not Found" page ( in this case we have path "*" ) and use code 404 if that's the case

    return fetchDataMap(renderProps, store, api).then(() => {
      const app = (
        <Provider store={store} api={api}>
          <Html>
            <RouterContext {...renderProps} />
          </Html>
        </Provider>
      );

      const content = ReactDOMServer.renderToStaticMarkup(app);
      return res.status(statusCode).send(`<!DOCTYPE html>\n${content}`);
    }).catch((err) => {
      next({ store, status: 404, message: err.message });
    });
  });
};
