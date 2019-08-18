import { compose } from 'redux';
import {
  RequestOptions, NextMiddleware, SetupRequest, RunMiddleware, Middleware, Options, ApiMethods,
} from './types';
import { generateOptions } from './generateOptions';
import { request } from './request';
import apiConfig from './config';

const runMiddleware: RunMiddleware = async (options, middlewares) => {
  // Make mutable copy of options
  let newOptions = { ...options };

  /**
   * Update request options
   * This is executed by the last middleware
   */
  const updateOptions = (requestOptions: RequestOptions) => {
    newOptions = requestOptions;
  };

  /**
   * Chain all middleware together
   * Pass updateOptions to last middleware in chain
   */
  const chain = compose<NextMiddleware>(...middlewares)(updateOptions);

  // Start running the middleware chain
  await chain(newOptions);

  return newOptions;
};

const setupRequest: SetupRequest = async (middlewares, options) => (
  request(
    await runMiddleware(
      generateOptions(options),
      middlewares
    )
  )
);

class ApiHelper {
  private middlewares: Middleware[] = [];

  public readonly methods: ApiMethods = {
    get: (args) => this.generateRequest({ method: 'GET', ...args }),
    del: (args) => this.generateRequest({ method: 'DELETE', ...args }),
    post: (args) => this.generateRequest({ method: 'POST', ...args }),
    put: (args) => this.generateRequest({ method: 'PUT', ...args }),
    patch: (args) => this.generateRequest({ method: 'PATCH', ...args }),
  };

  public readonly url: typeof apiConfig.url = apiConfig.url;

  public applyMiddleware = (middlewareList: Middleware[] | { [key: string]: Middleware }) => {
    this.middlewares = Array.isArray(middlewareList)
      ? middlewareList
      : Object.values(middlewareList);
  };

  private generateRequest = (options: Options) => setupRequest(this.middlewares, options);
};

export default ApiHelper;
