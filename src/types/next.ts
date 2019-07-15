import * as i from 'types';
import { NextAppContext as INextAppContext, DefaultAppIProps } from 'next/app';
import { Response, Request } from 'express';

export type NextAppContext<Q = {}> = INextAppContext & {
  store: i.Store;
  res: Response;
  req: Request;
  query: Q;
}

export type NextPageComponentProps<P = {}> = P & {
  url: string;
}

type NextPageComponentReturn<P = {}> = Partial<DefaultAppIProps> & NextPageComponentProps<P>;

export type NextPageComponent<
  P = {},
  Q = {}
> = React.FC<P & NextPageComponentProps> & {
  getInitialProps?(context: NextAppContext<Q>): NextPageComponentReturn | Promise<NextPageComponentReturn>;
}
