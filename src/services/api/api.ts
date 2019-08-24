import { compose } from 'redux';
import {
  RequestOptions, NextMiddleware, SetupRequest, RunMiddleware, Middleware, Options, FetchCall,
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

  public get: FetchCall = (args) => this.generateRequest({ method: 'GET', ...args });
  public del: FetchCall = (args) => this.generateRequest({ method: 'DELETE', ...args });
  public post: FetchCall = (args) => this.generateRequest({ method: 'POST', ...args });
  public put: FetchCall = (args) => this.generateRequest({ method: 'PUT', ...args });
  public patch: FetchCall = (args) => this.generateRequest({ method: 'PATCH', ...args });

  public readonly url: typeof apiConfig.url = apiConfig.url;

  public applyMiddleware = (middlewareList: Middleware[] | Record<string, Middleware>) => {
    this.middlewares = Array.isArray(middlewareList)
      ? middlewareList
      : Object.values(middlewareList);
  };

  private generateRequest = (options: Options) => setupRequest(this.middlewares, options);
};

export default ApiHelper;
