import Router from 'next/router';
import { Response } from 'express';
import config from 'config';

export const redirect = (res: Response, path = '/404', domain = config.domain()) => {
  if (res) {
    res.writeHead(302, { Location: `${domain}${path}` });
    res.end();
  } else {
    Router.push(path);
  }
};
