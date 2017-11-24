import express from 'express';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import useragent from 'express-useragent';
import config from '../../config/server.config';
import render from './render';
import error from './error';

require.extensions['.css'] = () => {};

const app = express();


app.disable('x-powered-by'); // Disable useless headers
app.use(compression());

app.use(helmet());

app.use(favicon(config.http.favicon));
app.use('/robots.txt', (req, res) => res.send(config.http.robots));

app.use(morgan('dev'));

app.use(cookieParser());

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));

// Serve static files
if (config.http.static.length !== 0) {
  config.http.static.map((route) => {
    console.log('[Static] %s -', route.url, route.path);
    return app.use(route.url, express.static(route.path));
  });
}

app.use(useragent.express());

app.use('/*', render);

app.use(error);

app.listen(config.http.port, () => {
  console.log('Launched ! Running on localhost:' + config.http.port);
});
