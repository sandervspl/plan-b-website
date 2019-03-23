import * as i from 'types';
import { NextAppContext as INextAppContext, DefaultAppIProps } from 'next/app';

export type NextAppContext = INextAppContext & {
  store: i.Store;
}

export type NextPageComponent<P = {}> = React.FC<P> & {
  getInitialProps?(context: NextAppContext): Promise<DefaultAppIProps | {}>;
}
