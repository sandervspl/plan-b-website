import * as i from 'types';
import { NextAppContext as INextAppContext, DefaultAppIProps } from 'next/app';
import { Response, Request } from 'express';

export type NextAppContext = INextAppContext & {
  store: i.Store;
  res: Response;
  req: Request;
}

export type NextPageComponent<P = {}> = React.FC<P> & {
  getInitialProps?(context: NextAppContext): Promise<DefaultAppIProps | {}>;
}
