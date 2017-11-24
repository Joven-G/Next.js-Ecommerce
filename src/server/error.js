import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'mobx-react';

// Handle errors
export default (err, req, res, next) => {
  const content = ReactDOMServer.renderToStaticMarkup(
    <Provider store={err.store}>
      <html lang={err.store.app.locale}>
        <body>
          <p>{err.message}</p>
        </body>
      </html>
    </Provider>
  );
  return res.status(err.status).send(`<!DOCTYPE html>\n${content}`);
};
