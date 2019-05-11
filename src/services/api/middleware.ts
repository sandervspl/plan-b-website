import { Middleware } from './types';

export const authMiddleware: Middleware = (next) => async (requestOptions) => {
  if (requestOptions.withAuth) {
    requestOptions.options = {
      credentials: 'include',
    };
  };

  next(requestOptions);
};
