import qs from 'qs';
import config from './config';
import { GenerateOptions } from './types';

export const generateOptions: GenerateOptions = ({
  method, path, query, body, withAuth = config.defaultWithAuth, file = false, error, url,
  headers = {}, upload,
}) => {
  const _headers = headers;
  let _body = body;

  if (!upload) {
    _headers['Content-Type'] = 'application/json';
    _body = JSON.stringify(body);
  }

  return {
    path: `${url}/${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
    options: {
      method,
      headers: _headers,
      body: _body,
    },
    file,
    errorConfig: error,
    withAuth,
  };
};
