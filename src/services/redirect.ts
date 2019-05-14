import Router from 'next/router';
import { Response } from 'express';
import config from 'config';

export const redirect = (res: Response, page = '/404') => {
  if (res) {
    res.writeHead(302, { Location: `${config.domain()}${page}` });
    res.end();
  } else {
    Router.push(page);
  }
};
