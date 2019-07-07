import { Middleware } from './types';

export const authMiddleware: Middleware = (next) => async (requestOptions) => {
  next(requestOptions);
};
