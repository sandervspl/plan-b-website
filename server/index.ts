import next from 'next';
import express from 'express';
import config from '../config/index';
import router from './router';
import path from 'path';

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
