import { Request } from 'express';

export const getUrl = (req: Request): string => {
  return req
    ? `${req.protocol}://${req.get('host')}${req.originalUrl}`
    : window
      ? window.location.href
      : '';
};
