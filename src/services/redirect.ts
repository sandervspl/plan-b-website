import Router from 'next/router';
import { Response } from 'express';

export const redirect = (res: Response, page = '/404') => {
  if (res) {
    res.writeHead(302, { Location: `/${page}` });
    res.end();
  } else {
    Router.push('/apply');
  }
};
