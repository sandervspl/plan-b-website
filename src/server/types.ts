import { Registry, RouteParams } from 'next-routes';
import { EventChangeOptions } from 'next/router';

export type Router = Registry & {
  push(
    route: string,
    params?: RouteParams,
    options?: EventChangeOptions
  ): Promise<boolean>;
  routes: {
    name: string;
    page: string;
  }[];
}
