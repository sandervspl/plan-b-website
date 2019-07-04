import path from 'path';
import next from 'next';
import express from 'express';
import favicon from 'serve-favicon';
import config from '../../config/index';
import router from './router';

const app = next({
  dev: config.env !== 'production',
  // Set directory to search for pages
  dir: path.resolve('src'),
});

const handle = router.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // @TODO fix static & fix this
  // https://www.npmjs.com/package/serve-favicon
  // server.use(favicon(path.resolve('src/static', 'favicon.ico')));

  server
    .use((req, res) => {
      handle(req, res);
    })
    .listen(config.port, (err) => {
      if (err) throw err;

      console.info(`[${config.env}] Server running on http://localhost:${config.port}`);
    });
});
