import qs from 'qs';
import config from './config';
import { GenerateOptions } from './types';

export const generateOptions: GenerateOptions = ({
  method, path, query, body, withAuth = config.defaultWithAuth, file = false, error, url,
}) => ({
  path: `${url}/${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
  options: {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  },
  file,
  errorConfig: error,
  withAuth,
});
