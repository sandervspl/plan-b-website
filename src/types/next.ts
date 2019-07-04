import * as i from 'types';
import { NextAppContext as INextAppContext, DefaultAppIProps } from 'next/app';
import { Response, Request } from 'express';

export type NextAppContext = INextAppContext & {
  store: i.Store;
  res: Response;
  req: Request;
}

export type NextPageComponentProps = {
  url: string;
}

type NextPageComponentReturn = Partial<DefaultAppIProps> & NextPageComponentProps;

export type NextPageComponent<P extends NextPageComponentProps = NextPageComponentProps> = React.FC<P> & {
  getInitialProps?(context: NextAppContext): NextPageComponentReturn | Promise<NextPageComponentReturn>;
}
