import * as i from 'types';
import { NextAppContext as INextAppContext, DefaultAppIProps } from 'next/app';
import { Response, Request } from 'express';

export type NextAppContext = INextAppContext & {
  store: i.Store;
  res: Response;
  req: Request;
}

export type NextPageComponentProps<P = {}> = P & {
  url: string;
}

type NextPageComponentReturn<P = {}> = Partial<DefaultAppIProps> & NextPageComponentProps<P>;

export type NextPageComponent<P extends NextPageComponentProps = NextPageComponentProps> = React.FC<P> & {
  getInitialProps?(context: NextAppContext): NextPageComponentReturn | Promise<NextPageComponentReturn>;
}
