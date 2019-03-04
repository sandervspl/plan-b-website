/* eslint-disable @typescript-eslint/no-explicit-any */
import * as i from 'types';

export type ErrorConfig = {
  hide?: boolean;
  message?: string;
}

export type RequestOptions = {
  path: string;
  options: RequestInit;
  file: any;
  errorConfig: ErrorConfig;
}

export type Options = {
  method: string;
  path: string;
  query?: any;
  body?: object;
  withAuth?: boolean;
  file?: any;
  error?: any;
}

export type FetchOptions = i.Omit<Options, 'method'>;

export type GenerateOptions = (options: Options) => RequestOptions;

export type Request = <T = any>(options: RequestOptions) => Promise<T>;

export type FetchCall = <T = any>(args: FetchOptions) => Promise<T>;

export type ApiError = {
  reason: string;
}

export type TriggerErrorMessage = (errorConfig: ErrorConfig, apiError: ApiError) => void;

export type HandleStatusCodes = (code: number) => boolean;

export type ApiHelper = {
  get: FetchCall;
  del: FetchCall;
  post: FetchCall;
  put: FetchCall;
  patch: FetchCall;
}
