import next from 'next';
import express from 'express';
import path from 'path';
import router from './router';
import config from '../config/index';

const app = next({
  dev: config.env !== 'production',
  // Set directory to search for pages
  dir: path.resolve('src'),
});

const handle = router.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server
    .use((req, res) => {
      handle(req, res);
    })
    .listen(config.port, (err) => {
      if (err) throw err;

      console.info(`[${config.env}] Server running on http://localhost:${config.port}`);
    });
});
