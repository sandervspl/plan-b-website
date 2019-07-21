import path from 'path';
import next from 'next';
import express from 'express';
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

  server
    .use((req, res) => {
      handle(req, res);
    })
    .listen(config.port, (err) => {
      if (err) throw err;

      console.info(
        `[${config.env} / ${config.appEnv}] Server running on port ${config.port} (${config.domain()})`
      );
    });
});
