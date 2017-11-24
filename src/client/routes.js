import React from 'react';
import { Route, IndexRoute } from 'react-router';
import i18n from './i18n';

/**
 * Asynchronously load a file
 * @param main {String} - Main component
 * @returns {Function}
 */
function requireAsync(main) {
  return (nextState, next) => {
    next(null, require(`./containers/${main}`));
  };
}

/**
 * Set params from store
 * @returns {Function}
 */
const setParams = store => () => {
  i18n.locale = store.app.locale;
};

/**
 * Routes are defined here. They are loaded asynchronously.
 * Paths are relative to the "containers" directory.
 * @param {Object}
 * @returns {Object}
 */
export default function createRoutes(store) {
  return (
    <Route getComponent={requireAsync('App')} onEnter={setParams(store)}>

      <Route getComponent={requireAsync('Home')}>
        <Route getComponent={requireAsync('Index')} path="/" />
        <Route getComponent={requireAsync('About')} path="about" />
        <Route getComponent={requireAsync('Carrinho')} path="carrinho" />
        <Route getComponent={requireAsync('Login')} path="login" />
        <Route getComponent={requireAsync('Profile')} path="profile" />
      </Route>

      <Route getComponent={requireAsync('NotLoggedIn')} path="">
        <Route getComponent={requireAsync('NotFound')} path="*" />
      </Route>
    </Route>
  );
}
