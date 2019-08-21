/* eslint-disable @typescript-eslint/no-explicit-any */
import * as i from 'types';
import apiConfig from './config';

export type ErrorConfig = {
  hide?: boolean;
  message?: string;
}

export type RequestOptions = {
  path: string;
  options: RequestInit;
  file: any;
  errorConfig: ErrorConfig;
  withAuth: boolean;
}

export type Options = {
  method: string;
  path: string;
  query?: any;
  body?: object;
  withAuth?: boolean;
  file?: any;
  error?: any;
  url: i.ValueOf<typeof apiConfig.url>;
  headers?: HeadersInit_;
  upload?: boolean;
}

export type FetchOptions = Omit<Options, 'method'>;

export type GenerateOptions = (options: Options) => RequestOptions;

export type Request = <T = any>(options: RequestOptions) => Promise<T>;

export type FetchCall = <T = any>(args: FetchOptions) => Promise<T>;

export type ApiError = {
  reason: string;
}

export type TriggerErrorMessage = (errorConfig: ErrorConfig, apiError: ApiError) => void;

export type HandleStatusCodes = (code: number) => boolean;

export type ApiMethods = {
  get: FetchCall;
  del: FetchCall;
  post: FetchCall;
  put: FetchCall;
  patch: FetchCall;
}

export type ContentId = number;

export type BaseResponseBody = {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export type BaseDatabaseBody = {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type RunMiddleware = (options: RequestOptions, middlewares: Middleware[]) => Promise<RequestOptions>;

export type SetupRequest = (middlewares: Middleware[], options: Options) => Promise<any>;

export type Middleware = (next: NextMiddleware) => (options: RequestOptions, ...args: any) => void;
export type NextMiddleware = (options: RequestOptions, ...args: any) => void;
