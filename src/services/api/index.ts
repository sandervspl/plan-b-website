import { generateOptions } from './generateOptions';
import { request } from './request';
import { ApiHelper, Options } from './types';
import apiConfig from './config';

const setupRequest = (options: Options) => request(generateOptions(options));

export const api: ApiHelper = {
  get: (args) => setupRequest({ method: 'GET', ...args }),
  del: (args) => setupRequest({ method: 'DELETE', ...args }),
  post: (args) => setupRequest({ method: 'POST', ...args }),
  put: (args) => setupRequest({ method: 'PUT', ...args }),
  patch: (args) => setupRequest({ method: 'PATCH', ...args }),
  url: apiConfig.url,
};
